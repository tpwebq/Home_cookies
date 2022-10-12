import Basket from "./views/basket";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Cookies from "./views/cookies";
import Error from "./views/error";
import Index from "./views/index";
import Privacy from "./views/privacy";

const ROUTES = [
    {navbarItem:true, name:"Home", path: "/",component:<Index/>},
    {navbarItem:true, name:"Cookies", path: "/cookies",component:<Cookies/>},
    {navbarItem:true, name:"Contact", path: "/contact",component:<Contact/>},
    {navbarItem:true, name:"Basket", path: "/basket",component:<Basket/>},
    {navbarItem:false, name:"Comingsoon", path: "/comingsoon",component:<Comingsoon/>},
    {navbarItem:false, name:"Privacy", path: "/privacy",component:<Privacy/>},
    {navbarItem:false, path:"*",component:<Error/>}
];

export {
    ROUTES
};