import { LOCALE_SET } from "./types";


export const localeSet = (lang) => ({
    type: LOCALE_SET,
    lang,

});

export const setLocale = (lang) => dispatch => {

   localStorage.setItem('user_choose_lang',lang);

    dispatch(localeSet(lang));
};
