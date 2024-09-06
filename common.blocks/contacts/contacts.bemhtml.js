block("contacts")(
    { mods: { theme: "dark" } },
    { mix: { block: "font_weight_bold" } },
    content()(function () {
        return [
            {
                block: "contact",
                /* mods: { theme: "dark" }, */
                mix: { elem: "time" },

                content: [
                    {
                        elem: "image",
                    },
                    {
                        tag: "div",
                        elem: "text",
                        content: [
                            {
                                tag: "p",
                                content: "Режим работы",
                            },
                            {
                                tag: "p",
                                content: "ПН - ВС 9.00 - 18.00",
                            },
                        ],
                    },
                ],
            },

            {
                block: "contact",
                /* mods: { theme: "dark" }, */
                mix: { elem: "mail" },
                content: [
                    {
                        elem: "image",
                    },
                    {
                        tag: "div",
                        elem: "text",
                        content: [
                            {
                                tag: "p",
                                content: "Почта",
                            },
                            {
                                block: "link",
                                url: "mailto:contact@alliance-group.tech",
                                content: "contact@alliance-group.tech",
                            },
                        ],
                    },
                ],
            },

            {
                block: "contact",
                /* mods: { theme: "dark" }, */
                mix: { elem: "phone" },
                content: [
                    {
                        elem: "image",
                    },
                    {
                        tag: "div",
                        elem: "text",
                        content: [
                            {
                                tag: "p",
                                content: "Телефон",
                            },
                            {
                                block: "link",
                                url: "tel:84952222200",
                                content: "+7 (495) 222-22-00",
                            },
                        ],
                    },
                ],
            },
        ];
    })
);
