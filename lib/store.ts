import { create } from 'zustand';
import { GenerateResponse, GenerateError } from '@/types/app';

export type AppState = 'IDLE' | 'LOADING' | 'RESULT';

interface GenerationStore {
  state: AppState;
  prompt: string;
  result: GenerateResponse | null;
  error: GenerateError | null;
  setPrompt: (prompt: string) => void;
  setState: (state: AppState) => void;
  setResult: (result: GenerateResponse) => void;
  setError: (error: GenerateError) => void;
  reset: () => void;
}

export const useGenerationStore = create<GenerationStore>((set) => ({
  state: 'IDLE',
  prompt: '',
  result: null,
  error: null,
  setPrompt: (prompt) => set({ prompt }),
  setState: (state) => set({ state }),
  setResult: (result) => set({ result, state: 'RESULT', error: null }),
  setError: (error) => set({ error, state: 'RESULT', result: null }),
  reset: () => set({ state: 'IDLE', prompt: '', result: null, error: null }),
}));
