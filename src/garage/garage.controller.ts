import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GarageService } from './garage.service';

@Controller('garage')
export class GarageController {
  constructor(private readonly garageService: GarageService) {}

  @Get()
  getAll() {
    Logger.log('get all voitures', 'GarageController');
    return this.garageService.getVoitures();
  }

  @Get(':voitureId')
  getOne(@Param('voitureId') voitureId) {
    Logger.log('Get one voiture', 'GarageController');
    return 'getOneVoiture';
  }

  @Post()
  create(@Body() voitureDto) {
    Logger.log('create one voiture', 'GarageController');
    return 'create voiture';
  }

  @Put(':voitureId')
  update(@Param('voitureId') voitureId, @Body() voitureDto) {
    Logger.log('Update one voiture', 'GarageController');
    return 'Updated voiture';
  }

  @Delete(':voitureId')
  remove(@Param('voitureId') voitureId) {
    Logger.log('Update one voiture', 'GarageController');
    return 'deleted voiture';
  }
}
