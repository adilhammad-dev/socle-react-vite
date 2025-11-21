import {createSystem, defaultConfig, defineConfig} from '@chakra-ui/react';
import {semanticTokens} from "theme/Colors.ts";
import {globalCss} from "theme/GlobalCss.ts";
import {fonts, fontWeights} from "theme/Fonts.ts";

const config = defineConfig({
    theme: {
        tokens: {
            fonts: fonts,
            fontWeights: fontWeights
        },
        semanticTokens: {
            colors: semanticTokens,
        },
    },

    globalCss: globalCss,
});

export default createSystem(defaultConfig, config);