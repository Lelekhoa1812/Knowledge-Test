Vue.component('app-postdata', {
  template: `
  <v-row>
    <v-col cols="12" md="6 " >

    <v-card
       class="mx-auto"
       max-width="90%"
       >

       <v-card-text>
   	<v-form>
        	<v-text-field label="Subject Grade" v-model="subjectgrade1" /></v-text-field>
          <v-text-field label="Description" v-model="description1" /></v-text-field>
          <v-text-field label="Username" v-model="username1" /></v-text-field>
          <p>You can set any username or post anonymously.<p>


        

        <v-btn
        depressed
        v-on:click="postData(subjectgrade1, description1, username1)"
        color="primary">
        Add
      </v-btn>

   	</v-form>
    </v-card-text>

    </v-card>

    </v-col >
      <!-- Output -->
        <v-col cols="12"
            md="6">
    <v-card
       class="mx-auto"
       max-width="90%"
       >
       <v-card-text>
        <p>Output Message : {{ msg }}</p>
   			<p>Status Subject Grade: {{statusVal}}</p>
   			<p>Status: {{statusText}}</p>
   			<p>Response Headers: {{headers}}</p>
   	</v-card-text>
</v-card>
</v-col>
</v-row>

   `,
  data: function() {
    return {
      subjectgrade1: '',
      msg: '',
      description1: '',
      username1: '',
      statusVal: '',
      statusText: '',
      headers: '',
      savingSuccessful: false
    }
  },
  methods: {

    postData: function(subjectgrade, description, username) {
      //define url for api
      var postSQLApiURL = 'resources/apis.php/'

      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subjectgrade: subjectgrade,
          description: description, 
	        username: username
        })
      };

       
		
		fetch(postSQLApiURL, requestOptions)
		.then( response =>{
		  //turning the response into the usable data
		  return response.json( );
		})
		.then( data =>{
		  //This is the data you wanted to get from url
		   self.msg = "Data Inserted Successfully."  ;
		})
		.catch(error => {
		   self.msg = 'There was an error!' + error;
		});	
	
		
		
    }

  }
});
