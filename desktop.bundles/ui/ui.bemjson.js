module.exports = {
    block: "page",
    title: "Alliance UI",
    favicon: "/favicon.ico",
    head: [
        { elem: "meta", attrs: { name: "description", content: "" } },
        {
            elem: "meta",
            attrs: {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }
        },
        {
            tag: "link",
            attrs: {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }
        },
        {
            tag: "link",
            attrs: {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: "true"
            }
        },
        {
            tag: "link",
            attrs: {
                href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",
                rel: "stylesheet",
                content: ""
            }
        },
        {
            tag: "link",
            attrs: {
                href: "https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap",
                rel: "stylesheet",
                content: ""
            }
        },
        { elem: "css", url: "ui.min.css" }
    ],
    scripts: [{ elem: "js", url: "ui.min.js" }],
    content: [
        { block: "title", mods: { type: "h1_desktop" }, tag: "h1", content: "Заголовок десктоп h1" },
        { block: "title", mods: { type: "h1_mobile" }, tag: "h1", content: "Заголовок мобилка h1" },
        { block: "title", mods: { type: "h2" }, tag: "h2", content: "Заголовок h2" },
        { block: "title", mods: { type: "h3" }, tag: "h3", content: "Заголовок h3" },
        { block: "title", mods: { type: "h4" }, tag: "h4", content: "Заголовок h4" },
        { block: "title", mods: { type: "h5" }, tag: "h5", content: "Заголовок h5" },

        { tag: "hr" },

        { block: "font", mods: { body: "16B" }, tag: "p", content: "Текст 16 пикселей Bold" },
        { block: "font", mods: { body: "16R" }, tag: "p", content: "Текст 16 пикселей Regular" },
        { block: "font", mods: { body: "16I" }, tag: "p", content: "Текст 16 пикселей Italic" },
        { block: "font", mods: { body: "14M" }, tag: "p", content: "Текст 14 пикселей Medium" },
        { block: "font", mods: { body: "14R" }, tag: "p", content: "Текст 14 пикселей Regular" },
        { block: "font", mods: { text: "12SB" }, tag: "p", content: "Текст 12 пикселей Semi-Bold" },
        { block: "font", mods: { text: "12R" }, tag: "p", content: "Текст 12 пикселей Regular" },

        { tag: "hr" },

        { block: "button", mods: { theme: "primary", size: "l" }, content: "Кнопка" },
        { tag: "br" },
        { block: "button", mods: { theme: "secondary", size: "l" }, content: "Кнопка" },
        { tag: "br" },
        { block: "button", mods: { theme: "stroke", size: "l" }, content: "Кнопка" },
        { tag: "br" },
        { tag: "br" },
        { block: "button", mods: { theme: "primary", size: "m" }, content: "Кнопка" },
        { tag: "br" },
        { block: "button", mods: { theme: "secondary", size: "m" }, content: "Кнопка" },
        { tag: "br" },
        { block: "button", mods: { theme: "stroke", size: "m" }, content: "Кнопка" },
        { tag: "br" },
        { tag: "br" },
        { block: "button", mods: { theme: "primary", size: "s" }, content: "Кнопка" },
        { tag: "br" },
        { block: "button", mods: { theme: "secondary", size: "s" }, content: "Кнопка" },
        { tag: "br" },
        { block: "button", mods: { theme: "stroke", size: "s" }, content: "Кнопка" },
        { tag: "br" },
        {
            block: "button",
            mods: { theme: "secondary", size: "m" },
            content: ["Кнопка с иконкой", { tag: "img", attrs: { src: "../../icons/whatsapp-white.svg" } }]
        },

        { tag: "hr" },

        { block: "button", mix: { block: "arrow", mods: { theme: "primary", size: "m" } } },
        { tag: "br" },
        { block: "button", mix: { block: "arrow", mods: { theme: "secondary", size: "m" } } },
        { tag: "br" },
        { block: "button", mix: { block: "arrow", mods: { theme: "primary", size: "m", direction: "left" } } },
        { tag: "br" },
        { block: "button", mix: { block: "arrow", mods: { theme: "secondary", size: "m", direction: "left" } } },
        { tag: "br" },
        { block: "button", mix: { block: "arrow", mods: { theme: "primary", size: "l" } } },
        { tag: "br" },
        { block: "link", attrs: { href: "#" }, mix: { block: "arrow", mods: { theme: "primary", size: "m" } } },

        { tag: "hr" },

        {
            block: "breadcrumbs",
            content: [
                { block: "link", attrs: { href: "#" }, content: "Главная", mix: { block: "breadcrumb" } },
                { block: "link", attrs: { nohref: true }, content: "Аренда", mix: { block: "breadcrumb", mods: { theme: "active" } } }
            ]
        },

        { tag: "hr" },

        { block: "input-field", mods: { theme: "main" } },
        { tag: "br" },
        { block: "input-field", mods: { theme: "main", disabled: true } },

        { tag: "hr" },

        { block: "card-rent", title: "Фронтальные погрузчики в аренду", price: "от 8 000 руб.", image: "../../images/card-rent.jfif", link: "#" },

        { tag: "hr" },

        { block: "service", title: "Уборка и вывоз снега", price: "от 8000 руб.", link: "#" },

        { tag: "hr" },

        {
            block: "card-popular",
            js: true,
            image: "../../images/card-popular.jpg",
            quantity: "12",
            discounted: "true",
            title: "Самосвал КАМАЗ 6520",
            old_price: "10 000",
            current_price: "8 000",
            price_by_shift: "20 000",
            mass: "12 950",
            power: "400",
            capacity: "20",
            link: "#"
        },

        { tag: "hr" },

        {
            block: "news",
            image: "../../images/news.jpg",
            day: "08",
            month: "Апрель",
            link: "#",
            title: "МОСВЕКТОР: Работа без границ времени",
            text: "Lorem ipsum dolor sit amet consectetur. Varius sit nulla euismod mus integer at vivamus metus. Eros vulputate volutpat mi.",
            list: "Lorem ipsum dolor sit amet consectetur. Pellentesque velit viverra sem ac. Diam id auctor sollicitudin condimentum dui. Semper integer nec vitae nulla quis."
        },

        { tag: "hr" },

        {
            block: "usage",
            image: "../../images/excavator.svg",
            text: "Выполнить работы без рисков, проблем и больших трат. Мы избавляем Вас от необходимости думать о сервисном обслуживании, комплектации и т.д. – Вам остаётся только пользоваться"
        },

        { tag: "hr" },

        {
            block: "feedback",
            theme: "light",
            avatar: "../../images/avatar1.jpg",
            name: "Имя Фамилия",
            company: "Название компании",
            rating: "5",
            text: "Lorem ipsum dolor sit amet consectetur. Eu lectus sed leo consequat facilisis. Sed cras sapien etiam eu erat. In in amet posuere libero lorem lacus mauris a. Eget mattis volutpat dolor felis feugiat sem. Elit ac morbi vitae mi lectus morbi lectus. "
        },

        { tag: "hr" },

        { block: "advantage", icon: "../../icons/advantages/icon-advantages-1.svg", text: "Lorem ipsum dolor sit amet con" },

        { tag: "hr" },

        {
            block: "accordion",
            js: true,
            question: "What is the question?",
            answer: "Lorem ipsum dolor sit amet consectetur. Nulla faucibus nunc dictum mi nulla nunc faucibus tempor mi. Ipsum ullamcorper nunc ut ridiculus. Eget neque elementum risus donec congue a in ac. Tincidunt elementum aliquam turpis purus euismod tellus."
        },

        { tag: "hr" },

        { block: "banner" }
    ]
};
