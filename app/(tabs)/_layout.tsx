import {Tabs} from 'expo-router';
import React from 'react';

import {HapticTab} from '@/components/haptic-tab';
import {DiscoverIcon, FavouritesIcon, HomeIcon, MoreIcon, WriteIcon} from "@/assets/svgs/ride";
import {useTheme} from "@react-navigation/core";
import {ExtendedTheme} from "@/theme/theme";

export default function TabLayout() {
    const {colors} = useTheme() as ExtendedTheme;

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#07193A',
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarInactiveTintColor: "#84909A",
                tabBarStyle: {
                    backgroundColor: colors.white, // solid background color
                    borderTopWidth: 0,
                    elevation: 0, // remove Android shadow
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <HomeIcon width={25} height={24} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="discover"
                options={{
                    title: 'Discover',
                    tabBarIcon: ({color}) => <DiscoverIcon width={25} height={24} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="write"
                options={{
                    title: 'Write',
                    tabBarIcon: ({color}) => <WriteIcon width={25} height={24} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="favourite"
                options={{
                    title: 'Favourite',
                    tabBarIcon: ({color}) => <FavouritesIcon width={25} height={24} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: 'More',
                    tabBarIcon: ({color}) => <MoreIcon width={25} height={24} color={color}/>,
                }}
            />
        </Tabs>
    );
}
