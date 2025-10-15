import {ThemeProvider} from '@react-navigation/native';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/use-color-scheme';
import {DarkTheme, LightTheme} from "@/theme/theme";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {useFonts} from "expo-font";

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootLayout() {
    const colorScheme = useColorScheme();

    const [fontsLoaded] = useFonts({
        'Inter-Regular': require('./../assets/fonts/Inter_18pt-Regular.ttf'),
        'Inter-Bold': require('./../assets/fonts/Inter_18pt-Bold.ttf'),
        'Inter-SemiBold': require('./../assets/fonts/Inter_18pt-SemiBold.ttf'),
        'Inter-Medium': require('./../assets/fonts/Inter_18pt-Medium.ttf'),
        'Inter-Light': require('./../assets/fonts/Inter_18pt-Light.ttf'),
        'Inter-Italic': require('./../assets/fonts/Inter_18pt-Italic.ttf'),
    });


    if (!fontsLoaded) return null;

    return (
        <ThemeProvider value={colorScheme === 'light' ? LightTheme : DarkTheme}>
            <Provider store={store}>

                <Stack>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                    <Stack.Screen name="modal" options={{presentation: 'modal', title: 'Modal'}}/>
                </Stack>
                <StatusBar style="auto"/>
            </Provider>
        </ThemeProvider>
    );
}
