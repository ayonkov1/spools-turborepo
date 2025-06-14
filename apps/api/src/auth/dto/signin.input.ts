import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SignInInput {
  @Field(() => String)
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  password: string;
}
