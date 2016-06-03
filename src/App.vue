<template>
  <div id="app">
    <epfl-header></epfl-header>
    <h2>{{ msg }}</h2>
    <div id="chart"></div>
    <pre>{{ studFac | json }}</pre>
    <router-view></router-view>
  </div>
</template>

<script>
import epflheader from "./templates/header.vue"
export default {
  components: {
    'epfl-header': epflheader
  },
  computed:{
    studFac: function(){
      return this.dataOrigin.map(function(year){
        return year.Statistics.map(function(stat){
          return stat.Studies.map(function(study){
            return study.Minorities.map(function(minor){
              return minor.data;
            })
          })
        })
      }).reduce(function(a, b) { return a.concat(b); })
    },
    memberOrigin: function(){
      
      
      return {
                  x: 'x',
                  columns: [
                      ['x', 'CH', 'EU', 'ASIA', 'AMER', 'AFR', 'OCÉ', 'Total'],
                      ['Doctorants', 127, 67, 18, 8, 33, 1, 254],
                      ['Total étudiants', 1570, 405, 105, 61, 166, 1, 2308],
                      ['Diplome', 12,33,444,22,11,44,777]
                  ],
                  type: 'bar',
                  /*groups: [
                      ['Doctorants', 'Total étudiants', 'Diplome']
                  ],*/
              };
    }
  },
  created: function() {
    console.log("created");
     this.$http({url: 'https://raw.githubusercontent.com/ponsfrilus/epfl-data-extract/master/data_example/dataFormation.json', method: 'GET'}).then(function (response) {
          // success callback
          drawChart(this.memberOrigin);
   
          this.dataOrigin = response.data;
      }, function (response) {
          // error callback
          console.log("error ici");
      });
      
  },
  data () {
    return {
      msg: 'EPFL Graph!',
      dataOrigin: []
    }
  }
}

function drawChart(data){
  var chart = c3.generate({
              data: data,
              axis: {
                  x: {
                      type: 'category' // this needed to load string x value
                  }
              }
          });
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
