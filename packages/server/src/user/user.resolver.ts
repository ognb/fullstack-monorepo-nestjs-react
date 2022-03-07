import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import { User, UserInput } from './user.model';
// import { UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { enums } from '@oju/common';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  // @UseGuards(JwtAuthGuard)
  async users() {
    return this.userService.findAllUser();
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: UserInput) {
    const user = this.userService.createUser(input);
    return user;
  }
}
