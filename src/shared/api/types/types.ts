export type TPostListProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type TAuthResponse = {
  createdSessionId: string;
  signIn: boolean;
  signUp: boolean;
  setActive: (options: { session: string }) => void;
};
