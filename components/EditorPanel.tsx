
import React from 'react';

interface EditorPanelProps {
  code: string;
  setCode: (code: string) => void;
  onRunCode: () => void;
  onResetCode: () => void;
}

const EditorPanel: React.FC<EditorPanelProps> = ({ code, setCode, onRunCode, onResetCode }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col flex-grow shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg text-gray-300">Python Editor</h3>
        <div className="flex gap-2">
          <button 
            onClick={onResetCode}
            className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded transition-colors text-sm"
          >
            Reset
          </button>
          <button 
            onClick={onRunCode}
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors text-sm"
          >
            Run Code
          </button>
        </div>
      </div>
      <div className="bg-gray-900 rounded-md flex-grow">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full bg-transparent text-white p-4 font-mono resize-none rounded-md outline-none focus:ring-2 focus:ring-pink-500"
          spellCheck="false"
          style={{minHeight: '200px'}}
        />
      </div>
    </div>
  );
};

export default EditorPanel;
