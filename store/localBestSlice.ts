import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LocalBestProp} from '@/types/local-best';

interface LocalBestState {
    items: LocalBestProp[];
    likedItems: string[];
    isLoading: boolean;
    error: string | null;
}

const initialData: LocalBestProp[] = [
    {
        id: '1',
        image: require('./../assets/images/chick.png'),
        title: 'Chick-fil-A Washington Blvd',
        type: 'Fast Food',
        rating: 4.5,
        reviews: '13k',
        iconType: 'chick',
    },
    {
        id: '2',
        image: require('./../assets/images/hotel.png'),
        title: 'Hotel Radisson Blu Royal Viking',
        type: 'Hotels',
        rating: 4.4,
        reviews: '888',
        iconType: 'radisson',
    },
    {
        id: '3',
        image: require('./../assets/images/innout.png'),
        title: 'In-N-Out Burger',
        type: 'Fast Food',
        rating: 4.1,
        reviews: '3k',
        iconType: 'innout',
    },
];

const initialState: LocalBestState = {
    items: initialData,
    likedItems: [],
    isLoading: false,
    error: null,
};

const localBestSlice = createSlice({
    name: 'localBest',
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            const index = state.likedItems.indexOf(itemId);

            if (index > -1) {
                state.likedItems.splice(index, 1);
            } else {
                state.likedItems.push(itemId);
            }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        loadItems: (state, action: PayloadAction<LocalBestProp[]>) => {
            state.items = action.payload;
            state.isLoading = false;
        },
    },
});

export const {toggleLike, setLoading, setError, loadItems} = localBestSlice.actions;

// Selectors
export const selectLocalBestItems = (state: { localBest: LocalBestState }) => state.localBest.items;
export const selectLikedItems = (state: { localBest: LocalBestState }) => state.localBest.likedItems;
export const selectIsLoading = (state: { localBest: LocalBestState }) => state.localBest.isLoading;
export const selectIsLiked = (itemId: string) => (state: { localBest: LocalBestState }) =>
    state.localBest.likedItems.includes(itemId);

export default localBestSlice.reducer;
