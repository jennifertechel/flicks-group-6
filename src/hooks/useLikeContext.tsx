import React, { createContext, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

type LikeContextType = {
  likedMovies: string[];
  setLikedMovies: React.Dispatch<React.SetStateAction<string[]>>;
};

const LikeContext = createContext<LikeContextType | undefined>(undefined);

function usetoggleLike(
  likedMovies: string[],
  setLikedMovies: React.Dispatch<React.SetStateAction<string[]>>,
  title: string,
  isLiked: boolean,
  setIsLiked: React.Dispatch<React.SetStateAction<boolean>>
) {
  const isAlreadyLiked = likedMovies.includes(title);

  if (!isAlreadyLiked) {
    setLikedMovies([...likedMovies, title]);
    setIsLiked(true);
  } else {
    const updatedLikedMovies = likedMovies.filter(function (
      likedMovie: string
    ) {
      return likedMovie !== title;
    });
    setLikedMovies(updatedLikedMovies);
    setIsLiked(false);
  }
}

function useLikeContext() {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("Something went wrong");
  }
  return context;
}

const LikeContextProvider: React.FC<{ children: React.ReactNode }> = function ({
  children,
}) {
  const [likedMovies, setLikedMovies] = useLocalStorage("likedMovies", []);

  return (
    <LikeContext.Provider value={{ likedMovies, setLikedMovies }}>
      {children}
    </LikeContext.Provider>
  );
};

export { usetoggleLike, useLikeContext, LikeContextProvider };
