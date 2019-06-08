import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App/>);
});

it('shows a comment box', () => {

    // // we define div to be used in JSDOM actually we create a fake div which used instead of browser
    // // A HTML that produced by App component will put into this fake div
    // const div=document.createElement('div');
    //
    // ReactDom.render(<App/>,div);
    //
    // // expect:global function     , div.innerHTML: value that we are inspecting
    // // toContain: match statement , 'Comment Box': value that we expect to see
    // expect(div.innerHTML).toContain('Comment Box');
    //
    // // if we do not unmount our divs because it uses memory every time that we run a test this test will run again
    // // it will reduce the performance and also needs memory
    // ReactDom.unmountComponentAtNode(div);
    //____________________________________________


    expect(wrapped.find(CommentBox).length).toEqual(1);

});

it('shows a comment box', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);

});