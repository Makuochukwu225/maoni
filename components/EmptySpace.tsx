import {StyleSheet, View} from 'react-native'
import React from 'react'
import {useTheme} from "@react-navigation/core";
import {ExtendedTheme} from "@/theme/theme";

export default function EmptySpace() {
    const {colors} = useTheme() as ExtendedTheme;
    return (
        <View style={[styles.container, {backgroundColor: colors.white}]}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 94,
        width: '100%',
    },
});
