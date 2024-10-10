block("footer").content()(function () {
    return [
        {
            elem: "top",
            content: [
                {
                    elem: "container",
                    content: [
                        /* { elem: "decor-left" }, */
                        { elem: "decor-right" },
                        {
                            elem: "left",
                            content: [
                                { elem: "logo", content: { block: "logo" } },
                                {
                                    elem: "description",
                                    tag: "P",
                                    mix: { block: "font", mods: { body: "14M" } },
                                    content:
                                        "Наша компания предоставляет услуги аренды специализированной техники для строительства, дорожных работ, грузоперевозок и других отраслей промышленности"
                                },
                                { elem: "contacts", content: { block: "contacts", mods: { theme: "dark", direction: "vertical" } } }
                            ]
                        },
                        {
                            elem: "middle",
                            content: [
                                {
                                    elem: "column",
                                    mix: { elem: "column-menu" },
                                    content: [
                                        { elem: "column-title", tag: "span", mix: { block: "title", mods: { type: "h3" } }, content: "Меню" },
                                        {
                                            elem: "column-list",
                                            mix: { block: "font", mods: { body: "16R" } },
                                            tag: "ul",
                                            content: [
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Главная" } },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "О компании" } },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Блог" } },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Отзывы" } },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "FAQ" } },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Контакты" } }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: "column",
                                    mix: { elem: "column-rent" },
                                    content: [
                                        { elem: "column-title", tag: "span", mix: { block: "title", mods: { type: "h3" } }, content: "Аренда" },
                                        {
                                            elem: "column-list",
                                            mix: { block: "font", mods: { body: "16R" } },
                                            tag: "ul",
                                            content: [
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Автокраны" } },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Автовышки" } },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Манипуляторы" } },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Самосвалы" } },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Погрузчики" } },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Вся аренда" } }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: "column",
                                    mix: { elem: "column-services" },
                                    content: [
                                        { elem: "column-title", tag: "span", mix: { block: "title", mods: { type: "h3" } }, content: "Аренда" },
                                        {
                                            elem: "column-list",
                                            mix: { block: "font", mods: { body: "16R" } },
                                            tag: "ul",
                                            content: [
                                                {
                                                    elem: "item",
                                                    tag: "li",
                                                    content: { tag: "a", attrs: { href: "#" }, content: "Перевозка техники" }
                                                },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Земляные работы" } },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Перевозка грузов" } },
                                                {
                                                    elem: "item",
                                                    tag: "li",
                                                    content: { tag: "a", attrs: { href: "#" }, content: "Строительство дорог" }
                                                },
                                                {
                                                    elem: "item",
                                                    tag: "li",
                                                    content: { tag: "a", attrs: { href: "#" }, content: "Буронабивные сваи" }
                                                },
                                                { elem: "item", tag: "li", content: { tag: "a", attrs: { href: "#" }, content: "Все услуги" } }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: "right",
                            content: [
                                { elem: "column-title", tag: "span", mix: { block: "title", mods: { type: "h3" } }, content: "Заказать звонок" },
                                {
                                    elem: "button",
                                    content: {
                                        block: "button",
                                        mods: { theme: "primary", size: "l", width: "available" },
                                        content: "Заказать звонок"
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
                                            },
                                            content: {
                                                elem: "icon",
                                                tag: "img",
                                                attrs: {
                                                    src: "../../icons/instagram-white.svg"
                                                }
                                            }
                                        },
                                        {
                                            elem: "link",
                                            tag: "a",
                                            attrs: {
                                                href: "/",
                                                target: "_blank"
                                            },
                                            content: {
                                                elem: "icon",
                                                tag: "img",
                                                attrs: {
                                                    src: "../../icons/whatsapp-white.svg"
                                                }
                                            }
                                        },
                                        {
                                            elem: "link",
                                            tag: "a",
                                            attrs: {
                                                href: "/",
                                                target: "_blank"
                                            },
                                            content: {
                                                elem: "icon",
                                                tag: "img",
                                                attrs: {
                                                    src: "../../icons/telegram-white.svg"
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem: "bottom",
            content: [
                { tag: "p", mix: { block: "font", mods: { body: "16B" } }, content: "2024 © Alliance-group" },
                { tag: "p", mix: { block: "font", mods: { body: "16B" } }, content: "Сайт разработан savin-seo.ru" }
            ]
        }
    ];
});
