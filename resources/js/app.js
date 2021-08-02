/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue").default;
import Vuetify from "vuetify";
import es from "vuetify/es5/locale/es";
Vue.use(Vuetify);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
Vue.component(
    "unit-component",
    require("./components/unit/UnitComponent.vue").default
);
Vue.component(
    "loged-component",
    require("./components/menu/LogedComponent.vue").default
);
Vue.component(
    "menu-component",
    require("./components/menu/MenuComponent.vue").default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: "#CDDC39",
                    secondary: "#b0bec5",
                    anchor: "#8c9eff"
                },
                dark: {
                    primary: "#CDDC39",
                    secondary: "#b0bec5",
                    anchor: "#8c9eff"
                }
            }
        },
        lang: {
            locales: {
                es
            },
            current: "es"
        }
    })
});
