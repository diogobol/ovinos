import { Router } from 'express';
import { PesoController } from '../controller/peso';

const rota = Router();
const controller = new PesoController();

rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.get('/:id', controller.buscarPorId);
rota.get('/:id_animal',controller.buscarPorIdAnimal)

export default rota;