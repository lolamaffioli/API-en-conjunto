let lists = [];

export const ListsService = {
  async create(title, boardId) {
    const newList = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      boardId, // Relación con el tablero
      createdAt: new Date()
    };
    lists.push(newList);
    return newList;
  },

  async updateName(listId, newTitle) {
    const list = lists.find(l => l.id === listId);
    if (!list) throw new Error("Lista no encontrada");
    
    list.title = newTitle;
    return list;
  },

  // Método útil para cuando busques un tablero y quieras meterle sus listas dentro
  async getListsByBoard(boardId) {
    return lists.filter(l => l.boardId === boardId);
  }
};