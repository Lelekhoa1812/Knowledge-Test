const Login = {
  // defining variables to be used in the component
  data() {
    return {
      msg:'',
      input: {
        username: "",
        password: ""
      },
      valid: true,
      // defining username rules for validation
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length >= 3) || 'Username must be more than 3 characters.',
      ],
      // defining username rules for validation
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters with a special character.',
      ],
    }
  },
  methods: {
    validation() {
      // Get existing user data from localStorage
      let users = JSON.parse(localStorage.getItem('users')) || [];
      // Check if user credentials match any stored user data
      const match = users.some(user => user.username === this.input.username && user.password === this.input.password);
      if (match) {
        this.$emit("authenticated", true); // Emit authentication event
        this.$router.replace({ name: "dashboard" }); // Redirect to dashboard
      } else {
        this.msg = "Username or password incorrect.";
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  // define the template for the component
  template: `
    <v-row>
      <v-col class="center" cols="12" md="6">
        <v-card class="mx-auto" max-width="90%">
          <v-card-title>
            <h2> User Login</h2>
            <p class="remind-message">Verify your account to use this feature.</p>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="input.username" :counter="10" :rules="usernameRules" label="Username" required></v-text-field>
              <v-text-field v-model="input.password" label="Password" type="password" :rules="passwordRules" required></v-text-field>
              <v-btn :disabled="!valid" color="success" class="mr-4" @click="validation()">Login</v-btn>
              <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
            </v-form>
            <p>{{msg}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  `
};