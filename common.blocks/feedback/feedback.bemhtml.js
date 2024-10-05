/* block("feedback").content()(function (node, ctx) {
    return [
        {
            elem: "wrapper",
            content: [
                { elem: "avatar", content: { tag: "img", attrs: { src: ctx.avatar } } },
                { elem: "name", tag: "p", content: ctx.name, mix: { block: "font", mods: { body: "16B" } } },
                { elem: "company", tag: "p", content: ctx.company, mix: { block: "font", mods: { body: "16R" } } },
                { elem: "decor", tag: "img", attrs: { src: "../../icons/quote.svg" } },
                { elem: "text", tag: "p", content: ctx.text, mix: { block: "font", mods: { body: "16I" } } },
                { elem: "rating", content: ctx.rating }
            ]
        }
    ];
}); */

block("feedback")(
    addMods()({ theme: this.theme }),
    content()(function (node, ctx) {
        return [
            {
                elem: "wrapper",
                content: [
                    { elem: "avatar", content: { tag: "img", attrs: { src: ctx.avatar } } },
                    { elem: "name", tag: "p", content: ctx.name, mix: { block: "font", mods: { body: "16B" } } },
                    { elem: "company", tag: "p", content: ctx.company, mix: { block: "font", mods: { body: "16R" } } },
                    { elem: "decor", tag: "img", attrs: { src: "../../icons/quote.svg" } },
                    { elem: "text", tag: "p", content: ctx.text, mix: { block: "font", mods: { body: "16I" } } },
                    { elem: "rating", content: ctx.rating }
                ]
            }
        ];
    })
);
