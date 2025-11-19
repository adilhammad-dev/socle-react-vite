import React from "react";
import {Field, Input, type InputProps} from "@chakra-ui/react";
import {StyledFieldWrapper} from "./StyledField.styled.ts";

export interface StyledFieldProps extends InputProps {
    label?: string;
    error?: string;
    className?: string;
    isInvalid?: boolean;
}

const StyledField =
    React.forwardRef<HTMLInputElement, StyledFieldProps>(({
                                                              label = "Email",
                                                              error,
                                                              isInvalid = !!error,
                                                              className,
                                                              ...props
                                                          }, ref) => {
        return (
            <StyledFieldWrapper className={className}>
                <Field.Root invalid={isInvalid}>
                    <Field.Label>{label}</Field.Label>

                    <Input ref={ref}   {...props} />

                    {isInvalid && error && (
                        <Field.ErrorText>{error}</Field.ErrorText>
                    )}
                </Field.Root>
            </StyledFieldWrapper>

        );
    });

StyledField.displayName = 'StyledField';

export default StyledField;
