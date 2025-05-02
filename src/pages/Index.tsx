import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import ImageGallery from "@/components/ImageGallery";
import QuoteCard from "@/components/QuoteCard";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const heroImages = [
    {
      url: "https://cdn.poehali.dev/files/e5d99d93-6759-47e1-b7bf-99bb4e9ac770.jpg",
      alt: "Мягкий свет через занавески",
      description: "Тёплый свет, проникающий через тюлевые занавески, создаёт уютную атмосферу покоя"
    },
    {
      url: "https://cdn.poehali.dev/files/dc3ff4b3-0194-4f9e-a30f-9d8d7c06ff4a.jpg",
      alt: "Чай в лесу",
      description: "Горячий напиток согревает руки, пока вокруг шелестят осенние листья"
    },
    {
      url: "https://cdn.poehali.dev/files/837964ca-e48c-4db6-9fe6-03164b43a57c.jpg",
      alt: "Гамак в лесу с книгой",
      description: "Идеальное место для неспешного чтения среди деревьев"
    }
  ];

  const featuredBooks = [
    {
      title: "Охота на овец",
      author: "Харуки Мураками",
      cover: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=400",
      description: "Роман Мураками, где повседневная жизнь героя описана с особой тщательностью и любовью к деталям."
    },
    {
      title: "Маленькая жизнь",
      author: "Ханья Янагихара",
      cover: "https://images.unsplash.com/photo-1585437184597-13e43a9a6bf8?q=80&w=400",
      description: "История о дружбе, где автор с удивительной точностью и теплотой описывает бытовые моменты."
    },
    {
      title: "Щегол",
      author: "Донна Тартт",
      cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400",
      description: "Роман с необычайной тщательностью описывающий детали антикварных магазинов и городскую жизнь."
    }
  ];

  return (
    <div className="min-h-screen bg-everyday-beige">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-everyday-softBlack/30 z-10"></div>
          <img 
            src="https://cdn.poehali.dev/files/36e0f3c6-9476-4372-be18-6d5826856443.jpg" 
            alt="Деревянный дом с велосипедом"
            className="w-full h-full object-cover"
          />
          <div className="container mx-auto px-6 absolute inset-0 z-20 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif text-center mb-6 animate-fade-in">
              Красота повседневности
            </h1>
            <p className="text-lg md:text-xl text-center max-w-2xl animate-fade-in">
              Находить прекрасное в простых моментах жизни — это искусство, доступное каждому
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-6 md:px-12 bg-everyday-cream">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif text-everyday-darkBrown mb-8 text-center">
              Маленькие радости вокруг нас
            </h2>
            <div className="prose-custom text-everyday-brown">
              <p>
                В суматохе повседневности мы часто забываем замечать красоту, 
                которая окружает нас. Тёплый луч солнца, падающий на пол через 
                занавеску. Аромат свежезаваренного чая в кружке, которую держат 
                озябшие руки. Шелест страниц книги в тишине вечера.
              </p>
              <p>
                Эти моменты — настоящие сокровища, ускользающие от внимания, когда мы 
                слишком погружены в заботы и спешку. Но именно в них часто скрывается 
                подлинная радость и смысл нашего существования.
              </p>
              <p>
                Этот сайт — приглашение остановиться, сделать глубокий вдох и 
                увидеть прекрасное в обыденном. Позвольте себе заново открыть 
                простые радости, которые всегда были рядом.
              </p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-12 px-6 bg-everyday-green/10">
          <div className="container mx-auto max-w-2xl">
            <QuoteCard 
              quote="Счастье — это не что-то готовое. Оно происходит из ваших собственных действий."
              author="Далай-лама XIV"
            />
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-16 px-6 md:px-12">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-serif text-everyday-darkBrown mb-8 text-center">
              Моменты повседневной красоты
            </h2>
            <ImageGallery images={heroImages} />
            <div className="text-center mt-8">
              <a 
                href="/gallery" 
                className="inline-block px-6 py-3 bg-everyday-brown text-white rounded-md hover:bg-everyday-darkBrown transition-colors"
              >
                Смотреть все фотографии
              </a>
            </div>
          </div>
        </section>

        {/* Books Preview */}
        <section className="py-16 px-6 md:px-12 bg-everyday-cream">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center mb-8">
              <BookOpen className="h-7 w-7 text-everyday-brown mr-3" />
              <h2 className="text-2xl md:text-3xl font-serif text-everyday-darkBrown text-center">
                Книги о красоте повседневности
              </h2>
            </div>
            <p className="text-center text-everyday-brown max-w-2xl mx-auto mb-10">
              Подборка произведений, где авторы с особым вниманием и теплотой относятся к мелочам жизни,
              находя в них истинную красоту и смысл.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBooks.map((book, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative pt-[60%] overflow-hidden">
                    <img 
                      src={book.cover} 
                      alt={`Обложка книги "${book.title}"`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-everyday-darkBrown">{book.title}</h3>
                    <p className="text-sm text-everyday-brown mb-3">{book.author}</p>
                    <p className="text-everyday-brown line-clamp-3 mb-4">{book.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link 
                to="/books" 
                className="inline-block px-6 py-3 bg-everyday-brown text-white rounded-md hover:bg-everyday-darkBrown transition-colors"
              >
                Открыть полную подборку книг
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 md:px-12 bg-everyday-brown text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Найдите свои моменты красоты
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к нам в исследовании красоты обыденного. 
              Делитесь своими историями и наблюдениями о мелочах, 
              которые делают вашу жизнь особенной.
            </p>
            <a 
              href="/thoughts" 
              className="inline-block px-6 py-3 bg-white text-everyday-darkBrown rounded-md hover:bg-everyday-beige transition-colors"
            >
              Поделиться историей
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;