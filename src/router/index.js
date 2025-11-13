import { createMemoryHistory, createRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ChannelListView from '../views/ChannelListView.vue';
import ChannelDetailView from '../views/ChannelDetailView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/channels', component: ChannelListView },
    { path: '/channels/:id', component: ChannelDetailView }
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
    linkActiveClass: 'bg-primary text-primary-content',
});