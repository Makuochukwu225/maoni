import {ImageSourcePropType} from 'react-native';

export interface CustomerReview {
    id: string;
    title: string;
    name: string;
    rating: number;
    review: string;
    timestamp: string;
    image: ImageSourcePropType[];
}

export interface SpotLightProp {
    id: string;
    image: ImageSourcePropType;
    title: string;
    type: 'Mc' | 'Taco';
    iconType: 'mcdonalds' | 'tacobell';
    rating: number;
    reviews: string;
    customerReviews: CustomerReview[];
    likeCount: number;
    unLikeCount: number;
}
