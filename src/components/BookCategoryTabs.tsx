import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface CategoryType {
  id: string;
  label: string;
}

interface BookCategoryTabsProps {
  categories: CategoryType[];
  defaultCategory?: string;
  children: (categoryId: string) => ReactNode;
}

const BookCategoryTabs = ({ 
  categories, 
  defaultCategory = "all", 
  children 
}: BookCategoryTabsProps) => {
  return (
    <Tabs defaultValue={defaultCategory} className="w-full">
      <TabsList className={`grid grid-cols-${categories.length} max-w-md mx-auto bg-everyday-cream`}>
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
          {children(category.id)}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default BookCategoryTabs;