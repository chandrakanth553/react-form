import Joi from 'joi-browser';
import Input from './input';
import React from 'react';

class Form extends React.Component {
    validate = (data, schema) => {
        const options = {abortEarly: false};
        const result = Joi.validate(data, schema, options);
        if(!result.error) return null;
        const errors = {};
        for (let item of result.error.details)
          errors[item.path[0]] = item.message
        return errors;
      }
  
      handleSubmit = (e) => {
        const errors = this.validate(this.state.data, this.schema);
        if(errors) this.setState({errors});
        if(!errors) 
        this.doSubmit();
      }
  
      validateProperty = ({name, value}) => {
        const obj = { [name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
      }
  
      handleChange = ({currentTarget : input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const {data} = this.state;
        data[input.name] = input.value;
        this.setState({data, errors});
      }

      renderButton = (label) => {
       return <button disabled={this.validate(this.state.data, this.schema)} className="btn btn-primary" onClick={this.handleSubmit}>{label}</button>
      }

      renderInput(name, label, type='text') {
          const { data, errors } = this.state;
          return (
            <Input 
            type={type}
            value={data[name]}
            onChange={this.handleChange}
            name={name}
            label={label}
            error={errors[name]} />
          )
      }
}
 
export default Form;