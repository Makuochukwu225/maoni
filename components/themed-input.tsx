import {StyleSheet, TextInput, View} from 'react-native'
import React from 'react'
import {DiscoverIcon} from "@/assets/svgs/ride";
import {useTheme} from "@react-navigation/core";
import {ExtendedTheme} from "@/theme/theme";

export default function ThemedInput() {
    const {colors} = useTheme() as ExtendedTheme;
    return (
        <View style={[styles.container, {backgroundColor: colors.field}]}>
            <DiscoverIcon color={colors.grey}/>
            <TextInput placeholder={'Search for anything'}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 12,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
});
