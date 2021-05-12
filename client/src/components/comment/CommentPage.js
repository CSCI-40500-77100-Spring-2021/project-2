import React, { Component } from "react";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class CommentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loading: false
        };

        this.addComment = this.addComment.bind(this);
    }

    handleclick() {
        this.props.history.push("/dashboard");
    } 

    componentDidMount() {
        // loading
        this.setState({ loading: true });
    
        // get all the comments
        fetch("http://localhost:7777")
          .then(res => res.json())
          .then(res => {
            this.setState({
              comments: res,
              loading: false
            });
          })
          .catch(err => {
            this.setState({ loading: false });
          });
    }


    /**
     * Add new comment
     * @param {Object} comment
     */
    addComment(comment) {
        this.setState({
        loading: false,
        comments: [comment, ...this.state.comments]
        });
    }

    render() {
        return (
            <div className="App container bg-light shadow">
                <div className="row">
                    <div className="col-4  pt-3 border-right">
                        <CommentForm addComment={this.addComment}/>
                    </div>
                    <div className="col-8  pt-3 bg-white">
                        <CommentList
                            loading={this.state.loading}
                            comments={this.state.comments}
                        />
                    </div>
                </div>
                <div className="col s12 center-align">
                <button
                    style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    onClick={() => this.handleclick()}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                    Return
                    </button>
                </div>
            </div>
        )
    }
    
}

export default CommentPage;
