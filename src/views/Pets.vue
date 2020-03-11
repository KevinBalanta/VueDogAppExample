<template>
  <v-container grid-list-md fluid>
      <v-row>
          <v-col>
              <v-card>
                  <v-img src="https://goo.gl/6CQNDo">
                        
                      </v-img>
                  <v-card-title>
                      <div>
                          <h3>
                              Looking for a dog!
                          </h3>
                      </div>

                  </v-card-title>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { Dogs } from '../config/dog';
export default {
data(){
    return {
        dogs: Dogs
    }
}
}
</script>

<style>

</style>