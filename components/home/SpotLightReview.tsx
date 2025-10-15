import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ThemedText} from '@/components/themed-text';
import ActionButton from '@/components/ActionButton';
import {ArrowForwardIcon, SortingIcon} from '@/assets/svgs/ride';
import {useTheme} from '@react-navigation/core';
import {ExtendedTheme} from '@/theme/theme';
import SpotLightReviewItem from '@/components/home/SpotLightReviewItem';
import {useAppSelector} from '@/store/hooks';
import {selectIsLoading, selectSpotlightItems} from '../../store/spotlightReviewSlice';

export default function SpotLightReview() {
    const {colors} = useTheme() as ExtendedTheme;
    const items = useAppSelector(selectSpotlightItems);
    const isLoading = useAppSelector(selectIsLoading);

    return (
        <View style={[styles.container, {backgroundColor: colors.white}]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <ThemedText
                    type={'title'}
                    style={{fontSize: 14}}
                    darkColor={colors.text}
                    lightColor={colors.text}>
                    Spotlight Review
                </ThemedText>
                <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                    <ActionButton title={'Sorting'} Icon={<SortingIcon color={'#6255FA'}/>}/>
                    <View style={{width: 2, height: 2, backgroundColor: colors.grey, borderRadius: 8}}/>
                    <ActionButton title={'View All'} Icon={<ArrowForwardIcon color={'#6255FA'}/>}/>
                </View>
            </View>

            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ThemedText>Loading...</ThemedText>
                </View>
            ) : (
                <View style={{flexDirection: 'column', gap: 12, width: '100%'}}>
                    {items.map((value) => (
                        <SpotLightReviewItem key={value.id} item={value}/>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 20,
        marginTop: 4,
        borderRadius: 12,
    },
    loadingContainer: {
        padding: 20,
        alignItems: 'center',
    },
});
