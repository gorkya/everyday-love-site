
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import QuoteCard from "@/components/QuoteCard";

type ThoughtPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

const Thoughts = () => {
  const thoughts: ThoughtPost[] = [
    {
      id: 1,
      title: "Утренний ритуал",
      excerpt: "Каждое утро я завариваю себе чай и несколько минут просто смотрю в окно. Это маленькая медитация, которая помогает мне настроиться на новый день...",
      date: "28 апреля 2025",
      image: "https://cdn.poehali.dev/files/dc3ff4b3-0194-4f9e-a30f-9d8d7c06ff4a.jpg"
    },
    {
      id: 2,
      title: "Старые книги и их запах",
      excerpt: "Есть что-то особенное в запахе старых книг. Когда я открываю книгу, которая хранилась на полке годами, меня переполняет ностальгия...",
      date: "25 апреля 2025",
      image: "https://cdn.poehali.dev/files/837964ca-e48c-4db6-9fe6-03164b43a57c.jpg"
    },
    {
      id: 3,
      title: "Солнечные пятна на полу",
      excerpt: "В моей комнате есть одно особенное время дня, когда солнце заглядывает в окно под определённым углом, создавая узоры света на полу...",
      date: "20 апреля 2025",
      image: "https://cdn.poehali.dev/files/e5d99d93-6759-47e1-b7bf-99bb4e9ac770.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-everyday-beige">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-everyday-darkBrown mb-6 text-center">
            Размышления
          </h1>
          <p className="text-everyday-brown text-center max-w-3xl mx-auto text-lg">
            Здесь мы делимся мыслями о красоте повседневности и том, как находить радость в простых моментах жизни
          </p>
        </section>

        <Separator className="my-8 bg-everyday-brown/20" />
        
        <section className="mb-16">
          <QuoteCard 
            quote="Научитесь замечать, когда вы счастливы."
            author="Курт Воннегут"
          />
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {thoughts.map(post => (
              <Card key={post.id} className="overflow-hidden bg-everyday-cream border-none hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <p className="text-everyday-green text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-serif text-everyday-darkBrown mb-3">{post.title}</h3>
                  <p className="text-everyday-brown mb-4 line-clamp-3">{post.excerpt}</p>
                  <a 
                    href={`/thoughts/${post.id}`} 
                    className="inline-block text-everyday-darkGreen font-medium hover:text-everyday-green transition-colors story-link"
                  >
                    Читать дальше
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-everyday-brown text-white rounded-md hover:bg-everyday-darkBrown transition-colors"
            >
              Поделиться своей историей
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-everyday-darkBrown text-white">
        <div className="container mx-auto">
          <Separator className="mb-6 bg-everyday-warmGray/30" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-everyday-beige mb-4 md:mb-0">
              © 2025 Красота повседневности
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-everyday-beige hover:text-white transition-colors">
                О проекте
              </a>
              <a href="#" className="text-everyday-beige hover:text-white transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Thoughts;
