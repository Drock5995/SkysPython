import React, { useState, useEffect } from 'react';
import { LESSONS } from './constants';
import type { Lesson } from './types';
import Header from './components/Header';
import InstructionsPanel from './components/InstructionsPanel';
import EditorPanel from './components/EditorPanel';
import ConsolePanel from './components/ConsolePanel';

const App: React.FC = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [code, setCode] = useState<string>('');
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [lessonStep, setLessonStep] = useState<'explanation' | 'challenge'>('explanation');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const currentLesson: Lesson = LESSONS[currentLessonIndex];

  useEffect(() => {
    setCode(currentLesson.starterCode);
    setConsoleOutput([`// Welcome to Lesson ${currentLessonIndex + 1}: ${currentLesson.title}`]);
    setIsCompleted(false);
    setLessonStep('explanation');
    setIsSidebarOpen(true);
  }, [currentLessonIndex, currentLesson]);

  const handleRunCode = () => {
    const normalize = (str: string) => {
      return str
        .replace(/\r\n/g, '\n') // Standardize line endings
        .split('\n')
        .map(line => line.replace(/\s+$/, '')) // Remove trailing whitespace from each line
        .filter(line => !line.trim().startsWith('#')) // IGNORE comment-only lines
        .join('\n')
        .trim(); // Remove leading/trailing empty lines
    };

    const normalizedCode = normalize(code);
    const { solution, solutionType, successMessage, expectedOutput, hint, dynamicOutput } = currentLesson;
    const normalizedSolution = solutionType === 'regex' ? solution : normalize(solution);

    let isCorrect = false;

    if (solutionType === 'regex') {
        const regex = new RegExp(normalizedSolution, 's');
        isCorrect = regex.test(normalizedCode);
    } else {
        isCorrect = normalizedCode === normalizedSolution;
    }

    if (isCorrect) {
        let output = expectedOutput;
        if (dynamicOutput) {
            const match = code.replace(/\r\n/g, '\n').match(/favorite_thing\s*=\s*"(.+)"/);
            if (match && match[1]) {
                output = `> ${match[1]}`;
            }
        }
        setConsoleOutput([
            output,
            `// ${successMessage}`
        ]);
        setIsCompleted(true);
    } else {
        setConsoleOutput([
            `// Hmm, that's not quite right. Give it another shot.`,
            `// Hint: ${hint}`
        ]);
        setIsCompleted(false);
    }
  };


  const handleNextLesson = () => {
    if (currentLessonIndex < LESSONS.length - 1) {
      setCurrentLessonIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prevIndex => prevIndex - 1);
    }
  };
  
  const handleResetCode = () => {
    setCode(currentLesson.starterCode);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {lessonStep === 'explanation' ? (
          <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 p-4 md:p-0">
            <InstructionsPanel lesson={currentLesson} isExplanation />
            <button
              onClick={() => {
                setLessonStep('challenge');
                setIsSidebarOpen(true);
              }}
              className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-lg self-center transition-transform transform hover:scale-105 shadow-lg"
            >
              Okay, I get it. Let me try!
            </button>
          </div>
        ) : (
          <div className="w-full h-full flex">
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="fixed top-20 left-4 z-30 bg-pink-600 hover:bg-pink-500 text-white font-bold h-12 w-12 rounded-full shadow-lg flex items-center justify-center text-2xl transition-opacity"
                aria-label="Show Instructions"
              >
                ?
              </button>
            )}
            <div className={`
              bg-gray-800
              absolute top-0 left-0 h-full z-20
              w-full md:w-1/3
              transform transition-transform duration-300 ease-in-out
              shadow-2xl
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
              <InstructionsPanel
                lesson={currentLesson}
                onClose={() => setIsSidebarOpen(false)}
              />
            </div>
            <div className="w-full h-full flex flex-col gap-4 p-2 sm:p-4">
              <EditorPanel 
                code={code} 
                setCode={setCode} 
                onRunCode={handleRunCode} 
                onResetCode={handleResetCode}
              />
              <ConsolePanel output={consoleOutput} />
            </div>
          </div>
        )}
      </main>
      <footer className="bg-gray-800 p-4 flex justify-between items-center z-10">
        <button 
          onClick={handlePrevLesson} 
          disabled={currentLessonIndex === 0}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <div className="text-gray-400">
          Lesson {currentLessonIndex + 1} of {LESSONS.length}
        </div>
        <button 
          onClick={handleNextLesson} 
          disabled={!isCompleted || currentLessonIndex === LESSONS.length - 1}
          className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded disabled:bg-pink-800 disabled:cursor-not-allowed transition-colors"
        >
          Next Lesson
        </button>
      </footer>
    </div>
  );
};

export default App;