import {
	BadRequestException,
	Controller,
	Get,
	Req,
	UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from './user.entity';

@Controller('user')
export class UserController {
	@Get('')
	@UseGuards(AuthGuard('access'))
	getUser(@Req() req: Request) {
		if (req.user) return (req.user as User).info;
		throw new BadRequestException('User not valid/found');
	}
}