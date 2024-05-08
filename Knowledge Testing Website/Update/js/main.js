// Creating the VueRouter
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login,
      name:"login"
    },
    {
    path: '/logout',
    name:"logout"
  },
  {
  path: '/dashboard',
  component: Dashboard,
    name:  'dashboard'
  }
  ]
})

Vue.component('app-nav', {

  template: `
<div>
    <v-spacer></v-spacer>
    <v-btn>
        <router-link  to="/login" v-on:click.native="logout()" replace>Logout<v-icon>mdi-logout</v-icon></router-link>
    </v-btn>
    </div>
  `,
    methods: {
      logout() {
          this.$root.logout();
      }
    }
});


//create new vue instance and indicate the id for vue app
new Vue({
  router,
  el: '#app',

  data: {
    authenticated: false,
    authenticatedUser: '',
    error:false,
    errorMsg:'',
  },
  mounted() {
        if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
                console.log("status"+status);

            },
            setAuthenticatedUser(username){
              this.authenticatedUser = username;
              console.log("username"+username);
            },
            getAuthenticated() {
                return this.authenticated;
            },
            logout(){
              this.authenticated=false;
            }
        },
  vuetify: new Vuetify()
});
