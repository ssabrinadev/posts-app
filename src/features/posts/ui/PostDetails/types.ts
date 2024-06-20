import { RouteProp } from '@react-navigation/native';

export type TRootStackParamList = {
    Home: undefined;
    PostDetails: { post: { userId: number; id: number; title: string; body: string } };
};

export type TPostDetailsProps = {
    route: PostDetailsScreenRouteProp;
};

export type PostDetailsScreenRouteProp = RouteProp<TRootStackParamList, 'PostDetails'>;
