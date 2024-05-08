const Dashboard = {
  // defining data to be used in the component
  data: function() {
    return {
      tab: null,
      items: [
        'View', 'Insert', 'Update', 'Delete',
      ]
    }

  },

  // define the template for the component
  template: `
  <div id="dashboard">

  <v-card>
     <v-card-title class="text-center justify-center py-6">
       <h1 class="font-weight-bold display-3 basil--text">
         Dashboard
       </h1>
     </v-card-title>
     <v-card-text>
     <v-tabs
       v-model="tab"
       background-color="transparent"
       color="basil"
       grow
     >
       <v-tab
         v-for="item in items"
         :key="item"
       >
         {{ item }}
       </v-tab>
     </v-tabs>

     <v-tabs-items v-model="tab">
       <v-tab-item
         v-for="item in items"
         :key="item"
       >
         <v-card
           flat
         >
          <app-readmysql v-if="item=='View'"></app-readmysql>

          <!-- Show insert  -->
        		<app-postdata v-if="item=='Insert'"></app-postdata>

            <app-putdata v-if="item=='Update'"></app-putdata>

            <app-deldata v-if="item=='Delete'"></app-deldata>

         </v-card>
       </v-tab-item>
     </v-tabs-items>

     </v-card-text>
   </v-card>

    </div>
    `
}
