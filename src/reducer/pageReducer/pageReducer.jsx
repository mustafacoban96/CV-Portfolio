
import { ABOUT_PAGE, CONTACT_PAGE, SKILL_PAGE } from "../../action/pageRouter/pageRouter";
import { pageValue } from "../../globalPageValue/globalValue";



const INITIAL_STATE = {
    pageValues: pageValue,
}


export const reducer = (state = INITIAL_STATE,action) =>{

    switch(action.type){
        case ABOUT_PAGE:
            return {
                ...state,pageValues: {
                    ...state.pageValues,
                    about_page: true,
                    skill_page: false,
                    contact_page: false,
                },
            }
        case SKILL_PAGE:
            

            return {
                ...state,pageValues: {
                    ...state.pageValues,
                    about_page: false,
                    skill_page: true,
                    contact_page: false,
                },
            }
        case CONTACT_PAGE:

            return {
                ...state,pageValues: {
                    ...state.pageValues,
                    about_page: false,
                    skill_page: false,
                    contact_page: true,
                },
            }
            
        default:
            return state;
    }

    
}