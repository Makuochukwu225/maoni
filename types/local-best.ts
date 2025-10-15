import {SvgProps} from "react-native-svg";
import {FC} from "react";

export interface SpotLightProp {

    title: string;
    image: string;
    type: string;
    icon: FC<SvgProps>;
    rating: number;
    reviews: string;
    customerReviews: {
        name: string;
        rating: number;
        title: string;
        review: string;
        timestamp: string;
        image: string[];
    }[]
}
