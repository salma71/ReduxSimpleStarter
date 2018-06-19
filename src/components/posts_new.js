import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field) {
        return(
            <div className="form-group">
                <label>Title</label>
                <input 
                className="form-control"
                type="text"
                // onChange={field.input.onChange}
                // onFocus={field.input.onFocus}
                // onBlur={field.input.onBlur}
                    {...field.input}
                />
            </div>
        )
    }
    render() {
        return(
            <form>
{/* this Field component is used to represent the distinct input that
will be visible on screen to our users */}
                <Field 
                    name="title"
                    component={this.renderTitleField} //takes a function
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm' // this string should be unique
})(PostsNew); 
// by doing that, we gave redux form the ability to communicate directly
// from this component to the reducer that we wired up 