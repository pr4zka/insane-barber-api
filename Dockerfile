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
RUN test -f dist/main.js || (echo "ERROR: dist/main.js not found" && ls -la dist && exit 1)

# ── Stage 3: Production ──
FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup -S nodejs && adduser -S nestjs -G nodejs

COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./

# If your app needs any static assets/config files, copy them here too
# COPY --from=builder /app/src/templates ./src/templates

RUN chown -R nestjs:nodejs /app

USER nestjs

EXPOSE 3000


CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]