import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AgentView, AgentInput } from './agent.model';
// import * as bcrypt from 'bcryptjs';

@Injectable()
export class AgentService {
  constructor(private readonly prisma: PrismaService) {}

  // // check Logged in
  // async isLoggedInAgent(email: string): Promise<AgentView | null> {
  //   const agents = this.prisma.agents.findFirst({
  //     where: { email: email, status: 0 },
  //   });
  //   return agents;
  // }

  // async findActiveAgent(email: string): Promise<AgentView | null> {
  //   const agents = this.prisma.agents.findFirst({
  //     where: { email: email, status: 0 },
  //   });
  //   return agents;
  // }

  async findAll(): Promise<AgentView[]> {
    const agents = this.prisma.agents.findMany({
      where: { status: 0 },
    });
    return agents;
  }

  async createAgent(input: AgentInput): Promise<AgentView | null> {
    const newAgent = {
      ...input,
      status: 0,
      // password: await bcrypt.hash(input.password, 10),
    };
    const agent = this.prisma.agents.create({
      data: newAgent,
    });
    return agent;
  }
}
