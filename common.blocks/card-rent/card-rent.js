modules.define("card-rent", ["i-bem-dom"], function (provide, bemDom) {
    provide(
        bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function () {}
                }
            }
        })
    );
});
