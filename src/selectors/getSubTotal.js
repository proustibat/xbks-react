export default books => books.reduce( (accumulator, book ) => accumulator + ( book.price * book.quantity ), 0 );
