"use client";

import { createContext, useContext } from "react";
import {
  LoadingContextType,
  LoadingProvider,
  useLoading,
} from "./LoadingContext";
import FavoritesProvider, {
  FavoritesContextType,
  useFavorites,
} from "./FavoritesContext";

interface GlobalContextType {
  loading: LoadingContextType;
  favorites: FavoritesContextType;
}

const initialContext: GlobalContextType = {
  loading: {
    isInitialLoad: true,
    isLoading: false,
    setIsInitialLoad: () => {},
    setIsLoading: () => {},
  },
  favorites: {
    favorites: [],
    setFavorites: () => {},
  },
};

const GlobalContext = createContext<GlobalContextType>(initialContext);

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used in a GlobalProvider");
  }
  return context;
};

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    // <FavoritesProvider>
      <LoadingProvider>
        <GlobalContextWrapper>{children}</GlobalContextWrapper>
      </LoadingProvider>
    // </FavoritesProvider>
  );
};

export const GlobalContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const loading = useLoading();
  // const favorites = useFavorites();

  const value: GlobalContextType = {
    loading,
    // favorites,
  };
  console.log("value: ", value);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
