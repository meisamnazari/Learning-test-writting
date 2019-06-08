import {SAVE_COMMENT} from './types';

export const save_comment=(comment)=>{
    return{
        type:SAVE_COMMENT,
        payload:comment
    }
}