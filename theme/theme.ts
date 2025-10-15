import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
    Theme
} from '@react-navigation/native';


const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
    light: {
        background: '#F6F6F6',
        text: '#07193A',
        white: '#FFFFFF',
        red: '#FF2121',
        field: '#EAEAEA',
        grey: "#84909A",
    },
    dark: {
        background: '#F6F6F6',
        text: '#07193A',
        white: '#FFFFFF',
        red: '#FF2121',
        field: '#EAEAEA',
        grey: "#84909A",
    },
};


// ✅ Extend the theme type to add `welcomeBackground`
export type ExtendedTheme = Theme & {
    colors: Theme['colors'] & {
        background: string;
        text: string;
        red: string;
        white: string;
        field: string;
        grey: string;

    };
};


export const LightTheme: ExtendedTheme = {
    ...NavigationDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        background: Colors.light.background,
        text: Colors.light.text,
        red: Colors.light.red,
        white: Colors.light.white,
        field: Colors.light.field,
        grey: Colors.light.grey,


    },
};

export const DarkTheme: ExtendedTheme = {
    ...NavigationDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        background: Colors.light.background,
        text: Colors.dark.text,
        red: Colors.dark.red,
        white: Colors.dark.white,
        field: Colors.dark.field,
        grey: Colors.dark.grey,

    },
};
