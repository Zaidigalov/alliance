block("usage").content()(function (node, ctx) {
    return [
        { elem: "text", tag: "p", content: ctx.text, mix: { block: "font", mods: { body: "16R" } } },
        { elem: "image", tag: "img", attrs: { src: ctx.image } }
    ];
});
