export type TUserType = {
    imageUrl: string;
    fullName: string;
};

export type TUseUserReturn = {
    user: TUserType | null;
    isLoading: boolean;
};
