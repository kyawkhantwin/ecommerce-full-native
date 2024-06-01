import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}

  async login(createLoginDto: CreateLoginDto) {
    const { nameOrEmail, password } = createLoginDto;
    const user = await this.databaseService.user.findFirst({
      where: {
        email: nameOrEmail,
      },
    });

    if (!user) {
      throw new NotFoundException("User or email doesn't exist");
    }

    const checkedPassword = await bcrypt.compare(password, user.password);

    if (!checkedPassword) {
      throw new UnauthorizedException('Password wrong');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_TOKEN_KEY, {
      expiresIn: '1h',
    });

    const userData = {
      username: user.username,
      email: user.email,
      location: user.location,
      id: user.id,
    };

    const data = [{ ...userData, token }];
    console.log('Login', data);

    return data;
  }

  async signup(createSignUpDto: Prisma.UserCreateInput) {
    const { email, password } = createSignUpDto;
    const emailExist = await this.databaseService.user.findFirst({
      where: {
        email: email,
      },
    });
    if (emailExist) {
      throw new ConflictException('Email already exist');
    }

    const hashSalt = 10;
    const hashedPassword = await bcrypt.hash(password, hashSalt);

    const user = await this.databaseService.user.create({
      data: { ...createSignUpDto, password: hashedPassword },
    });
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_TOKEN_KEY, {
      expiresIn: '1h',
    });
    const userData = {
      username: user.username,
      email: user.email,
      location: user.location,
      id: user.id,
    };
    const data = [{ ...userData, token }];
    console.log('SignIn', data);

    return data;
  }
}
