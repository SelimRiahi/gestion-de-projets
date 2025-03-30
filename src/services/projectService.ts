// src/services/projectService.ts
import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Project } from '../types';

export const createProject = async (project: Omit<Project, 'id'>) => {
  const docRef = await addDoc(collection(db, 'projects'), project);
  return { id: docRef.id, ...project };
};

export const getProjects = async (): Promise<Project[]> => {
  const snapshot = await getDocs(collection(db, 'projects'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
};