import React from 'react';
import type { Lesson } from '../types';

interface InstructionsPanelProps {
  lesson: Lesson;
  isExplanation?: boolean;
  onClose?: () => void;
}

const renderWithCodeHighlighting = (text: string) => {
  if (!text) return '';
  const parts = text.split(/(```[\s\S]*?```|`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith('```') && part.endsWith('```')) {
      const code = part.slice(3, -3).trim();
      return (
        <pre key={index} className="bg-gray-900 text-pink-400 font-mono rounded p-3 my-2 text-sm whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="bg-gray-700 text-pink-400 font-mono rounded px-1 py-0.5 text-sm">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
};


const InstructionsPanel: React.FC<InstructionsPanelProps> = ({ lesson, isExplanation, onClose }) => {
  const content = isExplanation ? lesson.explanation : lesson.instruction;
  
  return (
    <div className="bg-gray-800 p-6 h-full shadow-lg flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold text-pink-400">{lesson.title}</h2>
        {!isExplanation && onClose && (
           <button 
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition-colors text-sm"
           >
            Hide Instructions
          </button>
        )}
      </div>
      <div className="text-gray-300 whitespace-pre-wrap leading-relaxed overflow-y-auto">
        {renderWithCodeHighlighting(content)}
      </div>
    </div>
  );
};

export default InstructionsPanel;