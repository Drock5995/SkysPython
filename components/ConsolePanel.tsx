
import React from 'react';

interface ConsolePanelProps {
  output: string[];
}

const ConsolePanel: React.FC<ConsolePanelProps> = ({ output }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col shadow-lg" style={{ minHeight: '120px' }}>
      <h3 className="font-bold text-lg text-gray-300 mb-2">Console</h3>
      <div className="bg-black rounded-md p-4 font-mono text-green-400 text-sm flex-grow whitespace-pre-wrap">
        {output.join('\n')}
      </div>
    </div>
  );
};

export default ConsolePanel;
