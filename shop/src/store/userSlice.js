import {createSlice} from '@reduxjs/toolkit';

let user = createSlice({
    name:'user', //state명
    initialState: {name: 'kim', age: 20}, //값
    reducers : {
      test(state){
        console.log('test')
        return 'choi' + state;
      },
      increase(state, a){
        state.age += a.payload;
      }
    }
})

export let {test, increase} = user.actions

export default user;