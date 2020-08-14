import React from 'react'
import {
    FormGroup,
    FormFeedback,
    Input,
    Label,
  } from 'reactstrap';

export default function InputUI({
    label,
    name,
    placeholder,
    innerRef,
    errors,
    type,
    fields,
    ...rest
}) {
    return (
        <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <Input
                type={type || 'text' || 'textarea'}
                id={name}
                name={name}
                placeholder={placeholder}
                innerRef={innerRef}
                invalid={errors[name] ? true : false}
                defaultValue={fields && fields[name]}
                {...rest}
            />
            <FormFeedback>{errors[name] && errors[name].message}</FormFeedback>
        </FormGroup>
    )
}
