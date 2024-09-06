block("stages")(
    { tag: "section" },
    content()(function () {
        return [
            {
                elem: "container",
                mix: { block: "container" },
                content: [
                    {
                        elem: "description",
                        content: [
                            {
                                elem: "bar",
                                content: {
                                    block: "description",
                                    mods: { theme: "light" },
                                },
                            },
                            {
                                elem: "title",
                                tag: "h2",
                                mix: { block: "title", mods: { type: "h2" } },
                                content: "Этапы работы с нами",
                            },
                        ],
                    },
                    {
                        elem: "steps",
                        mix: { block: "steps" },
                        content: [
                            {
                                elem: "step",
                                content: [
                                    {
                                        elem: "icon",
                                        content: {
                                            tag: "img",
                                            attrs: {
                                                src: "../../icons/stages-submission.svg",
                                                alt: "",
                                            },
                                        },
                                    },
                                    {
                                        elem: "text",
                                        content: [
                                            {
                                                elem: "step-title",
                                                tag: "h3",
                                                mix: {
                                                    block: "title",
                                                    mods: { type: "h3" },
                                                },
                                                content: "Подача заявки",
                                            },
                                            {
                                                elem: "description",
                                                content: [
                                                    "Заполните заявку или позвоните нам ",
                                                    {
                                                        elem: "phone-number",
                                                        tag: "a",
                                                        attrs: {
                                                            href: "tel:84952222200",
                                                        },
                                                        content:
                                                            "+7 (495) 222 22 00",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                elem: "step",
                                content: [
                                    {
                                        elem: "icon",
                                        content: {
                                            tag: "img",
                                            attrs: {
                                                src: "../../icons/stages-communication.svg",
                                                alt: "",
                                            },
                                        },
                                    },
                                    {
                                        elem: "text",
                                        content: [
                                            {
                                                elem: "step-title",
                                                tag: "h3",
                                                mix: {
                                                    block: "title",
                                                    mods: { type: "h3" },
                                                },
                                                content: "Связь с менеджером",
                                            },
                                            {
                                                elem: "description",
                                                content:
                                                    "Менеджер свяжется с вами в течение 5 минут",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                elem: "step",
                                content: [
                                    {
                                        elem: "icon",
                                        content: {
                                            tag: "img",
                                            attrs: {
                                                src: "../../icons/stages-departure.svg",
                                                alt: "",
                                            },
                                        },
                                    },
                                    {
                                        elem: "text",
                                        content: [
                                            {
                                                elem: "step-title",
                                                tag: "h3",
                                                mix: {
                                                    block: "title",
                                                    mods: { type: "h3" },
                                                },
                                                content: "Выезд специалиста",
                                            },
                                            {
                                                elem: "description",
                                                content:
                                                    "Выезд специалиста на объект",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                elem: "step",
                                content: [
                                    {
                                        elem: "icon",
                                        content: {
                                            tag: "img",
                                            attrs: {
                                                src: "../../icons/stages-registration.svg",
                                                alt: "",
                                            },
                                        },
                                    },
                                    {
                                        elem: "text",
                                        content: [
                                            {
                                                elem: "step-title",
                                                tag: "h3",
                                                mix: {
                                                    block: "title",
                                                    mods: { type: "h3" },
                                                },
                                                content:
                                                    "Оформление документов",
                                            },
                                            {
                                                elem: "description",
                                                content: [
                                                    "Предоплата и постоплата.",
                                                    { tag: "br" },
                                                    "Предоставляем закрывающие документы.",
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ];
    })
);
