export type TProfileMenuItem = {
    id: number;
    name: string;
    icn: string;
};

export type TNavigationProp = {
    navigate: (screen: string) => void;
};

export type TUserType = {
    imageUrl: string;
    fullName: string;
    primaryEmailAddress: {
        emailAddress: string;
    };
};

export const ICON_NAMES = {
    LOG_OUT: 'log-out',
} as const;

export type IconName = typeof ICON_NAMES[keyof typeof ICON_NAMES];
