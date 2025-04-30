import { Card } from "@/components/ui/card";

type QuoteCardProps = {
  quote: string;
  author?: string;
};

const QuoteCard = ({ quote, author }: QuoteCardProps) => {
  return (
    <Card className="p-6 bg-everyday-cream border-everyday-beige hover:shadow-md transition-shadow">
      <blockquote className="text-everyday-darkBrown">
        <p className="font-serif text-lg md:text-xl italic mb-4">"{quote}"</p>
        {author && (
          <footer className="text-right text-everyday-brown">
            — {author}
          </footer>
        )}
      </blockquote>
    </Card>
  );
};

export default QuoteCard;
