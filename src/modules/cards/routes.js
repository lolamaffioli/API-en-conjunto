import { Router } from 'express';
import { CardsController } from './controller.js';

const router = Router();

router.post('/', CardsController.createCard)
router.put('/:cardId', CardsController.updateCard);
router.delete('/:cardId', CardsController.deleteCard);

// Ruta para los comentarios de una tarjeta específica
router.post('/:cardId/comments', CardsController.createComment);

export default router;