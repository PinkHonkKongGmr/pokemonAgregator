import { forward, back } from './types';

const initState = {
    show: 0,
};

export const nextReducer = (state = initState, action) => {
    switch (action.type) {
        case forward:
            return { ...state, show: state.show + 20 };
        case back:
            return { ...state, show: state.show - 20 };
        default:
            return state;
    }
};
