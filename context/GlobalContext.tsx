"use client";

import { createContext, useContext } from "react";
import {
  LoadingContextType,
  LoadingProvider,
  useLoading,
} from "./LoadingContext";
interface GlobalContextType {
  loading: LoadingContextType;
}

const initialContext: GlobalContextType = {
  loading: {
    isInitialLoad: true,
    isLoading: false,
    setIsInitialLoad: () => {},
    setIsLoading: () => {},
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
      <LoadingProvider>
        <GlobalContextWrapper>{children}</GlobalContextWrapper>
      </LoadingProvider>
  );
};

export const GlobalContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const loading = useLoading();

  const value: GlobalContextType = {
    loading,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
