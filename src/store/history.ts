import { create } from "zustand";
import { persist } from "zustand/middleware";

type HistoryState = {
  history: Showcase[];
};

type HistoryActions = {
  add: (showcase: Showcase) => void;
  update: (id: string, showcase: Partial<Showcase>) => void;
  remove: (id: string) => void;
};

export const useHistoryStore = create<HistoryState & HistoryActions>()(
  persist(
    (set) => ({
      history: [],
      add: (showcase) => {
        set((state) => ({ history: [showcase, ...state.history] }));
      },
      update: (id, showcase) => {
        set((state) => {
          const newHistory = state.history.map((item) =>
            item.id === id ? { ...item, ...showcase } : item
          );
          return { history: [...newHistory] };
        });
      },
      remove: (id) => {
        set((state) => ({
          history: state.history.filter((item) => item.id !== id),
        }));
      },
    }),
    {
      name: "MJShowcaseHistory",
    }
  )
);
