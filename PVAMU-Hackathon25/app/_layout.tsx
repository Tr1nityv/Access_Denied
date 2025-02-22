import {useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';


SplashScreen.preventAutoHideAsync();

export default function RootLayout () {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fontSpaceMono-Regular.ttf'),


    }); 

    useEffect( () => { 
        if(loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded] );
    
    if (!loaded) {
        return null;
    }

    return (
        <Stack> 
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
        </Stack>
    )
}