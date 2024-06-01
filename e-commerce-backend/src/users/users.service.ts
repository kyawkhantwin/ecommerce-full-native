import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt'; // Import bcrypt for password hashing
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    try {
      const { password } = createUserDto;
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds); // Hash the password
      const userToCreate = {
        ...createUserDto,
        password: hashedPassword, // Replace the plain password with the hashed one
      };
      return await this.databaseService.user.create({ data: userToCreate });
    } catch (error) {
      throw new InternalServerErrorException('Could not create user');
    }
  }

  async findAll() {
    try {
      const users = await this.databaseService.user.findMany();
      if (users.length === 0) {
        throw new NotFoundException('No users found');
      }
      return users;
    } catch (error) {
      throw new InternalServerErrorException('Could not retrieve users');
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.databaseService.user.findUnique({
        where: { id },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Could not retrieve the user');
    }
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    try {
      return await this.databaseService.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      throw new InternalServerErrorException('Could not update user');
    }
  }

  async remove(id: number) {
    try {
      const user = await this.databaseService.user.findUnique({
        where: { id },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return await this.databaseService.user.delete({ where: { id } });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Could not delete the user');
    }
  }
}
