export const globalCss = {
    html: {
        colorScheme: "light dark",
        scrollBehavior: "smooth",
    },
    "html, body": {
        height: "100%",
        margin: 0,
        padding: 0,
    },
    body: {
        fontFamily: "body",
        bg: "bg.primary",
        color: "text.primary",
    },


    "*::placeholder": {
        color: "text.tertiary",
    },
    "::-webkit-scrollbar": {
        width: "10px",
        height: "10px",
    },
    "::-webkit-scrollbar-track": {
        bg: "bg.secondary",
    },
    "::-webkit-scrollbar-thumb": {
        bg: "border.default",
        borderRadius: "full",
    },
    "::-webkit-scrollbar-thumb:hover": {
        bg: "border.hover",
    },
};