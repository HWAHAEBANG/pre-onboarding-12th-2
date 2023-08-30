export interface Issue {
  issue: {
    number: number;
    title: string;
    comments: number;
    created_at: string;
    user: {
      login: string;
    };
    id: number;
  };
} // 타입 수정 요망
