export interface Issue {
  issue: {
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
  };
} // 타입 수정 요망
