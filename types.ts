export interface Lesson {
  title: string;
  explanation: string;
  instruction: string;
  starterCode: string;
  solution: string;
  solutionType?: 'exact' | 'regex';
  dynamicOutput?: boolean;
  expectedOutput: string;
  successMessage: string;
  hint: string;
}
