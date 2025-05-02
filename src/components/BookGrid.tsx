import BookCard, { BookType } from "@/components/BookCard";

interface BookGridProps {
  books: BookType[];
}

const BookGrid = ({ books }: BookGridProps) => {
  if (books.length === 0) {
    return (
      <div className="text-center py-12 text-everyday-brown">
        <p>Книги не найдены. Попробуйте изменить параметры поиска.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;