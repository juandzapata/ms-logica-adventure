import {
  belongsTo,
  Entity,
  hasMany,
  model,
  property
} from '@loopback/repository';
import {Ciudad} from './ciudad.model';
import {Zona} from './zona.model';
import {Categoria} from './categoria.model';

@model({
  settings: {
    foreignKeys: {
      fk_id_ciudad: {
        name: 'fk_id_ciudad',
        entity: 'Ciudad',
        entityKey: 'id',
        foreignKey: 'ciudadId',
      },
      fk_id_categoria: {
        name: 'fk_id_categoria',
        entity: 'Categoria',
        entityKey: 'id',
        foreignKey: 'categoriaId',
      },
    },
  },
})
export class Parque extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  capacidad: number;

  @property({
    type: 'string',
  })
  imagenLogo?: string;

  @property({
    type: 'string',
  })
  imagenMapa?: string;

  @property({
    type: 'string',
    required: true,
  })
  eslogan: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @belongsTo(() => Ciudad)
  ciudadId: number;

  @hasMany(() => Zona)
  zonas: Zona[];

  @belongsTo(() => Categoria)
  categoriaId: number;

  constructor(data?: Partial<Parque>) {
    super(data);
  }
}

export interface ParqueRelations {
  // describe navigational properties here
}

export type ParqueWithRelations = Parque & ParqueRelations;
