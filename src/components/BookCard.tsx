import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export type BookType = {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  quote?: string;
  themes?: string[];
  year?: number;
};

interface BookCardProps {
  book: BookType;
}

const BookCard = ({ book }: BookCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden">
        <div className="relative pt-[60%] overflow-hidden">
          <img
            src={book.coverImage}
            alt={`Обложка книги "${book.title}"`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg leading-tight text-everyday-darkBrown">{book.title}</CardTitle>
          <CardDescription>{book.author}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-everyday-brown line-clamp-3">{book.description}</p>
        </CardContent>
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full border-everyday-brown text-everyday-brown hover:bg-everyday-beige"
            onClick={() => setIsDialogOpen(true)}
          >
            Подробнее
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl bg-everyday-cream">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif text-everyday-darkBrown">{book.title}</DialogTitle>
            <DialogDescription className="text-everyday-brown">
              {book.author}{book.year ? `, ${book.year}` : ""}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <img
                src={book.coverImage}
                alt={`Обложка книги "${book.title}"`}
                className="w-full rounded-md shadow-md"
              />
              {book.themes && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2 text-everyday-darkBrown">Темы:</h4>
                  <div className="flex flex-wrap gap-1">
                    {book.themes.map((theme, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2 py-1 bg-everyday-beige rounded-full text-everyday-brown"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="w-full md:w-2/3 flex flex-col">
              <div className="text-everyday-brown">
                <p className="mb-4">{book.description}</p>
                {book.quote && (
                  <blockquote className="border-l-2 border-everyday-brown pl-4 italic my-4">
                    {book.quote}
                  </blockquote>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookCard;