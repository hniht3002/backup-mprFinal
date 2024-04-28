
const initialState = {
    time: 0
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE_TIME":
            return { ...state, time: state.time + 1 }
        // Define how the state should change for each action type
        case "SET_TIME":
            return { ...state, time: action.payload };
        default:
            return state;
    }
};

export default timerReducer;