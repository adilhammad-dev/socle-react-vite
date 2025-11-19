import styled from "styled-components";
import StyledButton from "components/ui/StyledButton";
import StyledField from "components/ui/StyledField";

export const FormContainer = styled.div`
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;

    & > .styled-field-wrapper {
        margin-bottom: 1.5rem;
    }
`;

export const FormTitle = styled.h2`
    margin-bottom: 1.5rem;
    text-align: center;
`;

export const FormField = styled(StyledField)`
    margin-bottom: 1.5rem;
`;


export const SubmitButton = styled(StyledButton)`
    min-width: 7rem;
    margin-right: 1rem;
`;

