import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GarageModule } from './garage/garage.module';
import { GarageService } from './garage/garage.service';

@Module({
  imports: [GarageModule, TypeOrmModule.forRoot()],
  controllers: [],
  providers: [GarageService],
  exports: [],
})
export class AppModule {}
