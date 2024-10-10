modules.define("header", ["i-bem-dom", "contacts"], function (provide, bemDom, Contacts) {
    provide(
        bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        let _this = this;
                        let contacts = this.findChildElem("contacts").domElem;
                        let contactsBlock = this.findChildBlock(Contacts);
                        let networks = this.findChildElem("networks").domElem;
                        let button = this.findChildElem("button-main").domElem;
                        let menu = this.findChildElem("menu");
                        let top = this.findChildElem("top").domElem;
                        let containerTop = this.findChildElem("container-top").domElem;
                        let containerMenu = this.findChildElem("container-menu").domElem;
                        let burger = this.findChildElem("burger");

                        let width = window.innerWidth;
                        update(width, networks, button, menu, contacts, contactsBlock, top, containerTop, containerMenu, burger);

                        window.addEventListener("resize", function () {
                            width = window.innerWidth;

                            update(width, networks, button, menu, contacts, contactsBlock, top, containerTop, containerMenu, burger);
                        });

                        burger.domElem.on("click", function () {
                            menu.toggleMod("hidden");
                            burger.toggleMod("pressed");
                        });
                    }
                }
            }
        })
    );

    function update(width, networks, button, menu, contacts, contactsBlock, top, containerTop, containerMenu, burger) {
        if (width < 934) {
            menu.setMod("hidden");
            contactsBlock.setMod("direction", "vertical");
            contactsBlock.setMod("theme", "light");
            bemDom.append(containerMenu, contacts);
            bemDom.before(burger.domElem, button);
            bemDom.before(button, networks);
            if (width < 630) {
                bemDom.prepend(containerMenu, button);
            }
        } else {
            menu.delMod("hidden");
            contactsBlock.delMod("direction");
            contactsBlock.delMod("theme", "light");
            contactsBlock.setMod("theme", "dark");
            bemDom.append(containerTop, contacts);
            bemDom.append(containerMenu, button);
            bemDom.before(button, networks);
        }
    }
});
