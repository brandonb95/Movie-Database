import { createSlice } from "@reduxjs/toolkit";

export const getFaves = () => {
  let favesFromStorage = localStorage.getItem("movieFaves");

  if (favesFromStorage === null) {
    // If no 'movieFaves' in storage, return empty array
    favesFromStorage = [];
  } else {
    // If 'movieFaves' is found in storage, return as array
    favesFromStorage = JSON.parse(favesFromStorage);
  }
  return favesFromStorage;
};

const getIndex = (item, arr) => {
  // findIndex() in array from when argument is first true
  // find the index of where the item from the parameter is in the array
  return arr.findIndex((arrItem) => arrItem.id === item.id);
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    value: getFaves(),
  },
  reducers: {
    // Add functions that will manipulate the state
    addFavourite: (state, action) => {
      const newFaves = [...state.value, action.payload];

      // Store newFaves array into local storage
      localStorage.setItem("movieFaves", JSON.stringify(newFaves));
      state.value = newFaves;
    },
    removeFavourite: (state, action) => {
      const favesArray = state.value;
      const index = getIndex(action.payload, state.value);
      if (index !== -1) {
        favesArray.splice(index, 1);
        localStorage.setItem("movieFaves", JSON.stringify(favesArray));
        state.value = favesArray;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
