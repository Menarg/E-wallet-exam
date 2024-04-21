import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chip: 'chipDark',
    vendor: 'none',
    number: 'XXXX XXXX XXXX XXXX',
    name: 'FIRSTNAME LASTNAME',
    date: 'MM/YY',
    CCV: 'XXX',
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setNumber(state, action) {
            state.number = action.payload;
        },
        setVendor(state, action) {
            state.vendor = action.payload;
        },
        setChip(state, action) {
            state.chip = action.payload;
        },
        setName(state, action) {
            state.name = action.payload;
        },
        setDate(state, action) {
            state.date = action.payload;
        },
        setCCV(state, action) {
            state.CCV = action-payload;
        }
    }
});


export const { setNumber, setVendor, setChip, setDate, setName, setCCV } = cardSlice.actions;
export default cardSlice.reducer;