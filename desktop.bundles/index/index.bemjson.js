module.exports = {
    block: "page",
    title: "Alliance",
    favicon: "/favicon.ico",
    head: [
        { elem: "meta", attrs: { name: "description", content: "" } },
        {
            elem: "meta",
            attrs: {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        },
        {
            tag: "link",
            attrs: {
                href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",
                rel: "stylesheet",
                content: "",
            },
        },
        { elem: "css", url: "index.min.css" },
    ],
    scripts: [{ elem: "js", url: "index.min.js" }],
    content: [
        { block: "header" },
        {
            block: "main",
            tag: "main",
            content: [{ block: "hero" }, { block: "stages" }],
        },
    ],
};
