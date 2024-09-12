module.exports = {
    block: "page",
    title: "Alliance UI",
    favicon: "/favicon.ico",
    head: [
        { elem: "meta", attrs: { name: "description", content: "" } },
        {
            elem: "meta",
            attrs: {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }
        },
        {
            tag: "link",
            attrs: {
                href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",
                rel: "stylesheet",
                content: ""
            }
        },
        { elem: "css", url: "ui.min.css" }
    ],
    scripts: [{ elem: "js", url: "ui.min.js" }],
    content: [
        { block: "title", mods: { type: "h1_desktop" }, tag: "h1", content: "Заголовок десктоп h1" },
        { block: "title", mods: { type: "h1_mobile" }, tag: "h1", content: "Заголовок мобилка h1" },
        { block: "title", mods: { type: "h2" }, tag: "h2", content: "Заголовок h2" },
        { block: "title", mods: { type: "h3" }, tag: "h3", content: "Заголовок h3" },
        { block: "title", mods: { type: "h4" }, tag: "h4", content: "Заголовок h4" },
        { block: "title", mods: { type: "h5" }, tag: "h5", content: "Заголовок h5" },

        {tag:"br"},
        {tag:"br"},
        <!-- ################################################################################# -->

        { block: "font", mods: { body: "16B" }, tag: "p", content: "Текст 16 пикселей Bold" },
        { block: "font", mods: { body: "16R" }, tag: "p", content: "Текст 16 пикселей Regular" },
        { block: "font", mods: { body: "16I" }, tag: "p", content: "Текст 16 пикселей Italic" },
        { block: "font", mods: { body: "14M" }, tag: "p", content: "Текст 14 пикселей Medium" },
        { block: "font", mods: { body: "14R" }, tag: "p", content: "Текст 14 пикселей Regular" },
        { block: "font", mods: { text: "12SB" }, tag: "p", content: "Текст 12 пикселей Semi-Bold" },
        { block: "font", mods: { text: "12R" }, tag: "p", content: "Текст 12 пикселей Regular" },

        {tag:"br"},
        {tag:"br"},
        <!-- ################################################################################# -->

        
        {block:"button", mods: { theme: "primary", size: "l"}, content:"Кнопка"},
        {tag:"br"},
        {block:"button", mods: { theme: "secondary", size: "l"}, content:"Кнопка"},
        {tag:"br"},
        {block:"button", mods: { theme: "stroke", size: "l"}, content:"Кнопка"},
        {tag:"br"},
        {tag:"br"},
        {block:"button", mods: { theme: "primary", size: "m"}, content:"Кнопка"},
        {tag:"br"},
        {block:"button", mods: { theme: "secondary", size: "m"}, content:"Кнопка"},
        {tag:"br"},
        {block:"button", mods: { theme: "stroke", size: "m"}, content:"Кнопка"},
        {tag:"br"},
        {tag:"br"},
        {block:"button", mods: { theme: "primary", size: "s"}, content:"Кнопка"},
        {tag:"br"},
        {block:"button", mods: { theme: "secondary", size: "s"}, content:"Кнопка"},
        {tag:"br"},
        {block:"button", mods: { theme: "stroke", size: "s"}, content:"Кнопка"},
        {tag:"br"},

        {block:"button", mods: { theme: "secondary", size: "m"}, content: [
            "Кнопка с иконкой",
            {tag:"img", attrs: { src: "../../icons/whatsapp-white.svg"}}
        ]},
        {tag:"br"},

    ]
};
