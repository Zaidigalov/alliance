block("card-popular").content()(function (node, ctx) {
    return [
        {
            elem: "image-wrapper",
            content: [
                { elem: "image", tag: "img", attrs: { src: ctx.image } },
                { elem: "quantity", tag: "span", content: ctx.quantity + " ед.", mix: { block: "font", mods: { text: "12SB" } } }
            ]
        },
        {
            elem: "top",
            content: [
                { elem: "title", tag: "h4", content: ctx.title, mix: { block: "title", mods: { type: "h4" } } },
                {
                    elem: "prices",
                    content: [
                        { elem: "old-price", tag: "span", content: "от " + ctx.old_price + " руб", mix: { block: "font", mods: { body: "14R" } } },

                        { elem: "current-price", tag: "span", content: "от " + ctx.current_price + " руб/час", mix: { block: "font", mods: { body: "16B" } } },

                        { elem: "price-by-shift", tag: "span", content: "от " + ctx.price_by_shift + " руб/смена", mix: { block: "font", mods: { body: "16B" } } }
                    ]
                }
            ]
        },
        {
            elem: "bottom",
            content: [
                {
                    elem: "mass",
                    content: [
                        { elem: "mass-title", content: "Масса", tag: "span", mix: { block: "font", mods: { body: "14M" } } },
                        { elem: "mass-value", content: ctx.mass + " кг", tag: "span", mix: { block: "font", mods: { body: "14R" } } }
                    ]
                },
                {
                    elem: "power",
                    content: [
                        { elem: "power-title", content: "Мощность", tag: "span", mix: { block: "font", mods: { body: "14M" } } },
                        { elem: "power-value", content: ctx.power + " кг", tag: "span", mix: { block: "font", mods: { body: "14R" } } }
                    ]
                },
                {
                    elem: "capacity",
                    content: [
                        { elem: "capacity-title", content: "Грузоподъемность", tag: "span", mix: { block: "font", mods: { body: "14M" } } },
                        { elem: "capacity-value", content: ctx.capacity + " кг", tag: "span", mix: { block: "font", mods: { body: "14R" } } }
                    ]
                }
            ]
        },
        { elem: "button", content: [{ block: "link", attrs: { href: ctx.link }, content: [{ block: "button", mods: { theme: "stroke", size: "m", width: "available" }, content: "Подробнее" }] }] }
    ];
});
