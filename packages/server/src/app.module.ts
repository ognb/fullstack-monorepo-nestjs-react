import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { RecipesModule } from './recipes/recipes.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    RecipesModule,
    UserModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
