// import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

// let getdata = async () => {
//     let blobs = await fetch("https://billmanagement-server.vercel.app/profilesetting", {
//         headers: {
//             "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyYWtha2tzaC5kZXZiYnNzZWxvcGVyQGdtYWlsLmNvbSIsImlhdCI6MTczMzI5NjM4M30.z62yAmBzZn7DcUQpEgEBw5lmlpNDBAdjQflB0flqgdg",
//         }
//     })
//      let response = await blobs.json();
//     return response.user
    
// }

// const initialState = {
//     value: 0,
//     data: getdata(),
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer