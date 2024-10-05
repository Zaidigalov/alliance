block("advantage").content()(function (node, ctx) {
    return [
        { elem: "icon", tag: "img", attrs: { src: ctx.icon } },
        { elem: "text", tag: "p", content: ctx.text, mix: { block: "font", mods: { body: "16B" } } }
    ];
});
