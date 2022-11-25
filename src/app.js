import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";
const main = document.getElementById('content');

page(decorateContext);
page('/', showHome);
page('/home', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails); // :id ми влиза в ctx.params и мога после да го взема със заявка
page('/edit/:id', showEdit);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);

updateNav();
page.start();

function decorateContext(ctx, next) { // MiddleWare Pattern, получава ctx и му добавя функционалности
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if (user) {
        ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main);
}


