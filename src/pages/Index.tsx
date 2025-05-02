import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import QuoteSection from "@/components/QuoteSection";
import GallerySection from "@/components/GallerySection";
import BooksSection from "@/components/BooksSection";
import CallToAction from "@/components/CallToAction";

import { 
  heroContent, 
  introductionContent, 
  quoteContent,
  galleryContent,
  booksContent,
  ctaContent
} from "@/data/homeData";

const Index = () => {
  return (
    <div className="min-h-screen bg-everyday-beige">
      <Navbar />
      
      <main>
        <HeroSection 
          title={heroContent.title}
          subtitle={heroContent.subtitle}
          imageUrl={heroContent.imageUrl}
          imageAlt={heroContent.imageAlt}
        />

        <IntroductionSection 
          title={introductionContent.title}
          paragraphs={introductionContent.paragraphs}
        />

        <QuoteSection 
          quote={quoteContent.quote}
          author={quoteContent.author}
        />

        <GallerySection 
          title={galleryContent.title}
          images={galleryContent.images}
          buttonText={galleryContent.buttonText}
          buttonLink={galleryContent.buttonLink}
        />

        <BooksSection 
          title={booksContent.title}
          description={booksContent.description}
          books={booksContent.books}
          buttonText={booksContent.buttonText}
          buttonLink={booksContent.buttonLink}
        />

        <CallToAction 
          title={ctaContent.title}
          description={ctaContent.description}
          buttonText={ctaContent.buttonText}
          buttonLink={ctaContent.buttonLink}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;