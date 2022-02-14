import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AgentResolver } from './agent.resolver';
import { AgentService } from './agent.service';

@Module({
  providers: [AgentService, AgentResolver, PrismaService],
  exports: [AgentService],
})
export class AgentModule {}
