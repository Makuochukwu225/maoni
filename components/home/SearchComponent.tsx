import {StyleSheet, View} from 'react-native'
import React from 'react'
import ThemedInput from "@/components/themed-input";
import WriteReviewButton from "@/components/WriteReviewButton";
import {useTheme} from "@react-navigation/core";
import {ExtendedTheme} from "@/theme/theme";

export default function SearchComponent() {
    const {colors} = useTheme() as ExtendedTheme;
    return (
        <View style={[styles.container, {backgroundColor: colors.white}]}>

            <ThemedInput/>
            <WriteReviewButton/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderRadius: 12,
    },
});
