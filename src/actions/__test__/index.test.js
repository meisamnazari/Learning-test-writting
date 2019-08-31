import {SAVE_COMMENT} from './../types';
import {save_comment} from './../index';


describe('Save Comment', () => {

    it('it has a correct type', () => {
        const action=save_comment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('it has a correct payload', () => {
        const action=save_comment('New comment');
        expect(action.payload).toEqual('New comment');
    });
});

