import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Puesto,
  Zona,
} from '../models';
import {PuestoRepository} from '../repositories';

export class PuestoZonaController {
  constructor(
    @repository(PuestoRepository)
    public puestoRepository: PuestoRepository,
  ) { }

  @get('/puestos/{id}/zona', {
    responses: {
      '200': {
        description: 'Zona belonging to Puesto',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Zona)},
          },
        },
      },
    },
  })
  async getZona(
    @param.path.number('id') id: typeof Puesto.prototype.id,
  ): Promise<Zona> {
    return this.puestoRepository.zona(id);
  }
}
