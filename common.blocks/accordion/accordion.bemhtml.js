block("accordion").content()(function (node, ctx) {
    return [
        { elem: "question", tag: "p", content: ctx.question, mix: { block: "title", mods: { type: "h4" } } },
        { elem: "answer", tag: "p", content: ctx.answer, mix: { block: "font", mods: { body: "16R" } } }
    ];
});
