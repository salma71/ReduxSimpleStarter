import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions'

class PostsShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params; // provided directly from react router
        this.props.fetchPost(id);
    }
    render() {
        const {post} = this.props
        if (!post) {
            return <div>Loading....</div>
        }

        // posts[this.props.match.params.id] this will show our post
        return (
            <div>
                {/* #PostShowPage */}
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({posts}, ownProps) {
    // return {posts}
    return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);