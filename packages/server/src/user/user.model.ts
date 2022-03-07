import { Field, HideField, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Number, { nullable: false })
  id?: number;

  @Field(() => String, { nullable: false })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: false })
  email: string;

  @HideField()
  password?: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}

// firstName String   @db.VarChar(200)
// lastName  String   @db.VarChar(200)
// email     String   @unique(map: "email") @db.VarChar(200)
// password  String   @db.VarChar(500)

@ObjectType()
@InputType()
export class UserInput {
  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: false })
  lastName!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;
}

@InputType()
export class UserLoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(() => User)
  agent: User;
}
