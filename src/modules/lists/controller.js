import { ListsService } from './lists.service.js';

export const ListsController = {
  async createList(req, res) {
    try {
      const { title, boardId } = req.body;
      if (!title || !boardId) {
        return res.status(400).json({ message: "Título y boardId son requeridos" });
      }

      const newList = await ListsService.create(title, boardId);
      return res.status(201).json(newList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateList(req, res) {
    try {
      const { listId } = req.params;
      const { title } = req.body;

      if (!title) return res.status(400).json({ message: "El nuevo título es requerido" });

      const updatedList = await ListsService.updateName(listId, title);
      return res.status(200).json(updatedList);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
};