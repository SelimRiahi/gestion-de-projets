export interface Project {
    id: string;
    name: string;
    color: string;
    createdAt: Date;
  }
  
  export interface Task {
    id: string;
    projectId: string;
    title: string;
    completed: boolean;
    dueDate?: string;
  }