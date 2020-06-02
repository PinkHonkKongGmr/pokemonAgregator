import { defineAbilityUrl, setUrlToGoBack } from './types';

const initState = {
    url: null,
    urlBack: null,
};

export const abilityReducer = (state = initState, action) => {
    switch (action.type) {
        case defineAbilityUrl:
            return { ...state, url: action.payLoad };
        case setUrlToGoBack:
            return { ...state, urlBack: action.payLoad };
        default:
            return state;
    }
};
