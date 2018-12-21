import axios from 'axios';

export function loadColor() {
    return (dispatch) => {
        return axios.get('http://www.colr.org/json/color/random')
            .then((response) => {
                dispatch(changeColor("#" + response.data.new_color));
            })
    }
}
export function changeColor(color) {
    return {
        type: "CHNAGE_COLOR",
        color: color
    }
}