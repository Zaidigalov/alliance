block("header")(
    addJs()(true),
    { tag: "header" },
    content()(function () {
        return [
            {
                /* mix: { block: "container" }, */
                elem: "top",
                content: [
                    {
                        elem: "container",
                        mix: { elem: "container-top" },
                        content: [
                            { elem: "logo", content: { block: "logo" } },
                            { elem: "contacts", content: [{ block: "contacts", mods: { theme: "dark" } }] },
                            { elem: "burger", js: true, tag: "button" /* content: [{ tag: "img", attrs: { src: "../../icons/burger.svg" } }] */ }
                        ]
                    }
                ]
            },
            {
                elem: "menu",
                mix: { block: "font", mods: { body: "16B" } },
                content: [
                    {
                        elem: "container",
                        mix: { elem: "container-menu" },
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
                                                content: "Главная"
                                            }
                                        },
                                        {
                                            elem: "item",
                                            tag: "li",
                                            content: {
                                                elem: "button",
                                                tag: "button",
                                                content: "Аренда"
                                            }
                                        },
                                        {
                                            elem: "item",
                                            tag: "li",
                                            content: {
                                                elem: "button",
                                                tag: "button",
                                                content: "Услуги"
                                            }
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
                                                    href: "/"
                                                }
                                            }
                                        },
                                        {
                                            elem: "item",
                                            tag: "li",
                                            content: {
                                                elem: "button",
                                                tag: "button",
                                                content: "Информация"
                                            }
                                        },
                                        {
                                            elem: "item",
                                            tag: "li",
                                            content: {
                                                tag: "a",
                                                elem: "button",
                                                content: "Контакты",
                                                attrs: {
                                                    href: "/"
                                                }
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                elem: "networks",
                                content: [
                                    {
                                        elem: "link",
                                        tag: "a",
                                        attrs: {
                                            href: "/",
                                            target: "_blank"
                                        }
                                    },
                                    {
                                        elem: "link",
                                        tag: "a",
                                        attrs: {
                                            href: "/",
                                            target: "_blank"
                                        }
                                    },
                                    {
                                        elem: "link",
                                        tag: "a",
                                        attrs: {
                                            href: "/",
                                            target: "_blank"
                                        }
                                    }
                                ]
                            },
                            {
                                elem: "button-main",
                                /*  mix: { elem: "button-main" }, */
                                content: {
                                    block: "button",
                                    mods: {
                                        theme: "primary",
                                        size: "l",
                                        width: "available"
                                    },
                                    content: "Заказать звонок"
                                }
                            }
                        ]
                    }
                ]
            }
        ];
    })
);
