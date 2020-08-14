import React from 'react'
import {
    FormGroup,
    FormFeedback,
    Input,
    Label,
} from 'reactstrap';
export default function DocFileInput({
    label,
    name,
    fileType,
    register,
    errors,
    required
}) {
    return (
        <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <Input
                id={name}
                type="file"
                name={name}
                innerRef={register({
                    required: required && 'Please upload file.',
                    validate: (fiels) => {
                        // vaile type validation
                        if (fiels.length > 0)
                            return /\.(docx|pdf|ppt|pptx)$/.test(fiels[0].name) || 'Please upload document file'
                    }
                })}
                invalid={errors[name] ? true : false}
            />
            <FormFeedback>{errors[name] && errors[name].message}</FormFeedback>
        </FormGroup>
    )
}
