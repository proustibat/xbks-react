export default books => books.reduce( ( accumulator, book ) => accumulator + book.quantity, 0 );
