block("service")(
    addMix()({ block: "shadow" }),
    content()(function (node, ctx) {
        return [
            {
                elem: "description",
                content: [
                    { elem: "title", tag: "span", content: ctx.title, mix: { block: "font", mods: { size: "l", weight: "medium" } } },
                    { elem: "price", tag: "span", content: ctx.price, mix: { block: "font", mods: { size: "m", weight: "semi-bold" } } }
                ]
            },
            { elem: "link", tag: "a", attrs: { href: ctx.link }, content: [{ block: "arrow", mods: { size: "m", theme: "primary" } }] }
        ];
    })
);
