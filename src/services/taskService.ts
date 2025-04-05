import { db } from '../firebase';
import { collection, addDoc, getDocs, where, query } from 'firebase/firestore';
import { Task } from '../types';

export const createTask = async (task: Omit<Task, 'id'>) => {
  const docRef = await addDoc(collection(db, 'tasks'), task);
  return { id: docRef.id, ...task };
};

export const getTasksByProject = async (projectId: string): Promise<Task[]> => {
  const q = query(collection(db, 'tasks'), where('projectId', '==', projectId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
};