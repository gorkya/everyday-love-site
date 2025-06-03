import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import QuoteSection from "@/components/QuoteSection";
import GallerySection from "@/components/GallerySection";
import BooksSection from "@/components/BooksSection";
import CallToAction from "@/components/CallToAction";
import { Separator } from "@/components/ui/separator";
import {
  heroContent,
  introductionContent,
  quoteContent,
  galleryContent,
  booksContent,
  ctaContent,
} from "@/data/homeData";

const Index = () => {
  return (
    <div className="min-h-screen bg-everyday-beige">
      <Navbar />

      <main>
        <HeroSection {...heroContent} />
        <IntroductionSection {...introductionContent} />
        <QuoteSection {...quoteContent} />
        <GallerySection {...galleryContent} />
        <BooksSection {...booksContent} />
        <CallToAction {...ctaContent} />
      </main>

      <footer className="py-8 px-6 bg-everyday-darkBrown text-white">
        <div className="container mx-auto">
          <Separator className="mb-6 bg-everyday-warmGray/30" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-everyday-beige mb-4 md:mb-0">
              © 2025 Красота повседневности
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-everyday-beige hover:text-white transition-colors"
              >
                О проекте
              </a>
              <a
                href="#"
                className="text-everyday-beige hover:text-white transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
