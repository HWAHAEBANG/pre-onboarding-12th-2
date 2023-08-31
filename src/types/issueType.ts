export interface Issue {
  number: number;
  title: string;
  comments: number;
  created_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  id: number;
  body: string;
}
