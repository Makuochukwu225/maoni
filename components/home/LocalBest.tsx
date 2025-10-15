import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/core';
import {ExtendedTheme} from '@/theme/theme';
import {ThemedText} from '@/components/themed-text';
import ActionButton from '@/components/ActionButton';
import {ArrowForwardIcon, FilterIcon} from '@/assets/svgs/ride';
import LocalBestItem from '@/components/home/LocalBestItem';
import {useAppSelector} from '@/store/hooks';
import {selectIsLoading, selectLocalBestItems} from '../../store/localBestSlice';

export default function LocalBest() {
    const {colors} = useTheme() as ExtendedTheme;
    const items = useAppSelector(selectLocalBestItems);
    const isLoading = useAppSelector(selectIsLoading);

    return (
        <View style={[styles.container, {backgroundColor: colors.white}]}>
            <View style={styles.header}>
                <ThemedText
                    type={'title'}
                    style={styles.title}
                    darkColor={colors.text}
                    lightColor={colors.text}>
                    Local Best
                </ThemedText>
                <View style={styles.actions}>
                    <ActionButton title={'Filtering'} Icon={<FilterIcon color={'#6255FA'}/>}/>
                    <View style={[styles.dot, {backgroundColor: colors.grey}]}/>
                    <ActionButton title={'View All'} Icon={<ArrowForwardIcon color={'#6255FA'}/>}/>
                </View>
            </View>

            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ThemedText>Loading...</ThemedText>
                </View>
            ) : (
                <FlatList
                    data={items}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <LocalBestItem item={item}/>}
                    contentContainerStyle={styles.listContent}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 8,
        paddingVertical: 20,
        marginTop: 4,
        borderRadius: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Inter-Bold'
    },
    actions: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    dot: {
        width: 2,
        height: 2,
        borderRadius: 8,
    },
    listContent: {
        paddingHorizontal: 16,
    },
    separator: {
        width: 12,
    },
    loadingContainer: {
        padding: 20,
        alignItems: 'center',
    },
});
