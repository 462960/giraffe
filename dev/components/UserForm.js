
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = props => {
  const { handleSubmit, pristine, reset, submitting, addUser } = props
  return (
    <form 
    onSubmit={handleSubmit}
    >
      <div>
        <label>Name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Name"
            //onChange={handleName}
          />
        </div>
      </div>
      <div>
        <label>Pass</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
            //onChange={handlePass}
          />
        </div>
      </div>

      
      <div>
        <button type="submit" disabled={pristine || submitting} >
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export const UserForm = reduxForm({
  form: 'regUser' // a unique identifier for this form
})(Form)