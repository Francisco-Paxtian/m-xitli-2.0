import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AboutUs from '../components/AboutUs.vue'
import Catalogue from '../components/Catalogue.vue'
import Search from '../components/Search.vue'
import ProcessSearch from '../components/ProcessSearch.vue'
import Product from '../components/Product.vue'
import LogIn from '../components/LogIn.vue'
import SingUp from '../components/SingUp.vue'
import ProcessClose from '../components/ProcessClose.vue'
import SettingsUser from '../components/SettingsUser.vue'
import Test from '../components/Test.vue'
import Redirect from '../components/Redirect.vue'
import Cart from '../components/Cart.vue'
import Dashbore from '../components/server/Dashbore.vue'
import Users from '../components/server/Users.vue'

const routes = [

    { path: '/', name: 'Home', component: Home },
    { path: '/sobre-nosotros', name: 'AboutUs', component: AboutUs },
    { path: '/catalago-productos', name: 'Catalogue', component: Catalogue },
    { path: '/buscando-productos/:search', name: 'Search', component: Search },
    { path: '/proceso-busqueda/:search', name: 'ProcessSearch', component: ProcessSearch },
    { path: '/detalle-producto/:id', name: 'Product', component: Product },
    { path: '/iniciar-sesion/', name: 'LogIn', component: LogIn },
    { path: '/registro-usuario/', name: 'SingUp', component: SingUp },
    { path: '/cerrando-sesion/', name: 'ProcessClose', component: ProcessClose },
    { path: '/configuracion-usuario/', name: 'SettingsUser', component: SettingsUser },
    { path: '/test/', name: 'Test', component: Test },
    { path: '/redirect/', name: 'Redirect', component: Redirect },
    { path: '/carrito-compras/', name: 'Cart', component: Cart },
    { path: '/panel-control/', name: 'Dashbore', component: Dashbore },
    { path: '/administracion-usuarios/', name: 'Users', component: Users },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router