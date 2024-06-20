export type TPostInitialState = {
  postDetail: TPost | null;
  filters: Record<string, string>;
}

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
}