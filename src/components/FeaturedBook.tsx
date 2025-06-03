export interface FeaturedBookType {
  title: string;
  author: string;
  coverUrl: string;
  description: string;
}

const FeaturedBook = ({
  title,
  author,
  coverUrl,
  description,
}: FeaturedBookType) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative pt-[60%] overflow-hidden">
        <img
          src={coverUrl}
          alt={`Обложка книги "${title}"`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium text-everyday-darkBrown">{title}</h3>
        <p className="text-sm text-everyday-brown mb-3">{author}</p>
        <p className="text-everyday-brown line-clamp-3 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedBook;
