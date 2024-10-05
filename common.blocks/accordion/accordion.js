modules.define("accordion", ["i-bem-dom"], function (provide, bemDom) {
    provide(
        bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        let _this = this;
                        let _question = this.findChildElem("question");
                        let _answer = this.findChildElem("answer").domElem[0];

                        _question._domEvents().on("click", function () {
                            _this.toggleMod("visible");
                        });
                    }
                },
                visible: {
                    true: function () {
                        console.log(1);
                        let _answer = this.findChildElem("answer").domElem[0];
                        _answer.style.height = _answer.scrollHeight + "px";
                    },
                    "": function () {
                        console.log(2);
                        let _answer = this.findChildElem("answer").domElem[0];
                        _answer.style.height = "0px";
                    }
                }
            }
        })
    );
});
