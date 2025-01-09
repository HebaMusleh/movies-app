import React, { createContext, useContext } from "react";

import { useWatchList } from "@/hooks/useWatchList";

import { IData } from "@/types/types";

interface BookmarkContextType {
  list: IData[] | null;
  addBookmark: (item: IData) => void;
  removeBookmark: (id: number|string) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

export const BookmarkProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { list, addBookmark,removeBookmark } = useWatchList();
  return (
    <BookmarkContext.Provider value={{ list, addBookmark ,removeBookmark}}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = (): BookmarkContextType => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};
