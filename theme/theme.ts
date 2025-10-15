import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
    Theme
} from '@react-navigation/native';


const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
    light: {
        text: 'black',
        text1: '#E5E7EB',
        text2: '#888888',
        text3: 'white',
        text4: '#00363C',
        text300: '#6D7280',
        textGrey: '#D2D5DA',
        textGreen: '#00262B',
        textGreyDark: '4B5563',
        background: '#fff',
        welcomeBackground: '#white',
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorLight,
        neonMain: "#0BBD0A",
        secondary: "#00363C",
        fieldColor: "#ffffff",
        bottomCard: "#F3F4F6",
        dashCardTop: "#00262B",
        dashCardBottom: "#EAFDEA",
        verifyCard: "#00262B",
        greyDark: "#F9FAFB",
        circleBorder: "#F3F4F6",
        cardPrimary: "#F9FAFB",
        cardSecondary: "#fff",
        greyLight: "#9AA4B2",
        borderColor: '#E5E7EB',
        divider: '#EBEBEB',
        neonFade: '#C9F2BF',
        greyModern: '#697586',
        neonCard: '#E4F4F1',

    },
    dark: {
        text: '#DCDCE1',
        text1: '#1F2228',
        text2: '#9CA3AF',
        text3: 'black',
        text4: '#C3F9FF',
        text300: '#6D7280',
        textGrey: '#D2D5DA',
        textGreen: 'white',
        textGrayDark: '4B5563',
        background: '#242424',
        welcomeBackground: '#242424',
        tint: tintColorDark,
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
        neonMain: "#0BBD0A",
        secondary: "#051F22",
        fieldColor: "#2D2D2D",
        bottomCard: "#2D2D2D",
        dashCardTop: "#FFFFFF",
        dashCardBottom: "#2D2D2D",
        verifyCard: "#2D2D2D",
        greyDark: "#2D2D2D",
        circleBorder: "#363636",
        cardPrimary: "#242424",
        cardSecondary: "#2D2D2D",
        greyLight: "#9AA4B2",
        // borderColor: '#374151',
        borderColor: '#DCDCE1',
        divider: "#212121",
        neonFade: '#C9F2BF',
        greyModern: '#697586',
        neonCard: '#122D28',

    },
};


// ✅ Extend the theme type to add `welcomeBackground`
export type ExtendedTheme = Theme & {
    colors: Theme['colors'] & {
        welcomeBackground: string;
        neonMain: string
        secondary: string
        textGrey: string
        fieldColor: string
        bottomCard: string
        textGrayDark: string
        textGreen: string
        dashCardTop: string
        dashCardBottom: string
        text1: string
        text2: string
        text3: string
        text300: string
        verifyCard: string
        greyDark: string
        circleBorder: string
        cardPrimary: string
        cardSecondary: string
        greyLight: string
        icon: string
        borderColor: string
        divider: string
        neonFade: string
        greyModern: string,
        neonCard: string,
        text4: string,
    };
};


export const LightTheme: ExtendedTheme = {
    ...NavigationDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        background: Colors.light.background,
        welcomeBackground: Colors.light.welcomeBackground,
        text: Colors.light.text,
        primary: Colors.light.tint,
        neonMain: Colors.light.neonMain,
        secondary: Colors.light.secondary,
        textGrey: Colors.light.textGrey,
        fieldColor: Colors.light.fieldColor,
        bottomCard: Colors.light.bottomCard,
        textGrayDark: Colors.light.textGreyDark,
        textGreen: Colors.light.textGreen,
        dashCardTop: Colors.light.dashCardTop,
        dashCardBottom: Colors.light.dashCardBottom,
        text1: Colors.light.text1,
        text2: Colors.light.text2,
        text3: Colors.light.text3,
        text300: Colors.light.text300,
        verifyCard: Colors.light.verifyCard,
        greyDark: Colors.light.greyDark,
        circleBorder: Colors.light.circleBorder,
        cardPrimary: Colors.light.cardPrimary,
        cardSecondary: Colors.light.cardSecondary,
        greyLight: Colors.light.greyLight,
        icon: Colors.light.icon,
        borderColor: Colors.light.borderColor,
        divider: Colors.light.divider,
        neonFade: Colors.light.divider,
        greyModern: Colors.light.greyModern,
        neonCard: Colors.light.neonCard,
        text4: Colors.light.text4,


    },
};

export const DarkTheme: ExtendedTheme = {
    ...NavigationDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        background: Colors.dark.background,
        welcomeBackground: Colors.dark.welcomeBackground,
        text: Colors.dark.text,
        primary: Colors.dark.tint,
        neonMain: Colors.dark.neonMain,
        secondary: Colors.dark.secondary,
        textGrey: Colors.dark.textGrey,
        fieldColor: Colors.dark.fieldColor,
        bottomCard: Colors.dark.bottomCard,
        textGrayDark: Colors.dark.textGrayDark,
        textGreen: Colors.dark.textGreen,
        dashCardTop: Colors.dark.dashCardTop,
        dashCardBottom: Colors.dark.dashCardBottom,
        text1: Colors.dark.text1,
        text2: Colors.dark.text2,
        text3: Colors.dark.text3,
        text300: Colors.dark.text300,
        verifyCard: Colors.dark.verifyCard,
        greyDark: Colors.dark.greyDark,
        circleBorder: Colors.dark.circleBorder,
        cardPrimary: Colors.dark.cardPrimary,
        cardSecondary: Colors.dark.cardSecondary,
        greyLight: Colors.dark.greyLight,
        icon: Colors.dark.icon,
        borderColor: Colors.dark.borderColor,
        divider: Colors.dark.divider,
        neonFade: Colors.dark.neonFade,
        greyModern: Colors.dark.greyModern,
        neonCard: Colors.dark.neonCard,
        text4: Colors.dark.text4

    },
};
