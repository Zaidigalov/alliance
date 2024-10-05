block("news").content()(function (node, ctx) {
    return [
        {
            elem: "image-wrapper",
            content: [
                { elem: "image", tag: "img", attrs: { src: ctx.image } },
                { elem: "overlay", tag: "a", attrs: { href: ctx.link }, content: "Читать статью" }
            ]
        },
        {
            elem: "date",
            content: [
                { elem: "calendar-icon", tag: "img", attrs: { src: "../../icons/calendar-light.svg" } },
                { elem: "day", tag: "span", content: ctx.day, mix: { block: "title", mods: { type: "h2" } } },
                { elem: "month", tag: "span", content: ctx.month, mix: { block: "font", mods: { body: "16R" } } }
            ]
        },
        {
            elem: "body",
            content: [
                { elem: "title", tag: "a", attrs: { href: ctx.link }, content: ctx.title, mix: { block: "title", mods: { type: "h3" } } },
                { elem: "text", tag: "p", content: ctx.text, mix: { block: "font", mods: { body: "16R" } } },
                { elem: "list", tag: "ul", content: [{ elem: "item", tag: "li", content: ctx.list, mix: { block: "font", mods: { body: "16R" } } }] },
                { elem: "link", tag: "a", attrs: { href: ctx.link }, content: "Подробнее", mix: { block: "font", mods: { body: "16B" } } }
            ]
        }
    ];
});
