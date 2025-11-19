import React, {forwardRef} from "react";
import {Button, type ButtonProps} from "@chakra-ui/react";
import {StyledButtonWrapper} from "components/ui/StyledButton/StyledButton.styled.ts";

export interface StyledButtonProps extends ButtonProps {
    children?: React.ReactNode;
}

const StyledButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
    ({children = "Solid", variant = "solid", colorScheme = "blue", ...props}, ref) => {
        return (
            <StyledButtonWrapper>
                <Button type="button" ref={ref} variant={variant} colorScheme={colorScheme} {...props}>
                    {children}
                </Button>
            </StyledButtonWrapper>
        );
    }
);

StyledButton.displayName = "StyledButton"; // for better React DevTools readability

export default StyledButton;
