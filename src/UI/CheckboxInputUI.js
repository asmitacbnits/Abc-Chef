import React from 'react'
import {
    FormGroup,
    FormFeedback,
    Input,
    Label,
  } from 'reactstrap';

export default function CheckboxUI({
    label,
    name,
    placeholder,
    innerRef,
    errors,
    type,
    fields,
    checked,
    ...rest
}) {
    return (
        <FormGroup check className="checkbox">
            <Input 
                className="form-check-input" 
                type="checkbox" 
                id={name} 
                name={name} 
                innerRef={innerRef}
                defaultValue={fields && fields[name] || ""}
                defaultChecked={fields && fields[name]}
                {...rest}
            />
            <Label check className="form-check-label" htmlFor={name}>{label}</Label>
            <FormFeedback>{errors[name] && errors[name].message}</FormFeedback>
        </FormGroup>
    )
}
