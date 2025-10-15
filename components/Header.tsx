import {StyleSheet, View} from 'react-native'
import React from 'react'
import {MainLogo, NotificationIcon} from "@/assets/svgs/ride";
import {ThemedText} from "@/components/themed-text";
import {useTheme} from "@react-navigation/core";
import {ExtendedTheme} from "@/theme/theme";

export default function Header() {
    const {colors} = useTheme() as ExtendedTheme;
    return (
        <View style={{
            flexDirection: 'row',
            paddingHorizontal: 16,
            marginVertical: 16,
            justifyContent: 'space-between',
            backgroundColor: colors.background,
            marginTop: 50,
        }}>
            <MainLogo/>
            <View style={[styles.notificationContainer, {backgroundColor: colors.white}]}>
                <View style={[styles.notificationBadge, {backgroundColor: colors.red,}]}>
                    <ThemedText type={'defaultSemiBold'}
                                style={[styles.notificationText, {

                                    height: 20,
                                    color: colors.white
                                }]}>
                        3
                    </ThemedText>
                </View>

                <NotificationIcon/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    notificationContainer: {

        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        backgroundColor: '#F5F5F5',
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#FF0000',
        borderRadius: 12,
        height: 16,
        width: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    notificationText: {
        fontSize: 10,
    }
});
