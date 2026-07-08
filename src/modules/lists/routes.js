import { Router } from 'express';
import { ListsController } from './lists.controller.js';

const router = Router();

router.post('/', ListsController.createList);
router.put('/:listId', ListsController.updateList);

export default router;