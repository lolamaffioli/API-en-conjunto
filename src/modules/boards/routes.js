import { Router } from 'express';
import { BoardsController } from './boards.controller.js';

const router = Router();

// NOTA: Aquí añadirían el middleware de auth de su compañero cuando esté listo
router.post('/', BoardsController.createBoard);
router.get('/', BoardsController.getBoards);
router.get('/:boardId', BoardsController.getBoardById);

export default router;