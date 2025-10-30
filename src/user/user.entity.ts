import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @ApiProperty({ example: 1, description: 'User ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Jakob', description: 'User name' })
  @Column()
  username: string;

  @ApiProperty({ example: 'test@email.com', description: 'User email' })
  @Column()
  email: string;

  @ApiProperty({ example: 'qwerty', description: 'User password' })
  @Column()
  password: string;
}
