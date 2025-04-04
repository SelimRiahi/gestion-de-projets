export interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  createdAt: Date;
  dueDate?: Date;
  status: 'not-started' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
}