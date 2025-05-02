import { useState, useCallback, useMemo } from "react";
import { BookType } from "@/components/BookCard";

export interface BookFilterOptions {
  searchQuery?: string;
  category?: string;
}

export const useBookFilter = (books: BookType[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Мемоизированный результат фильтрации
  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      // Поиск по тексту
      const matchesSearch = 
        searchQuery === "" || 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Фильтрация по категории
      const matchesCategory = 
        selectedCategory === "all" || 
        (selectedCategory === "everyday-life" && book.themes.some(theme => 
          ["Повседневность", "Красота в деталях"].includes(theme))) ||
        (selectedCategory === "melancholy" && book.themes.some(theme => 
          ["Потеря", "Одиночество", "Травма"].includes(theme))) ||
        (selectedCategory === "philosophy" && book.themes.some(theme => 
          ["Философия", "Поиск смысла"].includes(theme)));
      
      return matchesSearch && matchesCategory;
    });
  }, [books, searchQuery, selectedCategory]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredBooks
  };
};

export default useBookFilter;