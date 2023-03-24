import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '@/store'

type Tags = 'balcon' | 'terrasse' | 'jardin' | 'piscine' | 'parking' | 'garage' | 'sous-sol' | 'cave' | 'ascenseur' | 'Handicap'| 'meublé';
export type Apartment = {
    id: number;
    name: string;
    image: string;
    gallery: string[]
    price: number;
    tags: Tags[];
    description: string;
    rooms: number;
    chamber: number;
    surface: number;
    localisation: {
        zipcode: string;
        city: string;
        adress: string;
    }
}


export interface ApartmentState {
  data: Apartment[];
  loading: boolean;
}

const initialState: ApartmentState = {
    data: [],
    loading: false
}


export const ApartmentSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {
    initiateData: (state, action) => {
      state.data = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }, 
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload)
    },
    setTags: (state, action) => {
      
    }
  },
})

export const { initiateData, setLoading, removeItem } = ApartmentSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const isLoading = (state: AppState) => state.apartments.loading


export default ApartmentSlice.reducer
