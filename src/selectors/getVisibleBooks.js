const removeAccents = str => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

export default ( books, { searchTerm } ) => books.filter( book => removeAccents( book.title ).includes( removeAccents( searchTerm ) ) );
