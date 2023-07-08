import { createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})

const initialState = {
    data:[],
    status:STATUS.IDLE,
};
const movieFetchSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
       fetchAPi(state, action){
           state.data = action.payload;
       },
      setStatus(state, action){
          state.status = action.payload;
      }
    },
})

//thunk

export function fetchApiData(){
    return async function fetchApiThunk(dispatch, getState){
        dispatch(setStatus(STATUS.LOADING)) 
        try{
        
                const res = await fetch("https://imdb-api.com/en/API/Top250Movies/k_ci08sk5t");
                const data = await res.json() ;
                dispatch(fetchAPi(data.items))
                     dispatch(setStatus(STATUS.IDLE))
            
           
        }
        catch(err){
            console.log(err);
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}

export const {fetchAPi, setStatus} = movieFetchSlice.actions;

export default movieFetchSlice.reducer;