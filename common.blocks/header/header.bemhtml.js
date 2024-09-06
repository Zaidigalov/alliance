block("header")(
    { tag: "header" },
    content()(function () {
        return [
            {
                mix: { block: "container" },
                elem: "top",
                content: [
                    { elem: "logo", content: { block: "logo" } },
                    {
                        elem: "contacts",
                        mods: { theme: "dark" },
                        content: { block: "contacts" },
                    },
                ],
            },
            { elem: "menu", content: { block: "menu" } },
        ];
    })
);
