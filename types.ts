
export enum Language {
  ARABIC = 'ar',
  ENGLISH = 'en'
}

export interface UserProfile {
  name: string;
  dob: string;
  language: Language;
  isDeveloper: boolean;
  activationCode?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  type: 'text' | 'image';
  timestamp: number;
}

export interface AppState {
  user: UserProfile | null;
  step: 'onboarding' | 'chat';
}
