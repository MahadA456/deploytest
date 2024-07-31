import { createRouter, createWebHistory } from 'vue-router';
//import store from '../store';  // Import the store to access state
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import SignupPage from '../views/SignupPage.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import UserDashboard from '../views/UserDashboard.vue';  // Import UserDashboard

const routes = [
  {
    path: '/',
    redirect: '/login'  // Redirect root to the login page
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { requiresUnauth: true }  // Only accessible if not authenticated
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage,
    meta: { requiresUnauth: true }  // Only accessible if not authenticated
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    meta: { requiresAuth: true }  // Requires user to be authenticated
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminDashboard,
    meta: { requiresAuth: true }  // Requires user to be authenticated
  },
  {
    path: '/userdashboard',
    name: 'UserDashboard',
    component: UserDashboard,
    meta: { requiresAuth: true }  // Requires user to be authenticated
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guards to check authentication
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = store.getters.isAuthenticated;
//   const currentUser = store.getters.currentUser;

//   if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
//     next('/login');
//   } else if (to.matched.some(record => record.meta.requiresUnauth) && isAuthenticated) {
//     if (currentUser.isAdmin) {
//       next('/admin');
//     } else {
//       next('/userdashboard');  // Redirect to UserDashboard if logged in as user
//     }
//   } else {
//     next();
//   }
// });

export default router;