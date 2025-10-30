import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  //CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum ServiceType {
  WEB_DEVELOPMENT = 'Website Development',
  MOBILE_DEVELOPMENT = 'Mobile Development',
  CONSULTING = 'Consulting',
  DESIGN = 'Design',
  MARKETING = 'Marketing',
}

@Entity({ name: 'companies' })
export class CompanyEntity {
  @ApiProperty({ example: 1, description: 'Company ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Awesome Corp', description: 'Company name' })
  @Column()
  name: string;

  //   @ApiProperty({
  //     example: ServiceType.WEB_DEVELOPMENT,
  //     description: 'Service provided by the company',
  //     enum: ServiceType,
  //   })
  //   @Column({ type: 'enum', enum: ServiceType })
  //   service: ServiceType;

  //   @ApiProperty({
  //     example: '2025-10-30T12:00:00Z',
  //     description: 'Date of entry creation',
  //   })
  //   @CreateDateColumn()
  //   createdAt: Date;

  //   @ApiProperty({ example: 480000, description: 'Company capital amount' })
  //   @Column({ type: 'decimal', precision: 15, scale: 2 })
  //   capital: number;

  //   @ApiProperty({
  //     example: 'Leading provider of web solutions...',
  //     description: 'Company details',
  //   })
  //   @Column({ type: 'text' })
  //   detail: string;
}
