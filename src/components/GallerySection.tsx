import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface GalleryImage {
  url: string;
  alt: string;
  description: string;
}

interface GallerySectionProps {
  title: string;
  images: GalleryImage[];
  buttonText: string;
  buttonLink: string;
}

const GallerySection = ({ title, images, buttonText, buttonLink }: GallerySectionProps) => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-serif text-everyday-darkBrown mb-8 text-center">
          {title}
        </h2>
        <ImageGallery images={images} />
        <div className="text-center mt-8">
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

export default GallerySection;