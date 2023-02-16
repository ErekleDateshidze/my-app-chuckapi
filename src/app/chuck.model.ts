export interface Joke {
  categories: string[];
  created_at: string;
  id: string;
  value: string;
}

export interface QueryResult {
  result: Joke[];
  total: number;
}