"use client";
import { createContext, useContext, useEffect, useState } from "react";

export interface LoadingContextType {
  isInitialLoad: boolean;
  isLoading: boolean;
  setIsInitialLoad: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isInitialLoad: true,
  isLoading: false,
  setIsInitialLoad: () => {},
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loading = setTimeout(() => {
      setIsLoading(true);
    }, 200)
    const loaded = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1800)
    
    return () => {
      clearTimeout(loading)
      clearTimeout(loaded)
    }
  }, [])

  return (
    <LoadingContext.Provider value={{isInitialLoad, setIsInitialLoad, isLoading, setIsLoading}}>
      {children}
    </LoadingContext.Provider>
  );
};