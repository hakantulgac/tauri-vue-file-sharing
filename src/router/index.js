import { createMemoryHistory, createRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SettingView from '../views/SettingView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/settings', component: SettingView }
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
    linkActiveClass: 'bg-gray-700'
});