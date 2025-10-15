import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SpotLightProp} from '@/types/spot-light';

interface SpotlightReviewState {
    items: SpotLightProp[];
    helpfulReviews: string[]; // array of review IDs marked as helpful
    notHelpfulReviews: string[]; // array of review IDs marked as not helpful
    reportedReviews: string[]; // array of review IDs that have been reported
    isLoading: boolean;
    error: string | null;
}

const initialData: SpotLightProp[] = [
    {
        id: '1',
        image: require('./../assets/images/mac-big-2.png'),
        title: 'McDonalds',
        type: 'Mc',
        iconType: 'mcdonalds',
        rating: 4.4,
        reviews: '15',
        customerReviews: [
            {
                id: '1-1',
                title: 'Excellent service',
                name: 'Keith Quinlain',
                rating: 2.5,
                review:
                    'Great service. I was delighted to have thier services. I had the hamman wash when i went and it was a lovely experience. \n' +
                    'Good value for money. \n' +
                    'But they are really pricey though.',
                timestamp: '3 hours ago',
                image: [
                    require('./../assets/images/mac-big.png'),
                    require('./../assets/images/mac-big-2.png'),
                ],
            },
        ],
        likeCount: 11,
        unLikeCount: 2,
    },
    {
        id: '2',
        image: require('./../assets/images/taco-big.png'),
        title: 'Taco Bell',
        iconType: 'tacobell',
        type: 'Taco',
        rating: 4.3,
        reviews: '7.5k',
        customerReviews: [
            {
                id: '3-1',
                title: 'Overpriced and disappointing',
                name: 'William Garcia',
                rating: 1,
                review:
                    'Despite the good service, I was not satisfied with my visit. I had the taco platter, but it was far from a pleasant experience. \n' +
                    'Not worth the money. Additionally, their prices are excessively high.',
                timestamp: '3 hours ago',
                image: [],
            },
        ],
        likeCount: 15,
        unLikeCount: 3,
    },
    {
        id: '3',
        image: require('./../assets/images/mac-big.png'),
        title: 'McDonalds',
        iconType: 'mcdonalds',
        type: 'Mc',
        rating: 4.4,
        reviews: '15',
        customerReviews: [
            {
                id: '2-1',
                title: 'Excellent service',
                name: 'Keith Quinlain',
                rating: 1,
                review:
                    'Great service. I was delighted to have thier services. I had the hamman wash when i went and it was a lovely experience. \n' +
                    'Good value for money. \n' +
                    'But they are really pricey though.',
                timestamp: '3 hours ago',
                image: [],
            },

        ],
        likeCount: 11,
        unLikeCount: 2,
    },
];

const initialState: SpotlightReviewState = {
    items: initialData,
    helpfulReviews: [],
    notHelpfulReviews: [],
    reportedReviews: [],
    isLoading: false,
    error: null,
};

const spotlightReviewSlice = createSlice({
    name: 'spotlightReview',
    initialState,
    reducers: {
        toggleHelpful: (state, action: PayloadAction<string>) => {
            const reviewId = action.payload;
            const helpfulIndex = state.helpfulReviews.indexOf(reviewId);
            const notHelpfulIndex = state.notHelpfulReviews.indexOf(reviewId);

            // Remove from not helpful if it exists there
            if (notHelpfulIndex > -1) {
                state.notHelpfulReviews.splice(notHelpfulIndex, 1);
            }

            // Toggle helpful
            if (helpfulIndex > -1) {
                state.helpfulReviews.splice(helpfulIndex, 1);
            } else {
                state.helpfulReviews.push(reviewId);
            }
        },
        toggleNotHelpful: (state, action: PayloadAction<string>) => {
            const reviewId = action.payload;
            const helpfulIndex = state.helpfulReviews.indexOf(reviewId);
            const notHelpfulIndex = state.notHelpfulReviews.indexOf(reviewId);

            // Remove from helpful if it exists there
            if (helpfulIndex > -1) {
                state.helpfulReviews.splice(helpfulIndex, 1);
            }

            // Toggle not helpful
            if (notHelpfulIndex > -1) {
                state.notHelpfulReviews.splice(notHelpfulIndex, 1);
            } else {
                state.notHelpfulReviews.push(reviewId);
            }
        },
        toggleReport: (state, action: PayloadAction<string>) => {
            const reviewId = action.payload;
            const index = state.reportedReviews.indexOf(reviewId);

            if (index > -1) {
                state.reportedReviews.splice(index, 1);
            } else {
                state.reportedReviews.push(reviewId);
            }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        loadItems: (state, action: PayloadAction<SpotLightProp[]>) => {
            state.items = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    toggleHelpful,
    toggleNotHelpful,
    toggleReport,
    setLoading,
    setError,
    loadItems,
} = spotlightReviewSlice.actions;

// Selectors
export const selectSpotlightItems = (state: { spotlightReview: SpotlightReviewState }) =>
    state.spotlightReview.items;
export const selectIsLoading = (state: { spotlightReview: SpotlightReviewState }) =>
    state.spotlightReview.isLoading;
export const selectIsHelpful = (reviewId: string) => (state: { spotlightReview: SpotlightReviewState }) =>
    state.spotlightReview.helpfulReviews.includes(reviewId);
export const selectIsNotHelpful = (reviewId: string) => (state: { spotlightReview: SpotlightReviewState }) =>
    state.spotlightReview.notHelpfulReviews.includes(reviewId);
export const selectIsReported = (reviewId: string) => (state: { spotlightReview: SpotlightReviewState }) =>
    state.spotlightReview.reportedReviews.includes(reviewId);

export default spotlightReviewSlice.reducer;
