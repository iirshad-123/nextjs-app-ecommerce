'use client';
import { createContext, useContext, useState } from "react";

const SearchContext = createContext<any>(null);

export function SearchProvider({ children }: any) {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}