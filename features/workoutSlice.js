import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  daysTasks: [
    { day: "Monday", tasks: [] },
    { day: "Tuesday", tasks: [] },
    { day: "Wednesday", tasks: [] },
    { day: "Thursday", tasks: [] },
    { day: "Friday", tasks: [] },
    { day: "Saturday", tasks: [] }, 
  ]
};

const WorkoutSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask =  action.payload;
      state.tasks.push(newTask);
    },
    addDaysTask: (state, action) => {
      const { day, data } = action.payload;   
      const dayEntry = state.daysTasks.find((d) => d.day === day); 
      if (dayEntry) {
        dayEntry.tasks.push(data); 
      }
    },
    
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const updatedTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (updatedTask) {
        updatedTask.title = action.payload.title;
        updatedTask.description = action.payload.description;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask, addDaysTask } = WorkoutSlice.actions;

export default WorkoutSlice.reducer;
