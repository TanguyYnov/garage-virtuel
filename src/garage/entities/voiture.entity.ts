import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('voitures')
export class VoitureEntity {
  @PrimaryGeneratedColumn({ name: 'voiture_id' })
  id: number;

  @Column()
  marque: string;
  @Column({ type: 'int' })
  numeroDeModele: string;
}
