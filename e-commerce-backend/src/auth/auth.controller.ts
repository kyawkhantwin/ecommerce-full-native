import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { Prisma } from '@prisma/client';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() CreateLoginDto: CreateLoginDto) {
    return this.authService.login(CreateLoginDto);
  }

  @Post('signup')
  signup(@Body() createSignUpDto: Prisma.UserCreateInput) {
    return this.authService.signup(createSignUpDto);
  }
}
