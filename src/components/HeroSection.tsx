interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
}

const HeroSection = ({ title, subtitle, imageUrl, imageAlt }: HeroSectionProps) => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-everyday-softBlack/30 z-10"></div>
      <img 
        src={imageUrl} 
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
      <div className="container mx-auto px-6 absolute inset-0 z-20 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-serif text-center mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl animate-fade-in">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;