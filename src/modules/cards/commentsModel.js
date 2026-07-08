// Estructura de referencia de un comentario
export const CommentModel ={
    id: String,
    cardId: String,   // Relación con la tarjeta
    userId: String,  // Quién comentó
    text: String,
    createdAt: Date
}