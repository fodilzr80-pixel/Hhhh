
import React from 'react';
import { Language } from '../types';
import { LANGUAGES_LIST } from '../constants';

interface Props {
  onSelect: (lang: Language) => void;
}

const LanguageSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="w-full max-w-md p-8 animate-fadeIn">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Atlas AI
        </h1>
        <p className="text-gray-400">Select your preferred language</p>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {LANGUAGES_LIST.map((lang) => (
          <button
            key={lang.id}
            onClick={() => onSelect(lang.id)}
            className="flex items-center space-x-4 p-4 rounded-xl border border-gray-800 hover:border-blue-500 hover:bg-gray-900/50 transition-all duration-200 group"
          >
            <span className="text-2xl">{lang.icon}</span>
            <span className="flex-grow text-left font-medium">{lang.label}</span>
            <i className="fa-solid fa-chevron-right text-gray-600 group-hover:text-blue-500"></i>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
