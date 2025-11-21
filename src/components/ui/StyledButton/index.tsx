import React, {forwardRef} from "react";
import {Button, type ButtonProps} from "@chakra-ui/react";
import {StyledButtonWrapper} from "components/ui/StyledButton/StyledButton.styled.ts";

export interface StyledButtonProps extends ButtonProps {
    children?: React.ReactNode;
}

const StyledButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
    ({children, variant = "solid", colorScheme, ...props}, ref) => {
        return (
            <StyledButtonWrapper>
                <Button type="button" ref={ref} variant={variant} colorScheme={colorScheme || "blue"} {...props}>
                    {children}
                </Button>
            </StyledButtonWrapper>
        );
    }
);

StyledButton.displayName = "StyledButton";

export default StyledButton;
