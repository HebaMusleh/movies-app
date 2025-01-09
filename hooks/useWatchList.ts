import { IData } from "@/types/types";
import { useEffect, useState } from "react";

export const useWatchList = () => {
    const [list, setList] = useState<IData[]>([]);

    const addBookmark = (movie: IData) => {
        setList([...(list || []), movie]);
    };
    const removeBookmark = (id: string | number) => {
        setList((prev = []) => prev.filter((bookmark) => bookmark.id !== id));
    };

    return {
        list,
        addBookmark,
        removeBookmark
    };
};
