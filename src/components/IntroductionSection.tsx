interface IntroductionSectionProps {
  title: string;
  paragraphs: string[];
}

const IntroductionSection = ({ title, paragraphs }: IntroductionSectionProps) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-everyday-cream">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif text-everyday-darkBrown mb-8 text-center">
          {title}
        </h2>
        <div className="prose-custom text-everyday-brown">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;