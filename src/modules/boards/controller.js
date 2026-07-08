import { BoardsService } from './boards.service.js';

export const BoardsController = {
  async createBoard(req, res) {
    try {
      const { title } = req.body;
      // req.user.id vendrá del middleware de autenticación de tu compañero
      const ownerId = req.user?.id || "user_test_123"; 

      if (!title) return res.status(400).json({ message: "El título es obligatorio" });

      const newBoard = await BoardsService.create(title, ownerId);
      return res.status(201).json(newBoard);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getBoards(req, res) {
    try {
      const ownerId = req.user?.id || "user_test_123";
      const userBoards = await BoardsService.getAllByOwner(ownerId);
      return res.status(200).json(userBoards);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getBoardById(req, res) {
    try {
      const { boardId } = req.params;
      const board = await BoardsService.getById(boardId);
      return res.status(200).json(board);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
};