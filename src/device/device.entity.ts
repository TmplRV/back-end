import { User } from '@backend/user/user.entity';
import { EntityBase } from '@backend/utils';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class DeviceSession extends EntityBase<DeviceSession> {
	@PrimaryGeneratedColumn('uuid') id: string;
	@ManyToOne(() => User, (user) => user.deviceSessions)
	@JoinColumn({ name: 'userId' })
	user: User;
	@Column() userId: string;
	@Column() hashedUserAgent: string;
	@Column() useTimeLeft: number;
}
