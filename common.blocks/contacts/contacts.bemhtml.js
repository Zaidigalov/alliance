block("contacts")(
    addMix()({ block: "font", mods: { body: "16B" } }),
    content()(function () {
        return [
            {
                elem: "contact",
                mix: { elem: "time" },
                content: [
                    { elem: "image" },
                    {
                        elem: "text",
                        content: [
                            { tag: "p", content: "Режим работы" },
                            { tag: "p", content: "ПН - ВС 9.00 - 18.00" }
                        ]
                    }
                ]
            },
            {
                elem: "contact",
                mix: { elem: "mail" },
                content: [
                    { elem: "image" },
                    {
                        elem: "text",
                        content: [
                            { tag: "p", content: "Почта" },
                            {
                                block: "link",
                                url: "mailto:contact@alliance-group.tech",
                                content: "contact@alliance-group.tech"
                            }
                        ]
                    }
                ]
            },
            {
                elem: "contact",
                mix: { elem: "phone" },
                content: [
                    { elem: "image" },
                    {
                        elem: "text",
                        content: [
                            { tag: "p", content: "Телефон" },
                            {
                                block: "link",
                                url: "tel:84952222200",
                                content: "+7 (495) 222-22-00"
                            }
                        ]
                    }
                ]
            }
        ];
    })
);
