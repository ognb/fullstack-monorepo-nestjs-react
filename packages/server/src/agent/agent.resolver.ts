import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AgentService } from 'src/agent/agent.service';
import { AgentView, AgentInput } from './agent.model';
// import { UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { enums } from '@oju/common';

@Resolver(() => AgentView)
export class AgentResolver {
  constructor(private readonly agentService: AgentService) {}

  @Query(() => [AgentView])
  // @UseGuards(JwtAuthGuard)
  async agents() {
    return this.agentService.findAll();
  }

  @Mutation(() => AgentView)
  async createAgent(@Args('input') input: AgentInput) {
    // console.log(enums);
    const agent = this.agentService.createAgent(input);
    return agent;
  }
}
