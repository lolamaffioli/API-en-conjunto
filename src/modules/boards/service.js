// Simulación de base de datos en memoria
let boards = [];

export const BoardsService = {
  async create(title, ownerId) {
    const newBoard = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      ownerId,
      createdAt: new Date()
    };
    boards.push(newBoard);
    return newBoard;
  },

  async getAllByOwner(ownerId) {
    return boards.filter(board => board.ownerId === ownerId);
  },

  async getById(boardId) {
    const board = boards.find(b => b.id === boardId);
    if (!board) throw new Error("Tablero no encontrado");
    return board;
  }
};