import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

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
  password?: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  }
}
