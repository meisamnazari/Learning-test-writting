import commentReducer from './../Comments';
import {SAVE_COMMENT} from "../../actions/types";

it('handles actions of type save comment',()=>{
    const action={
        type:SAVE_COMMENT,
        payload:'New Comment'
    };
    const newState=commentReducer([],action);
    expect(newState).toEqual(['New Comment']);
})
