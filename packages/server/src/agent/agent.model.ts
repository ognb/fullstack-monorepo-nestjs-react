import { Field, HideField, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AgentView {
  @Field(() => Number, { nullable: false })
  id?: number;

  @Field(() => Number, { nullable: false })
  status?: number;

  @Field(() => String, { nullable: false })
  companyName?: string;

  @Field(() => String, { nullable: false })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: false })
  email: string;

  @HideField()
  password?: string;

  @Field(() => String, { nullable: true })
  img?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  workPhone?: string;

  @Field(() => String, { nullable: true })
  mobile?: string;

  @Field(() => String, { nullable: true })
  skype?: string;

  @Field(() => String, { nullable: true })
  facebook?: string;

  @Field(() => String, { nullable: true })
  twitter?: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;

  @Field(() => String, { nullable: true })
  token?: string;
}

@ObjectType()
@InputType()
export class AgentInput {
  @Field(() => String, { nullable: false })
  companyName!: string;

  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: false })
  lastName!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: false })
  mobile!: string;

  @Field(() => String, { nullable: true })
  workPhone?: string;

  @Field(() => String, { nullable: true })
  img?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  skype?: string;

  @Field(() => String, { nullable: true })
  facebook?: string;

  @Field(() => String, { nullable: true })
  twitter?: string;
}

@InputType()
export class AgentLoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(() => AgentView)
  agent: AgentView;
}
