import QuoteCard from "@/components/QuoteCard";

interface QuoteSectionProps {
  quote: string;
  author: string;
}

const QuoteSection = ({ quote, author }: QuoteSectionProps) => {
  return (
    <section className="py-12 px-6 bg-everyday-green/10">
      <div className="container mx-auto max-w-2xl">
        <QuoteCard 
          quote={quote}
          author={author}
        />
      </div>
    </section>
  );
};

export default QuoteSection;