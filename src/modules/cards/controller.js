import { CardsService } from './cards.service.js';

export const CardsController = {
  async createCard(req, res) {
    try {
      const { title, listId } = req.body;
      if (!title || !listId) {
        return res.status(400).json({ message: "Título y listId son requeridos" });
      }

      const newCard = await CardsService.create(title, listId);
      return res.status(201).json(newCard);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateCard(req, res) {
    try {
      const { cardId } = req.params;
      // req.body puede traer: { listId, title, assignedTo, dueDate, tags }
      const updatedCard = await CardsService.update(cardId, req.body);
      return res.status(200).json(updatedCard);
    } catch (error) {
      return res.status(440).json({ message: error.message });
    }
  },

  async deleteCard(req, res) {
    try {
      const { cardId } = req.params;
      const result = await CardsService.delete(cardId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(444).json({ message: error.message });
    }
  },

  async createComment(req, res) {
    try {
      const { cardId } = req.params;
      const { text } = req.body;
      const userId = req.user?.id || "user_test_123";

      if (!text) return res.status(400).json({ message: "El texto del comentario es requerido" });

      const newComment = await CardsService.addComment(cardId, userId, text);
      return res.status(201).json(newComment);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
};