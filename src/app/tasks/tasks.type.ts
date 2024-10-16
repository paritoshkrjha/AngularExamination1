// STATUS TYPES = ['TODO', 'IN_PROGRESS', 'DONE']

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

export interface NewTask {
  title: string;
  description: string;
  status: string;
}
