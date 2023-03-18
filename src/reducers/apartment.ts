import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '@/store'

type Tags = 'balcon' | 'terrasse' | 'jardin' | 'psicine' | 'parking' | 'garage' | 'sous-sol' | 'cave' | 'ascenseur' | 'Handicap'| 'meublé';
type Apartment = {
    name: string;
    price: string;
    tags: Tags[];
    description: string;
    rooms: number;
    chamber: number;
    surface: number;
    localisation: {
        ZipCode: string;
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
    loading: true
}


export const ApartmentSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {
    
  },
})

export const {  } = ApartmentSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: AppState) => state.apartments.value


export default ApartmentSlice.reducer
