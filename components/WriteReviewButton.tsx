import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {LeaveReviewLogo} from '@/assets/svgs/ride';
import {LinearGradient} from 'expo-linear-gradient';
import {ThemedText} from '@/components/themed-text';

export default function WriteReviewButton() {
    return (
        <TouchableOpacity style={styles.container}>
            <LinearGradient
                colors={['#3929FA', '#766AFF']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.gradientBox}
            >
                <ThemedText style={{fontSize: 16}} type={'title'}>
                    Write a review
                </ThemedText>
                <LeaveReviewLogo/>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#4437DE',
        width: '100%',
        borderRadius: 12,
    },
    gradientBox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 20,

        // SHADOW (for iOS)
        shadowColor: '#110A5D',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.32,
        shadowRadius: 14,

        // SHADOW (for Android)
        elevation: 10,
    },
});
