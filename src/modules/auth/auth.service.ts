import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
      include: { rol: true },
    });

    if (!user) {
      throw new UnauthorizedException(
        'El correo electrónico o la contraseña son incorrectos.',
      );
    }

    if (!user.estado) {
      throw new UnauthorizedException(
        'Su cuenta está desactivada. Contacte al administrador.',
      );
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException(
        'El correo electrónico o la contraseña son incorrectos.',
      );
    }

    const payload = {
      sub: user.id,
      email: user.email,
      rolId: user.rolId,
      rolNombre: user.rol.nombre,
    };

    const token = await this.jwtService.signAsync(payload);

    const { password, ...userWithoutPassword } = user;

    return {
      token,
      user: userWithoutPassword,
    };
  }

  async me(userId: number) {
    const user = await this.prisma.usuario.findUnique({
      where: { id: userId },
      include: { rol: true },
    });

    if (!user) {
      throw new UnauthorizedException(
        'No se encontró el usuario asociado a esta sesión. Inicie sesión nuevamente.',
      );
    }

    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}
