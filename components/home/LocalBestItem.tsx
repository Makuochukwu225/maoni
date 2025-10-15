import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {LocalBestProp} from '@/types/local-best';
import {ImageBackground} from 'expo-image';
import {useTheme} from '@react-navigation/core';
import {ExtendedTheme} from '@/theme/theme';
import {HeartFilledIcon, HeartUnFilledIcon, StarFilledIcon} from '@/assets/svgs/ride';
import {ThemedText} from '@/components/themed-text';
import FastFood from './../../assets/images/fast-food.svg';
import Hotel from './../../assets/images/hotels.svg';
import Chick from './../../assets/images/chick.svg';
import Radisson from './../../assets/images/radisson.svg';
import InNOut from './../../assets/images/innout.svg';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {selectIsLiked, toggleLike} from '../../store/localBestSlice';

const iconMap = {
    chick: Chick,
    radisson: Radisson,
    innout: InNOut,
};

export default function LocalBestItem({item}: { item: LocalBestProp }) {
    const IconComponent = iconMap[item.iconType];
    const {colors} = useTheme() as ExtendedTheme;
    const dispatch = useAppDispatch();
    const isLiked = useAppSelector(selectIsLiked(item.id));

    const handleLikePress = () => {
        dispatch(toggleLike(item.id));
    };

    return (
        <View style={styles.wrapper}>
            <ImageBackground
                source={item.image}
                style={styles.imageBackground}
                imageStyle={styles.image}>
                <View style={styles.overlay}/>

                <TouchableOpacity
                    style={styles.heartButton}
                    onPress={handleLikePress}
                    activeOpacity={0.7}>
                    {
                        isLiked ? (
                            <HeartFilledIcon/>
                        ) : (
                            <HeartUnFilledIcon/>
                        )
                    }
                </TouchableOpacity>

                <View style={styles.content}>
                    <IconComponent width={40} height={40}/>
                    <View style={styles.typeContainer}>
                        {item.type === 'Hotels' ? (
                            <Hotel width={12} height={12}/>
                        ) : (
                            <FastFood width={12} height={12}/>
                        )}
                        <ThemedText type={'defaultSemiBold'} style={styles.typeText}>
                            {item.type}
                        </ThemedText>
                    </View>
                    <ThemedText type={'defaultSemiBold'} style={styles.title}>
                        {item.title}
                    </ThemedText>
                </View>

                <TouchableOpacity style={[styles.button, {backgroundColor: colors.white}]}>
                    <StarFilledIcon/>
                    <ThemedText type={'title'}
                                style={{
                                    color: colors.text,
                                    fontWeight: '500',
                                    fontSize: 12,
                                }}>{item.rating}</ThemedText>
                    <View
                        style={[styles.reviewDot, {backgroundColor: colors.grey}]}
                    />
                    <ThemedText
                        style={{color: colors.grey, fontWeight: '400', fontSize: 12,}}>{item.reviews}</ThemedText>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: 140,
    },
    imageBackground: {
        width: 140,
        minHeight: 200,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    image: {
        borderRadius: 12,
    },
    overlay: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#00000066',
        borderRadius: 12,
    },
    heartButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
        padding: 4,
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        marginTop: 32,
    },
    typeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 4,
    },
    typeText: {
        fontSize: 12,
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: 8,
    },
    button: {
        height: 40,
        width: '94%',
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 16,
    },
    reviewDot: {
        width: 3,
        height: 3,
        borderRadius: 8,
    },
});
