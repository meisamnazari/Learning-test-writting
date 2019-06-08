import React from 'react';
import {mount} from 'enzyme';
import CommentBox from "../CommentBox";
import Root from './../../Root'


// Enzyme gives us three possible options to write tests:
// static: render component and return plain HTML no interaction of HTML with other parts considered
// shallow: renders a component not its children
// Full Dom: renders component and its children completely

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

});

// describe is used to group some test

describe('has a text area and a button', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate("change", {
            target: {value: "new comment"}
        });
        wrapped.update();
    });
    it('has a text area that user can  type in', () => {

        expect(wrapped.find('textarea').prop('value')).toEqual("new comment")
    });

    it('when form is submitted textarea gets empty', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual("");

    });
});




