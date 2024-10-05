block("logo")(
    content()(function () {
        return {
            block: "link",
            url: "/",
            content: [
                {elem: "image", content: {
                        tag: "img",
                        attrs: {src: "../../icons/logo.svg", alt: "logo"}}},
                {elem: "text",content: {
                    tag: "img", 
                    attrs: {src: "../../icons/logo-text.png", 
                    alt: "logo"}}}
            ]
        };
    })
);
