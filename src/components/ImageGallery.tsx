import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Image = {
  url: string;
  alt: string;
  description?: string;
};

type ImageGalleryProps = {
  images: Image[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-md shadow-md cursor-pointer image-fade"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                src={image.url}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-everyday-cream">
          {selectedImage && (
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/3">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-6 w-full md:w-1/3 flex flex-col justify-center">
                <h3 className="text-xl font-serif text-everyday-darkBrown mb-3">
                  {selectedImage.alt}
                </h3>
                {selectedImage.description && (
                  <p className="text-everyday-brown">{selectedImage.description}</p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageGallery;
