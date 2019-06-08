import React, {Component} from 'react';
import {connect} from "react-redux";
import {save_comment} from './../actions'

class CommentBox extends Component {

    state = {comment: ''};

    handleChange=(event)=>{
        this.setState({comment:event.target.value})
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.save_comment(this.state.comment);
        this.setState({comment:''})
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange}
                />
                <div>
                    <button>Summit Comment</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps=(state)=>{
        return{
            comments:state.comments
        }
};

export default connect(mapStateToProps,{save_comment})(CommentBox);