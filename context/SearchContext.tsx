import { mockMoviesData } from "@/constants/data";
import { IData } from "@/types/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType<T> {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredData: IData[] | null;
  setData: (data: T[]) => void;
}

const SearchContext = createContext<SearchContextType<any> | undefined>(
  undefined
);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<IData[]>(mockMoviesData);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredData)

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        filteredData,
        setData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = <T,>(): SearchContextType<T> => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context as SearchContextType<T>;
};
