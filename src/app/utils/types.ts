export type Task = {
  id: string;
  title: string;
  description: string;
  color: string;
  subtasksDone: number;
  subtasksTotal: number;
  status: string;
  contacts: string[];
  priority: 'Low' | 'Medium' | 'High';
  category: string;
};
