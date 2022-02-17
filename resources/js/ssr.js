import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';
import { createInertiaApp } from '@inertiajs/inertia-vue';
import createServer from '@inertiajs/server';

createServer(page => createInertiaApp({
    page,
    render: createRenderer().renderToString,
    resolve: name => require(`./Pages/${name}`),
    setup({ App, props, plugin }) {
        Vue.use(plugin);

        return new Vue({
            render: h => h(App, props),
        });
    }
}));