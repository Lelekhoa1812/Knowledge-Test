
Vue.component('app-readmysql', {
  // define the template for the component
  template: `
  <v-row>

    <v-col cols="12" md="12 " >

    <v-card
       class="mx-auto"
       max-width="90%"
       >

       <v-card-title>
       <h2>Contribute Your Formula Database</h2>
       </v-card-title>

       <v-card-text>
       	<div class= "table-responsive">
                  <table class="table table-striped table-hover">
                      <thead>
                          <tr>
                              <th scope="col" id="subjectgrade">Subject Grade</th>
                              <th scope="col" id="description">Description</th>
                              <th scope="col" id="username">Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="formula in getItems"  >
                              <td scope="row" headers="subjectgrade">{{formula.subjectgrade}}</td>
                              <td scope="row" headers="description">{{formula.description}}</td>
                              <td scope="row" headers="username">{{formula.username}}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
        </v-card-text>
        </v-card>
        </v-col>

       <v-col cols="12" md="12">
       <paginate
     :page-count=getPageCount
     :page-range="4"
     :margin-pages="1"
     :click-handler="clickCallback"
     :prev-text=" 'Prev' "
     :next-text="'Next'"
     :container-class="'pagination'"
     :page-class="'page-item'"
	 :active-class="'currentPage'">
     </paginate>
     </v-col>
     </v-row>
   `,
   // variable initialization
  data: function() {
    return {
      perPage:5,
      currentPage:1,
      formulas: []
    }
  },
  computed:{
    // returns the data according to the page number
    getItems: function() {
        let current = this.currentPage * this.perPage;
        let start = current - this.perPage;
        return this.formulas.slice(start, current);
     },
     //returns total number of pages required according to the total rows of data
     getPageCount: function() {
      return Math.ceil(this.formulas.length / this.perPage);
     }
  },
  methods:{
    //sets the clicked page
      clickCallback: function(pageNum){
        this.currentPage = Number(pageNum);
      }
    },
  created() {
    var self = this
    var readSQLApiURL = 'resources/apis.php/' //define url for api

    // GET request using fetch with error handling

	        fetch(readSQLApiURL )
			.then( response =>{
			  //turning the response into the usable data
			  return response.json( );
			})
			.then( data =>{
			  //This is the data you wanted to get from url
			  self.formulas=data;
			})
			.catch(error => {
			  self.errorMessage = error;
			});
	  
  }
})
// create pagination component
Vue.component('paginate', VuejsPaginate)
