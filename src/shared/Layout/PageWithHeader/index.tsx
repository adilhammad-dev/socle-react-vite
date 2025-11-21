import {PageWithHeaderContainer} from "./PageWithHeader.styled.ts";
import React from "react";
import Header from "components/layout/Header";

export interface PageWithHeaderProps {
    children?: React.ReactNode;
}

export const PageWithHeader: React.FC<PageWithHeaderProps> = ({children}) => {


    return (
        <PageWithHeaderContainer>
            <Header/>
            {children}
        </PageWithHeaderContainer>
    );
};
