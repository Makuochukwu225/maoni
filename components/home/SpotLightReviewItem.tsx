import {Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CustomerReview, SpotLightProp} from '@/types/spot-light';
import {useTheme} from '@react-navigation/core';
import {ExtendedTheme} from '@/theme/theme';
import {
    ArrowDownIcon,
    ArrowForwardIcon,
    ArrowUpIcon,
    FlagIcon,
    ImageIcon,
    StarIcon,
    ThumbDownIcon,
    ThumbUpIcon,
    WriteIcon,
} from '@/assets/svgs/ride';
import {ThemedText} from '@/components/themed-text';
import FastFoodIcon from './../../assets/images/fast-food.svg';
import McDonalds from './../../assets/images/mac-donald.svg';
import TacoBell from './../../assets/images/taco-bell.svg';
import {ImageBackground} from 'expo-image';
import {BlurView} from 'expo-blur';
import {LinearGradient} from 'expo-linear-gradient';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {
    selectIsHelpful,
    selectIsNotHelpful,
    selectIsReported,
    toggleHelpful,
    toggleNotHelpful,
    toggleReport,
} from '../../store/spotlightReviewSlice';
import StarRating from "react-native-star-rating-widget";

const iconMap = {
    mcdonalds: McDonalds,
    tacobell: TacoBell,
};

function CallToAction({
                          icon,
                          title,
                          onPress,
                          isActive,
                      }: {
    icon: any;
    title: string;
    onPress: () => void;
    isActive?: boolean;
}) {
    const {colors} = useTheme() as ExtendedTheme;
    return (
        <TouchableOpacity style={[isActive ? styles.callToActionActive : styles.callToAction]} onPress={onPress}
                          activeOpacity={0.7}>
            {icon}
            <ThemedText
                style={[
                    styles.callToActionText,
                    {color: isActive ? colors.text : colors.grey},
                ]}>
                {title}
            </ThemedText>
        </TouchableOpacity>
    );
}

function ReviewSection({review, expanded, onToggle, type}: {
    review: CustomerReview,
    expanded: boolean,
    onToggle: () => void;
    type: string,
}) {
    const [rating, setRating] = useState(0);
    return (
        <View>
            <ThemedText style={styles.reviewTitle}>{review.title}</ThemedText>
            <ThemedText numberOfLines={expanded ? undefined : 2} style={styles.reviewText}>{review.review}</ThemedText>
            {type === "Taco" && <TouchableOpacity onPress={onToggle}>

                <ThemedText
                    style={{
                        fontSize: 14,
                        fontWeight: '700',
                        marginTop: 8
                    }}>{expanded ? 'Show Less' : 'Show More'}</ThemedText>
            </TouchableOpacity>}
            <View
                style={{
                    marginTop: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 6,
                    width: '100%',
                }}>

                <StarRating
                    rating={review.rating}
                    color={"#FFB629"}
                    starStyle={{gap: 1, marginHorizontal: 1}}
                    style={{gap: 1, marginHorizontal: -1}}
                    maxStars={5}
                    starSize={16}
                    onChange={setRating}
                />
                <ThemedText style={{fontSize: 14, fontWeight: 700}}>{review.rating}/5</ThemedText>
            </View>
            <View style={styles.reviewMeta}>
                <ThemedText style={{fontSize: 14, fontWeight: 600}}>{review.name}</ThemedText>
                <View style={{width: 3, height: 3, backgroundColor: 'white', alignSelf: 'center', borderRadius: 8}}/>
                <ThemedText style={{fontSize: 14, fontWeight: 400}}>{review.timestamp}</ThemedText>
            </View>
            <View style={styles.imageGrid}>
                {review.image.map((img: any, imgIndex: number) => (
                    <Image
                        key={imgIndex}
                        style={styles.reviewImage}
                        source={img as ImageSourcePropType}
                    />
                ))}
            </View>
        </View>
    );
}

function ReviewHeader(
    {
        expanded,
        onToggle,
    }: {
        expanded: boolean;
        onToggle: () => void;
    }
) {
    return (
        <TouchableOpacity onPress={onToggle} style={styles.reviewHeader}>
            <View style={styles.reviewHeaderLeft}>
                <WriteIcon height={12} width={12} color={'white'}/>
                <ThemedText style={{fontSize: 12, fontWeight: 500}}>Review</ThemedText>
            </View>
            <View style={styles.reviewHeaderRight}>
                <ThemedText style={{fontSize: 12, fontWeight: 500}}>{expanded ? 'Less' : 'More'}</ThemedText>
                {!expanded ? (
                    <ArrowDownIcon height={12} width={12}/>
                ) : (
                    <ArrowUpIcon height={12} width={12}/>
                )}
            </View>
        </TouchableOpacity>
    );
}

export default function SpotLightReviewItem({item}: { item: SpotLightProp }) {
    const {colors} = useTheme() as ExtendedTheme;
    const IconComponent = iconMap[item.iconType];
    const dispatch = useAppDispatch();
    const [expanded, setExpanded] = useState(false);


    const firstReviewId = item.customerReviews[0]?.id;
    const isHelpful = useAppSelector(selectIsHelpful(firstReviewId));
    const isNotHelpful = useAppSelector(selectIsNotHelpful(firstReviewId));
    const isReported = useAppSelector(selectIsReported(firstReviewId));


    const handleHelpful = () => {
        if (firstReviewId) {
            dispatch(toggleHelpful(firstReviewId));
        }
    };

    const handleNotHelpful = () => {
        if (firstReviewId) {
            dispatch(toggleNotHelpful(firstReviewId));
        }
    };

    const handleReport = () => {
        if (firstReviewId) {
            dispatch(toggleReport(firstReviewId));
        }
    };

    const renderReviews = ({expanded, onToggle, type}: { expanded: boolean, onToggle: () => void, type: string }) => (
        <View style={styles.reviewsContainer}>
            {item.customerReviews.map((review) => (
                <ReviewSection key={review.id} review={review} expanded={expanded} onToggle={onToggle} type={type}/>
            ))}
        </View>
    );

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            {/* Header Section */}
            <View style={[styles.header, {backgroundColor: colors.white}]}>
                <View>
                    <View style={styles.headerTitleRow}>
                        <ThemedText
                            style={{
                                color: colors.text,
                                fontWeight: '500',
                                fontSize: 14,
                                fontFamily: "Inter-Medium"
                            }}>{item.title}</ThemedText>
                        <ArrowForwardIcon/>
                    </View>
                    <View style={styles.metadata}>
                        <View style={styles.metadataItem}>
                            <FastFoodIcon width={16} height={16}/>
                            <ThemedText style={[styles.metaText, {color: colors.grey}]}>
                                Fast Food
                            </ThemedText>
                        </View>
                        <View style={styles.metadataItem}>
                            <StarIcon width={16} height={16}/>
                            <ThemedText style={[styles.metaText, {color: colors.grey}]}>
                                {item.rating}
                            </ThemedText>
                        </View>
                        <ThemedText style={[styles.metaText, {color: colors.grey}]}>
                            {item.reviews} Reviews
                        </ThemedText>
                    </View>
                </View>
                <IconComponent/>
            </View>

            {/* Content Section */}
            {item.type === 'Mc' ? (
                <ImageBackground
                    source={item.image as ImageSourcePropType}
                    style={styles.imageBackground}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        backgroundColor: '#000000CC'
                    }}/>
                    <BlurView intensity={80} style={styles.blurContainer}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={item.image as ImageSourcePropType}
                                style={styles.mainImage}
                            />
                            <LinearGradient
                                colors={['#00000000', '#000000AA']}
                                start={{x: 0, y: 0}}
                                end={{x: 0, y: 1}}
                                style={styles.gradient}
                            />
                            {item.customerReviews.map(e => e.image.length > 0) && <View style={{
                                position: 'absolute',
                                bottom: 10,
                                left: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 4
                            }}>
                                <ImageIcon/>
                                <ThemedText
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 500
                                    }}>{item.customerReviews.map(e => e.image.length)} attached
                                    images</ThemedText>
                            </View>}
                        </View>
                    </BlurView>

                    <BlurView intensity={80} style={styles.blurContainer}>
                        <View style={{overflow: 'hidden', borderRadius: 4,}}>

                            <View style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                backgroundColor: '#00000070'
                            }}/>
                            <LinearGradient
                                colors={['#00000070', '#000000AA']}
                                start={{x: 0, y: 0}}
                                end={{x: 0, y: 1}}
                                style={styles.gradient}
                            />
                            <ReviewHeader expanded={expanded} onToggle={() => setExpanded(!expanded)}/>
                            {renderReviews({expanded, onToggle: () => setExpanded(!expanded), type: item.type})}
                        </View>
                    </BlurView>
                </ImageBackground>
            ) : (
                <ImageBackground
                    source={item.image as ImageSourcePropType}
                    style={styles.imageBackground}>
                    <BlurView intensity={50} tint="dark" style={styles.blurContainer}>
                        {renderReviews({expanded, onToggle: () => setExpanded(!expanded), type: item.type})}
                    </BlurView>
                </ImageBackground>
            )}

            {/* Action Buttons */}
            <View style={styles.actionsContainer}>
                <CallToAction
                    icon={<ThumbUpIcon color={isHelpful ? colors.text : colors.grey}/>}
                    title={item.customerReviews.map(e => e.helpfulCount) as unknown as string}
                    onPress={handleHelpful}
                    isActive={isHelpful}
                />
                <CallToAction
                    icon={<ThumbDownIcon color={isNotHelpful ? colors.text : colors.grey}/>}
                    title={item.customerReviews.map(e => e.notHelpfulCount) as unknown as string}
                    onPress={handleNotHelpful}
                    isActive={isNotHelpful}
                />
                <CallToAction
                    icon={<FlagIcon color={isReported ? '#FF3B30' : undefined}/>}
                    title="Report"
                    onPress={handleReport}
                    isActive={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 8,
        padding: 4,
        marginTop: 4,
        borderRadius: 12,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        padding: 12,
    },
    headerTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    metadata: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 4,
    },
    metadataItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    metaText: {
        fontSize: 12,
        fontWeight: '400'
    },
    imageBackground: {
        width: '100%',
        borderRadius: 8,
        marginTop: 4,
        overflow: 'hidden',
        position: 'relative',
    },
    blurContainer: {
        padding: 4,
        // borderRadius: 8,
        overflow: 'hidden',
        position: 'relative'
    },
    imageWrapper: {
        position: 'relative',
    },
    mainImage: {
        width: '100%',
        height: 200,
        borderRadius: 4,
    },
    gradient: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 4,
    },
    reviewHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    reviewHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    reviewHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    reviewsContainer: {
        paddingHorizontal: 16,
        paddingBottom: 12,
    },
    reviewTitle: {
        marginTop: 12,
        fontSize: 18,
        fontWeight: '700',
    },
    reviewText: {
        marginTop: 4,
        fontSize: 14,
        fontWeight: 400
    },
    reviewMeta: {
        flexDirection: 'row',
        marginTop: 12,
        gap: 8,
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        marginTop: 12,
    },
    reviewImage: {
        width: 60,
        height: 60,
        borderRadius: 7,
    },
    actionsContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        width: '100%',
        marginVertical: 16
    },
    callToAction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    callToActionActive: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: 'white',
        borderRadius: 120
    },
    callToActionText: {
        fontSize: 12,
    },
});
