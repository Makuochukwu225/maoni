import {configureStore} from '@reduxjs/toolkit';
import localBestReducer from './localBestSlice';
import spotlightReviewReducer from './spotlightReviewSlice';

export const store = configureStore({
    reducer: {
        localBest: localBestReducer,
        spotlightReview: spotlightReviewReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
