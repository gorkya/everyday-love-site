import { useState } from "react";
import Navbar from "@/components/Navbar";
import BookCard, { BookType } from "@/components/BookCard";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const books: BookType[] = [
    {
      id: 1,
      title: "Охота на овец",
      author: "Харуки Мураками",
      coverImage: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=400",
      description: "Роман Мураками, где главный герой оказывается втянут в странную историю, связанную с поиском особенной овцы. Повседневная жизнь героя описана с особой тщательностью и любовью к деталям: от привычки готовить спагетти до прослушивания пластинок в своей квартире.",
      quote: "Мне всегда казалось, что самое важное в жизни — это маленькие, незаметные радости. Утренний кофе, музыка по радио, неспешная прогулка по улицам.",
      themes: ["Одиночество", "Повседневность", "Поиск смысла"],
      year: 1982
    },
    {
      id: 2,
      title: "Маленькая жизнь",
      author: "Ханья Янагихара",
      coverImage: "https://images.unsplash.com/photo-1585437184597-13e43a9a6bf8?q=80&w=400",
      description: "История четырех друзей, проходящих свой путь от студенчества до зрелости в Нью-Йорке. Несмотря на трагичность повествования, автор с удивительной точностью и теплотой описывает бытовые моменты: приготовление еды, уборку квартиры, прогулки по городу.",
      quote: "В жизни каждого человека есть неизменные ритуалы, которые создают ощущение стабильности и уюта. Для Джуда это было приготовление ужина для друзей каждое воскресенье.",
      themes: ["Дружба", "Травма", "Исцеление", "Повседневность"],
      year: 2015
    },
    {
      id: 3,
      title: "Норвежский лес",
      author: "Харуки Мураками",
      coverImage: "https://images.unsplash.com/photo-1598521566364-ad888469853b?q=80&w=400",
      description: "Роман о взрослении, любви и потере. Мураками мастерски описывает студенческую жизнь главного героя, создавая уютную атмосферу при помощи деталей быта, музыки и природы.",
      quote: "Когда я пил чай, сидя у окна общежития, и смотрел на падающий снег, я чувствовал, что этот момент останется со мной навсегда.",
      themes: ["Потеря", "Воспоминания", "Юность"],
      year: 1987
    },
    {
      id: 4,
      title: "Тихий дом",
      author: "Орхан Памук",
      coverImage: "https://images.unsplash.com/photo-1531876510797-1195d5b17751?q=80&w=400",
      description: "История трех внуков, приехавших на лето к бабушке в прибрежный турецкий городок. В романе с необычайной любовью описаны повседневные ритуалы старого дома: скрип половиц, звон посуды, чаепития на веранде.",
      quote: "Каждое утро она просыпалась до рассвета, чтобы успеть испечь хлеб. В этом простом действии заключался весь смысл её существования.",
      themes: ["Семья", "Память", "Традиции"],
      year: 1983
    },
    {
      id: 5,
      title: "Бегуны",
      author: "Ольга Токарчук",
      coverImage: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=400",
      description: "Мозаичный роман, соединяющий множество историй о путешествиях и человеческом теле. Автор с особым вниманием относится к обыденным деталям: ощущение ног, касающихся земли во время бега, наблюдение за попутчиками в поезде, звуки аэропорта.",
      quote: "Путешествие — это не только перемещение между странами, но и тысячи повседневных ритуалов: сбор чемодана, проверка билетов, ожидание в очередях.",
      themes: ["Путешествия", "Тело", "Движение"],
      year: 2007
    },
    {
      id: 6,
      title: "Щегол",
      author: "Донна Тартт",
      coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400",
      description: "История мальчика, потерявшего мать при теракте в музее и укравшего бесценную картину. Автор с необычайной тщательностью описывает антикварные магазины, реставрацию мебели, уличные сцены Нью-Йорка и Лас-Вегаса.",
      quote: "Есть вещи, которые никогда не умирают. Старое дерево с его теплой текстурой, потрескавшийся лак, мелкие детали, которые держали этот стол вместе сотни лет.",
      themes: ["Искусство", "Потеря", "Зависимость", "Красота в деталях"],
      year: 2013
    },
    {
      id: 7,
      title: "4321",
      author: "Пол Остер",
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=400",
      description: "Роман о четырех параллельных жизнях одного человека — Арчи Фергюсона. В каждой версии судьбы героя автор уделяет особое внимание повседневным деталям: школьным занятиям, семейным ужинам, первым свиданиям.",
      quote: "В каждой из своих жизней он особенно ценил утренний ритуал: пробуждение в 6:30, чашка крепкого кофе, чтение газеты за кухонным столом.",
      themes: ["Судьба", "Выбор", "Взросление"],
      year: 2017
    },
    {
      id: 8,
      title: "Дом, в котором...",
      author: "Мариам Петросян",
      coverImage: "https://images.unsplash.com/photo-1512906008435-8a7060064563?q=80&w=400",
      description: "История о доме-интернате для детей с инвалидностью, который живет по своим законам и скрывает множество тайн. При всей фантастичности сюжета, автор с любовью описывает быт обитателей дома: спальни, классы, распорядок дня.",
      quote: "Каждая комната имела свой запах и звук. Если прислушаться, можно было услышать, как дышит дом, как скрипят его половицы, как шуршат занавески на окнах.",
      themes: ["Дружба", "Магический реализм", "Взросление"],
      year: 2009
    },
    {
      id: 9,
      title: "Кафе на краю света",
      author: "Джон П. Стрелеки",
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400",
      description: "Философская притча о путнике, случайно оказавшемся в загадочном кафе. Автор создает атмосферу уюта через описание обстановки кафе, аромата кофе, скрипа деревянного пола и вкуса домашнего пирога.",
      quote: "Тёплый свет лампы над столиком, запах свежесваренного кофе, шум дождя за окном — иногда эти простые вещи могут изменить жизнь человека.",
      themes: ["Философия", "Поиск смысла", "Простые радости"],
      year: 2003
    }
  ];

  const categories = [
    { id: "all", label: "Все" },
    { id: "everyday-life", label: "Повседневность" },
    { id: "melancholy", label: "Меланхолия" },
    { id: "philosophy", label: "Философия" }
  ];

  // Фильтрация книг по поисковому запросу
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-everyday-beige">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-serif text-everyday-darkBrown mb-4 text-center">
            Книги о красоте повседневности
          </h1>
          <p className="text-center text-everyday-brown max-w-2xl mx-auto mb-8">
            Подборка произведений, где авторы с особым вниманием и теплотой относятся к мелочам жизни,
            находя в них истинную красоту и смысл существования.
          </p>
          
          <div className="relative max-w-md mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-everyday-brown" />
            </div>
            <Input
              type="text"
              placeholder="Поиск по названию, автору или описанию..."
              className="pl-10 bg-white border-everyday-brown/30 focus:border-everyday-brown"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-md mx-auto bg-everyday-cream">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-everyday-brown data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
        
        <section className="bg-everyday-cream rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-serif text-everyday-darkBrown mb-4">
            Почему важно замечать красоту в повседневности?
          </h2>
          <div className="prose-custom text-everyday-brown">
            <p>
              Литература — одно из лучших средств, помогающих нам увидеть прекрасное в обыденном. 
              Писатели, мастерски владеющие словом, способны превратить приготовление чашки чая или 
              прогулку по осеннему парку в настоящую поэму.
            </p>
            <p>
              Читая такие книги, мы учимся замедляться, обращать внимание на детали, 
              ценить моменты, которые обычно проходят незаметно в суете дней. 
              Эта способность видеть красоту в мелочах делает нашу жизнь богаче и осмысленнее.
            </p>
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

export default Books;