import { create } from "zustand";

interface IUseApp {
  isLoginFormActive: boolean;
  setIsLoginFormActive: (val: boolean) => void;
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
}

const useApp = create<IUseApp>((set) => ({
  isLoginFormActive: true,
  setIsLoginFormActive: (val: boolean) => set({ isLoginFormActive: val }),
  isLoading: false,
  setIsLoading: (val: boolean) => set({ isLoading: val }),
}));

export default useApp;
