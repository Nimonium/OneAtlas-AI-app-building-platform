import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GenerateResponse, GenerateError } from '@/types/app';

export type AppState = 'IDLE' | 'LOADING' | 'RESULT';

interface GenerationStore {
  state: AppState;
  prompt: string;
  result: GenerateResponse | null;
  error: GenerateError | null;
  projects: GenerateResponse[];
  setPrompt: (prompt: string) => void;
  setState: (state: AppState) => void;
  setResult: (result: GenerateResponse) => void;
  setError: (error: GenerateError) => void;
  reset: () => void;
}

export const useGenerationStore = create<GenerationStore>()(
  persist(
    (set) => ({
      state: 'IDLE',
      prompt: '',
      result: null,
      error: null,
      projects: [],
      setPrompt: (prompt) => set({ prompt }),
      setState: (state) => set({ state }),
      setResult: (result) => set((state) => ({ 
        result, 
        state: 'RESULT', 
        error: null,
        projects: [result, ...state.projects]
      })),
      setError: (error) => set({ error, state: 'RESULT', result: null }),
      reset: () => set({ state: 'IDLE', prompt: '', result: null, error: null }),
    }),
    {
      name: 'oneatlas-storage',
      partialize: (state) => ({ projects: state.projects }),
    }
  )
);
