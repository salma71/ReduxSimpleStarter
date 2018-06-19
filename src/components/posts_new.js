import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input 
                className="form-control"
                type="text"
                // onChange={field.input.onChange}
                // onFocus={field.input.onFocus}
                // onBlur={field.input.onBlur}
                    {...field.input}
                />
                    <div className="text-help"> 
                    {touched ? error : ''}
                    </div>
            </div>
        )
    }
    onSubmit(values) {
        // console.log(values)
        // this.props.history.push('/') // we have to refresh to see the newly created post
        this.props.createPost(values, () => {
            this.props.history.push('/')
        })
    }
    render() {
        const {handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
{/* this Field component is used to represent the distinct input that
will be visible on screen to our users */}
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField} //takes a function
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField} //takes a function
                />
                <Field
                    label="contents"
                    name="content"
                    component={this.renderField} //takes a function
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values){
    const errors = {};
    if (!values.title || values.title.length < 3) {
        errors.title = "Please enter a title!"
    }
    if (!values.categories) {
        errors.categories = "Please enter a category!"   
    }
    if (!values.content) {
        errors.content = "Please enter a content!"
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm' // this string should be unique
})(
    connect(null, {createPost})(PostsNew)
);
// by doing that, we gave redux form the ability to communicate directly
// from this component to the reducer that we wired up 