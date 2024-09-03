import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AllowPublic, CurrentUser, RoleGuard, Roles } from 'auth/auth.guard';
import { User } from 'user/user.entity';
import { Role } from 'user/user.model';
import { Place, PlaceAssign } from './place.entity';
import { PlaceService } from './place.service';

@Resolver(() => Place)
@UseGuards(RoleGuard)
export class PlaceResolver {
	constructor(private plcSvc: PlaceService) {}

	// Queries
	@Query(() => [Place])
	@AllowPublic(true)
	findAll() {
		return this.plcSvc.find();
	}

	// Mutations
	@Mutation(() => Boolean)
	@Roles([Role.STAFF])
	async createPlace(
		@CurrentUser() user: User,
		@Args('placeAssign') input: PlaceAssign,
	) {
		return Boolean(this.plcSvc.assign(input, user));
	}
}
