import type {FC} from "react";
import {TemplateNameWrapper} from './TemplateName.styled.ts';

interface TemplateNameProps {
}

const TemplateName: FC<TemplateNameProps> = () => (
    <TemplateNameWrapper>
        TemplateName Component
    </TemplateNameWrapper>
);

export default TemplateName;

