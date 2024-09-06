block("hero")(
    { tag: "section" },
    js()(true),
    content()(function () {
        return [
            {
                elem: "container",
                mix: { block: "container" },
                content: [
                    {
                        elem: "description",
                        content: {
                            block: "description",
                            mods: { theme: "dark" },
                        },
                    },
                    {
                        elem: "title",
                        mix: { block: "title" },
                        tag: "h1",
                        content: [
                            "Аренда спецтехники",
                            { tag: "br" },
                            "в Москве и Московской области",
                        ],
                    },
                    {
                        elem: "text",
                        tag: "p",
                        content: [
                            "Наша компания предоставляет услуги аренды специализированной техники для строительства, дорожных работ, грузоперевозок и других отраслей промышленности",
                        ],
                    },
                    {
                        elem: "button",
                        content: {
                            block: "button",
                            mods: {
                                theme: "primary",
                                size: "medium",
                            },
                            content: "Подать заявку",
                        },
                    },
                ],
            },
        ];
    })
);
