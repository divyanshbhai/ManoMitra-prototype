export type Resource = {
  id: number;
  title: string;
  type: 'Article' | 'Video' | 'Meditation';
  language: 'English' | 'Hindi' | 'Tamil' | 'Bengali';
  description: string;
  imageUrl: string;
  imageHint: string;
  link: string;
};

export type Counselor = {
  id: number;
  name: string;
  specialties: string[];
  languages: string[];
  imageUrl: string;
  imageHint: string;
};

export type ForumPost = {
  id: number;
  title:string;
  excerpt: string;
  author: string;
  likes: number;
  comments: number;
  tags: string[];
  avatarUrl: string;
  avatarHint: string;
};

export type Student = {
    id: string;
    name: string;
    email: string;
    branch: string;
    status: 'Active' | 'Inactive';
    engagement: 'High' | 'Medium' | 'Low';
};

export type Assessment = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    duration: number;
    imageUrl: string;
    imageHint: string;
}

export type Mood = {
    id: string;
    date: string;
    mood: string;
    tags: string[];
    notes: string;
    color: string;
};

export type JournalEntry = Mood;
