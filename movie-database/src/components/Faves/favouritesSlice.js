import { createSlice } from '@reduxjs/toolkit';

export const getFaves = () => {
  let favesFromStorage = localStorage.getItem('movieFaves');

  if (favesFromStorage === null) {
    // If no 'movieFaves' in storage, return empty array
      favesFromStorage = [];
  } else {
    // If 'movieFaves' is found in storage, return as array
      favesFromStorage = JSON.parse(favesFromStorage);
  }
  return favesFromStorage;
}

const getIndex = (item, arr) => {
  // findIndex() in array from when argument is first true
  // find the index of where the item from the parameter is in the array
  return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    value: getFaves()
  },
  reducers: {
    // Add functions that will manipulate the state
    addFavourite: (state, action) => {
        const newFaves = [...state.value, action.payload];
        //store newFaves array into local storage
        localStorage.setItem('movieFaves', JSON.stringify(newFaves));
        state.value = newFaves;
    },
    removeFavourite: (state, action) => {
        const favesArray = state.value;
        // splice(`insert at index`, `number of elements to replace`, `value to insert`)
        // This splice matches the movie index in the favesArray and replaces 1 element with value=blank
        // When value parameter is not declared, splice removes the targeted element from array
        // therefore, removes targeted movie object from favesArray
        favesArray.splice(getIndex(action.payload, state.value), 1);
        // set edited favesArray into local storage (replacing 'newFaves' array)
        localStorage.setItem('movieFaves', JSON.stringify(favesArray));
        state.value = favesArray;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addFavourite, removeFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer