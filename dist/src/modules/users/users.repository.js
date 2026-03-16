"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const prisma_service_1 = require("../../prisma/prisma.service");
let UsersRepository = class UsersRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.usuario.findMany({
            select: {
                id: true,
                nombre: true,
                email: true,
                rolId: true,
                estado: true,
                rol: true,
            },
        });
    }
    async create(data) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.prisma.$transaction(async (tx) => {
            const usuario = await tx.usuario.create({
                data: {
                    nombre: data.nombre,
                    email: data.email,
                    password: hashedPassword,
                    rolId: data.rolId,
                    estado: data.estado ?? true,
                },
                select: {
                    id: true,
                    nombre: true,
                    email: true,
                    rolId: true,
                    estado: true,
                    rol: true,
                },
            });
            if (usuario.rol.nombre === 'barbero') {
                await tx.barbero.create({
                    data: {
                        nombre: usuario.nombre,
                        telefono: '',
                        especialidad: 'General',
                        estado: usuario.estado,
                        usuarioId: usuario.id,
                    },
                });
            }
            return usuario;
        });
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map