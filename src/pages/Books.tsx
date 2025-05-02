import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookGrid from "@/components/BookGrid";
import SearchBar from "@/components/SearchBar";
import PageHeader from "@/components/PageHeader";
import ReadingBenefits from "@/components/ReadingBenefits";
import BookCategoryTabs from "@/components/BookCategoryTabs";
import useBookFilter from "@/hooks/useBookFilter";
import { books, categories } from "@/data/bookData";

const Books = () => {
  const { 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory, 
    filteredBooks 
  } = useBookFilter(books);

  // Обработчик изменения категории
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Эффект для сброса скролла при изменении категории
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-everyday-beige flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="mb-12">
          <PageHeader 
            title="Книги о красоте повседневности"
            description="Подборка произведений, где авторы с особым вниманием и теплотой относятся к мелочам жизни,
            находя в них истинную красоту и смысл существования."
          />
          
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Поиск по названию, автору или описанию..."
          />
          
          <BookCategoryTabs 
            categories={categories} 
            defaultCategory="all"
          >
            {(categoryId) => {
              // Если категория изменилась, обновляем выбранную категорию
              if (categoryId !== selectedCategory) {
                handleCategoryChange(categoryId);
              }
              
              return <BookGrid books={filteredBooks} />;
            }}
          </BookCategoryTabs>
        </section>
        
        <ReadingBenefits />
      </main>
      
      <Footer />
    </div>
  );
};

export default Books;