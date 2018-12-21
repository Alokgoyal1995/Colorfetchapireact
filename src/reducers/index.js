let dafaultState = {
    color: "red"
}
const mainReducer = (state = dafaultState, action) => {
    if (action.type === "CHNAGE_COLOR") {
        return {
            ...state,
            color: action.color
        }
    }
    else {
        return {
            ...state
        }
    }
}
export default mainReducer;
