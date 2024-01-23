import { ABOUT_PAGE,CONTACT_PAGE,SKILL_PAGE } from "./pageRouter/pageRouter";


export const openAbout = () =>{
    return {
        type:ABOUT_PAGE,
    }
}

export const openSkill = () =>{
    return {
        type:SKILL_PAGE,
    }
}


export const openContact = () =>{
    return {
        type:CONTACT_PAGE,
    }
}