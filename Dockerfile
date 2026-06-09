# ── Stage 1: Dependencies ──
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# ── Stage 2: Build ──
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./
COPY . .

RUN npx prisma generate
RUN npm run build

# Verify build output exists
RUN test -f dist/src/main.js || (echo "ERROR: dist/src/main.js not found" && exit 1)

# ── Stage 3: Production ──
FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup -S nodejs && adduser -S nestjs -G nodejs

# COPY --chown evita una capa extra que duplica todo node_modules (RUN chown -R)
COPY --from=builder --chown=nestjs:nodejs /app/package.json ./
COPY --from=builder --chown=nestjs:nodejs /app/package-lock.json ./
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /app/generated ./generated
COPY --from=builder --chown=nestjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nestjs:nodejs /app/prisma.config.ts ./

USER nestjs

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=5s --start-period=40s --retries=5 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/api/docs || exit 1

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/src/main.js"]
