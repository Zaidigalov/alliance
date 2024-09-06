block("menu")(
    { tag: "nav" },
    { mix: { block: "font_weight_semi-bold" } },
    content()(function () {
        return [
            {
                elem: "container",
                mix: { block: "container" },
                content: [
                    {
                        tag: "nav",
                        elem: "navigation",
                        content: {
                            elem: "list",
                            tag: "ul",
                            content: [
                                {
                                    elem: "item",
                                    tag: "li",
                                    content: {
                                        elem: "button",
                                        tag: "button",
                                        content: "Главная",
                                    },
                                },
                                {
                                    elem: "item",
                                    tag: "li",
                                    content: {
                                        elem: "button",
                                        tag: "button",
                                        content: "Аренда",
                                    },
                                },
                                {
                                    elem: "item",
                                    tag: "li",
                                    content: {
                                        elem: "button",
                                        tag: "button",
                                        content: "Услуги",
                                    },
                                },
                                {
                                    elem: "item",
                                    tag: "li",
                                    content: {
                                        tag: "a",
                                        elem: "button",
                                        url: "/",
                                        content: "О компании",
                                        attrs: {
                                            href: "/",
                                        },
                                    },
                                },
                                {
                                    elem: "item",
                                    tag: "li",
                                    content: {
                                        elem: "button",
                                        tag: "button",
                                        content: "Информация",
                                    },
                                },
                                {
                                    elem: "item",
                                    tag: "li",
                                    content: {
                                        tag: "a",
                                        elem: "button",
                                        content: "Контакты",
                                        attrs: {
                                            href: "/",
                                        },
                                    },
                                },
                            ],
                        },
                    },
                    {
                        elem: "networks",
                        content: [
                            {
                                elem: "link",
                                tag: "a",
                                attrs: {
                                    href: "/",
                                    target: "_blank",
                                },
                                content: {
                                    elem: "icon",
                                    tag: "img",
                                    attrs: {
                                        src: "../../icons/instagram-black.svg",
                                    },
                                },
                            },
                            {
                                elem: "link",
                                tag: "a",
                                attrs: {
                                    href: "/",
                                    target: "_blank",
                                },
                                content: {
                                    elem: "icon",
                                    tag: "img",
                                    attrs: {
                                        src: "../../icons/whatsapp-black.svg",
                                    },
                                },
                            },
                            {
                                elem: "link",
                                tag: "a",
                                attrs: {
                                    href: "/",
                                    target: "_blank",
                                },
                                content: {
                                    elem: "icon",
                                    tag: "img",
                                    attrs: {
                                        src: "../../icons/telegram-black.svg",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        elem: "button",
                        mix: { elem: "button-main" },
                        content: {
                            block: "button",
                            mods: {
                                theme: "primary",
                                size: "large",
                            },
                            content: "Заказать звонок",
                        },
                    },
                ],
            },
        ];
    })
);
