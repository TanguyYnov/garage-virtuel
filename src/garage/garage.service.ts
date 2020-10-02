import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VoitureEntity } from './entities/voiture.entity';
// import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GarageService {
  constructor(private readonly voituresRepository: Repository<VoitureEntity>) {}

  getVoitures() {
    return this.voituresRepository.find();
  }
}
