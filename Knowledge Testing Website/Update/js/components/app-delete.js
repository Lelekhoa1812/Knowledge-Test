// Delete API
Vue.component('app-deldata', {
    template: `
        <v-row>
            <v-col cols="12" md="6">
                <v-card class="mx-auto" max-width="90%">
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Subject Grade" v-model="subjectgrade3" />
                            <v-text-field label="Username" v-model="username3" />
                            <v-btn depressed @click="delData(subjectgrade3, username3)" color="primary">Delete</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- Output -->
            <v-col cols="12" md="6">
                <v-card class="mx-auto" max-width="90%">
                    <v-card-text>
                        <!-- Output -->
                        <p>Output Message: {{ msg }}</p>
                        <p>Status Knowledge: {{ statusVal }}</p>
                        <p>Status: {{ statusText }}</p>
                        <p>Response Headers: {{ headers }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    `,
    // Variable initialization
    data: function () {
        return {
            subjectgrade3: '',
            username3: '',
            msg: '',
            statusVal: '',
            statusText: '',
            headers: '',
        };
    },

    methods: {
        delData: function (subjectgrade, username) {
            var delSQLApiURL = 'resources/apis.php/subjectgrade/' + subjectgrade + '/username/' + username;

            var self = this;
            // DELETE request using fetch with error handling
            const requestOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            fetch(delSQLApiURL, requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    // If the response is OK, return the data
                    return response.json();
                })
                .then(data => {
                    self.msg = "Data deleted successfully";
                })
                .catch(error => {
                    self.msg = 'There was an error!';
                    self.statusText = error;
                });
        }
    }
});
