import { forward, back, defineAbilityUrl, setUrlToGoBack } from './types';

export const goForward = () => ({ type: forward });
export const goBack = () => ({ type: back });
export const getAbilityUrl = (url) => ({ type: defineAbilityUrl, payLoad: url });
export const getUrlToGoBack = (url) => ({ type: setUrlToGoBack, payLoad: url });
