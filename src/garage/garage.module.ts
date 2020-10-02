import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoitureEntity } from './entities/voiture.entity';
import { GarageController } from './garage.controller';
import { GarageService } from './garage.service';

@Module({
  imports: [TypeOrmModule.forFeature([VoitureEntity])],
  controllers: [GarageController],
  providers: [GarageService],
  exports: [],
})
export class GarageModule {}
