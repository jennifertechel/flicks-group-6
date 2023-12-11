import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type LikeContextType = {
  likedMovies: string[];
  setLikedMovies: React.Dispatch<React.SetStateAction<string[]>>;
};

const LikeContext = createContext<LikeContextType | undefined>(undefined);

export const toggleLike = (
  likedMovies: string[],
  setLikedMovies: React.Dispatch<React.SetStateAction<string[]>>,
  title: string,
  isLiked: boolean,
  setIsLiked: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const isAlreadyLiked = likedMovies.includes(title);

  if (!isAlreadyLiked) {
    setLikedMovies([...likedMovies, title]);
    setIsLiked(true);
  } else {
    const updatedLikedMovies = likedMovies.filter(
      (likedMovie: string) => likedMovie !== title
    );
    setLikedMovies(updatedLikedMovies);
    setIsLiked(false);
  }
};

export const useLikeContext = () => {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("useLikeContext must be used within a LikeContextProvider");
  }
  return context;
};

export const LikeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [likedMovies, setLikedMovies] = useLocalStorage("likedMovies", []);

  return (
    <LikeContext.Provider value={{ likedMovies, setLikedMovies }}>
      {children}
    </LikeContext.Provider>
  );
};
