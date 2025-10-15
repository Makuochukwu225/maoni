import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SpotLightProp} from '@/types/spot-light';

interface SpotlightReviewState {
    items: SpotLightProp[];
    helpfulReviews: string[];
    notHelpfulReviews: string[];
    reportedReviews: string[];
    isLoading: boolean;
    error: string | null;
}

const generateInitialCounts = (data: SpotLightProp[]) => {
    const helpful: string[] = [];
    const notHelpful: string[] = [];


    data.forEach(item => {
        item.customerReviews.forEach(review => {
            if (review.helpfulCount > 0) {
                // Add the review ID multiple times (count-based)
                helpful.push(...Array.from({length: review.helpfulCount}, () => review.id));
            }
            if (review.notHelpfulCount > 0) {
                notHelpful.push(...Array.from({length: review.notHelpfulCount}, () => review.id));
            }
        });
    });

    return {helpful, notHelpful};
};


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
                    'Great service. I was delighted to have their services. I had the hamman wash when I went and it was a lovely experience.\nGood value for money.\nBut they are really pricey though.',
                timestamp: '3 hours ago',
                image: [
                    require('./../assets/images/mac-big.png'),
                    require('./../assets/images/mac-big-2.png'),
                ],
                helpfulCount: 11,
                notHelpfulCount: 2,
            },
        ],
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
                    'Despite the good service, I was not satisfied with my visit. I had the taco platter, but it was far from a pleasant experience.\nNot worth the money. Additionally, their prices are excessively high.',
                timestamp: '3 hours ago',
                image: [],
                helpfulCount: 15,
                notHelpfulCount: 3,
            },
        ],
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
                    'Great service. I was delighted to have their services. I had the hamman wash when I went and it was a lovely experience.\nGood value for money.\nBut they are really pricey though.',
                timestamp: '3 hours ago',
                image: [],
                helpfulCount: 11,
                notHelpfulCount: 2,
            },
        ],
    },
];

const {helpful, notHelpful} = generateInitialCounts(initialData);


const initialState: SpotlightReviewState = {
    items: initialData,
    helpfulReviews: helpful,
    notHelpfulReviews: notHelpful,
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
            const isHelpful = state.helpfulReviews.includes(reviewId);
            const isNotHelpful = state.notHelpfulReviews.includes(reviewId);

            state.items.forEach(item => {
                item.customerReviews.forEach(review => {
                    if (review.id === reviewId) {
                        if (isHelpful) {
                            state.helpfulReviews = state.helpfulReviews.filter(id => id !== reviewId);
                            review.helpfulCount = Math.max(0, review.helpfulCount - 1);
                        } else {
                            state.helpfulReviews.push(reviewId);
                            review.helpfulCount += 1;

                            if (isNotHelpful) {
                                state.notHelpfulReviews = state.notHelpfulReviews.filter(id => id !== reviewId);
                                review.notHelpfulCount = Math.max(0, review.notHelpfulCount - 1);
                            }
                        }
                    }
                });
            });
        },

        toggleNotHelpful: (state, action: PayloadAction<string>) => {
            const reviewId = action.payload;
            const isHelpful = state.helpfulReviews.includes(reviewId);
            const isNotHelpful = state.notHelpfulReviews.includes(reviewId);

            state.items.forEach(item => {
                item.customerReviews.forEach(review => {
                    if (review.id === reviewId) {
                        if (isNotHelpful) {
                            state.notHelpfulReviews = state.notHelpfulReviews.filter(id => id !== reviewId);
                            review.notHelpfulCount = Math.max(0, review.notHelpfulCount - 1);
                        } else {
                            state.notHelpfulReviews.push(reviewId);
                            review.notHelpfulCount += 1;

                            if (isHelpful) {
                                state.helpfulReviews = state.helpfulReviews.filter(id => id !== reviewId);
                                review.helpfulCount = Math.max(0, review.helpfulCount - 1);
                            }
                        }
                    }
                });
            });
        },

        toggleReport: (state, action: PayloadAction<string>) => {
            const reviewId = action.payload;
            if (state.reportedReviews.includes(reviewId)) {
                state.reportedReviews = state.reportedReviews.filter(id => id !== reviewId);
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

export const selectSpotlightItems = (state: { spotlightReview: SpotlightReviewState }) =>
    state.spotlightReview.items;

export const selectIsLoading = (state: { spotlightReview: SpotlightReviewState }) => state.spotlightReview.isLoading;

export const selectIsHelpful = (reviewId: string) => (state: { spotlightReview: SpotlightReviewState }) =>
    state.spotlightReview.helpfulReviews.includes(reviewId);

export const selectIsNotHelpful = (reviewId: string) => (state: { spotlightReview: SpotlightReviewState }) =>
    state.spotlightReview.notHelpfulReviews.includes(reviewId);

export const selectIsReported = (reviewId: string) => (state: { spotlightReview: SpotlightReviewState }) =>
    state.spotlightReview.reportedReviews.includes(reviewId);

export default spotlightReviewSlice.reducer;
