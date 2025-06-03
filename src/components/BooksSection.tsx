import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import FeaturedBook, { FeaturedBookType } from "./FeaturedBook";

interface BooksSectionProps {
  title: string;
  description: string;
  books: FeaturedBookType[];
  buttonText: string;
  buttonLink: string;
}

const BooksSection = ({
  title,
  description,
  books,
  buttonText,
  buttonLink,
}: BooksSectionProps) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-everyday-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center mb-8">
          <BookOpen className="h-7 w-7 text-everyday-brown mr-3" />
          <h2 className="text-2xl md:text-3xl font-serif text-everyday-darkBrown text-center">
            {title}
          </h2>
        </div>
        <p className="text-center text-everyday-brown max-w-2xl mx-auto mb-10">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {books.map((book, index) => (
            <FeaturedBook key={index} {...book} />
          ))}
        </div>
        <div className="text-center">
          <Link
            to={buttonLink}
            className="inline-block px-6 py-3 bg-everyday-brown text-white rounded-md hover:bg-everyday-darkBrown transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
