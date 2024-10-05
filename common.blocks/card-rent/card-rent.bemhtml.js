/* block("card-rent").content()(function () {
    return this.ctx.items.map(function (item) {
        return [
            { elem: "background", tag: "img", attrs: { src: item.image } },
            { elem: "overlay", tag: "a", attrs: { href: item.link }, content: "Смотреть" },
            {
                elem: "description",
                content: [
                    { elem: "title", content: item.title },
                    { elem: "price", content: item.price }
                ]
            }
        ];
    });
}); */

block("card-rent").content()(function (node, ctx) {
    return [
        { elem: "background", tag: "img", attrs: { src: ctx.image } },
        { elem: "overlay", tag: "a", attrs: { href: ctx.link }, content: "Смотреть" },
        {
            elem: "description",
            content: [
                { elem: "title", tag: "a", attrs: { href: ctx.link }, content: ctx.title },
                { elem: "price", tag: "a", attrs: { href: ctx.link }, content: ctx.price }
            ]
        }
    ];
});
