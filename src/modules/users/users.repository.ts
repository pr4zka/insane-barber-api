import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

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

  async create(data: CreateUserDto) {
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

      // Si el rol es "barbero", crear automáticamente un registro en la tabla barberos
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
}
