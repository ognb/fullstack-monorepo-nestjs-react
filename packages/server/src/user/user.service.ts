import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, UserInput } from './user.model';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // // check Logged in
  // async isLoggedInAgent(email: string): Promise<User | null> {
  //   const agents = this.prisma.users.findFirst({
  //     where: { email: email, status: 0 },
  //   });
  //   return agents;
  // }

  async findAllUser(): Promise<User[]> {
    const users = this.prisma.users.findMany({});
    return users;
  }

  async createUser(input: UserInput): Promise<User | null> {
    const newUser = {
      ...input,
      password: await bcrypt.hash(input.password, 10),
    };
    const agent = this.prisma.users.create({
      data: newUser,
    });
    return agent;
  }
}
