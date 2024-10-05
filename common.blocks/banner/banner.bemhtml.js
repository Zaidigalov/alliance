block("banner").content()(function () {
    return [
        {
            elem: "wrapper",
            content: [
                { elem: "decor" /* tag: "img", attrs: { src: "../../images/banner-decor.svg" } */ },
                { elem: "percent", tag: "span", content: "10%" },
                { elem: "title", tag: "p", content: "Акция! Закажите на сайте", mix: { block: "title", mods: { type: "h2" } } },
                {
                    elem: "text",
                    tag: "p",
                    content: "С 1 по 31 мая получите 10% скидку на аренду спецтехники при заказе через сайт",
                    mix: { block: "font", mods: { body: "16R" } }
                },
                {
                    elem: "button",
                    content: [{ block: "button", mods: { theme: "primary", size: "m", width: "available" }, content: "Заказать сейчас" }]
                }
            ]
        }
    ];
});
