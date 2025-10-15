import {ImageSourcePropType} from 'react-native';

export interface LocalBestProp {
    id: string;
    image: ImageSourcePropType;
    title: string;
    type: 'Fast Food' | 'Hotels';
    rating: number;
    reviews: string;
    iconType: 'chick' | 'radisson' | 'innout';
}
