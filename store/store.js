import { configureStore } from "@reduxjs/toolkit";
import WorkoutSlice from "@/features/workoutSlice"

const store = configureStore({
    reducer: {
         workout: WorkoutSlice
    },
   
})

export default store;