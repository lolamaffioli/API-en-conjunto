// Simulación de la base de datos en memoria
let cards = [];
let comments =[];

export const CardsService = {
    async create(title, listId) {
        const newCard = {
            id: Math.random() .toString(36) .substring(2, 9),
            title,
            description: "",
            listId,             // Relación con la lista
            assignedTo: null,  // ID del usuario asignado
            dueDate: null, 
            tags: [],
            createdAt: new Date()
        };
        cards.push(newCard);
        return newCard;
    },

    async update(cardId, updateData) {
        const card = cards.find(c => c.id === cardId);
        if (!card) throw new Error("Tarjeta no encontrada");

        // Copiamos las propiedades nuevas sobre la tarjeta existente
        // Esto permite cambiar el listId (mover de columna), asignar usuarios, fechas, etc. 
        Object.assign(card, updateData);
        return card;
    },

    async delete(cardId) {
        const cardIndex = cards.findIndex(c => c.id === cardId);
        if (cardIndex === -1) throw new Error("Tarjeta no encontrada");

        // Eliminamos la tarjeta y de paso sus comentarios (borrado en cascada)
        cards.splice(cardIndex, 1);
        comments = comments.filter(comment => comment.cardId !== cardId);
        return { message: "Tarjeta eliminada correctamente"};
    },
    async addComment (cardId, userId, text) {
        const card = cards.find(c => c.id === cardId);
        if (!card) throw new Error("No podes comentar en una tarjeta inexistente");

        const newComment = {
            id: Math.random() .toString(36) .substring(2, 9),
            cardId,
            userId,
            text,
            createdAt: new Date()
        };
        comments.push(newComment);
        return newComment;
    },

    // Método extra que va a servir para cuando queramos listar todo un tablero con sus cosas
    async getCardsByList(listId){
        return cards.filter(c => c.listId === listId);
    }
};