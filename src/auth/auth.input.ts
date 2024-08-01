import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignUpDto {
  @Field({ nullable: false })
  firstName!: string;

  @Field({ nullable: false })
  lastName!: string;

  @Field({ nullable: false })
  email!: string;

  @Field({ nullable: false })
  password!: string;
}

@InputType()
export class LoginDto {
  @Field({ nullable: false })
  email!: string;

  @Field({ nullable: false })
  password!: string;
}
