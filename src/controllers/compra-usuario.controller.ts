import {authenticate} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Compra, Usuario} from '../models';
import {CompraRepository} from '../repositories';

@authenticate('admin')
export class CompraUsuarioController {
  constructor(
    @repository(CompraRepository)
    public compraRepository: CompraRepository,
  ) {}

  @get('/compras/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Compra',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.number('id') id: typeof Compra.prototype.id,
  ): Promise<Usuario> {
    return this.compraRepository.usuario(id);
  }
}
