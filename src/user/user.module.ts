import { AuthMiddleware } from '@backend/auth/auth.middleware';
import { AuthModule } from '@backend/auth/auth.module';
import { forwardRef, MiddlewareConsumer, Module } from '@nestjs/common';
import { registerEnumType } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { Role } from './user.enum';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
	imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
	providers: [UserResolver, UserService],
	exports: [UserService],
	controllers: [UserController],
})
export class UserModule {
	constructor() {
		registerEnumType(Role, { name: 'Role' });
	}
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(AuthMiddleware).forRoutes(UserController);
	}
}
