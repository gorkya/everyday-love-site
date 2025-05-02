export interface FeaturedBookType {
  title: string;
  author: string;
  cover: string;
  description: string;
}

interface FeaturedBookProps {
  book: FeaturedBookType;
}

const FeaturedBook = ({ book }: FeaturedBookProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative pt-[60%] overflow-hidden">
        <img 
          src={book.cover} 
          alt={`Обложка книги "${book.title}"`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium text-everyday-darkBrown">{book.title}</h3>
        <p className="text-sm text-everyday-brown mb-3">{book.author}</p>
        <p className="text-everyday-brown line-clamp-3 mb-4">{book.description}</p>
      </div>
    </div>
  );
};

export default FeaturedBook;