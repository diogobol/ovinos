import { Router } from 'express';
import { AnimalController } from '../controller/animal';

const rota = Router();
const controller = new AnimalController();

rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.get('/:id', controller.buscarPorId);

export default rota;