block("description")(
    { mix: [{ block: "font_weight_regular" }, { block: "font_size_s" }] },
    js()(true),
    content()(function () {
        return [{ elem: "decor" }, { elem: "body", content: "description" }];
    })
);
