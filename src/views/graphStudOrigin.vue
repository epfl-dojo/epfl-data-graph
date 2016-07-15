<template>
    <h3>GraphStudOrigin</h3>
</template>

<script>

export default {
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
      return {};
    }
  },
  ready: function() {
      this.$http({url: 'https://raw.githubusercontent.com/ponsfrilus/epfl-data-extract/master/data_example/dataFormation.json', method: 'GET'}).then(function (response) {
           // success callback
           drawChart(this.memberOrigin);
   
           this.dataOrigin = response.data;
       }, function (response) {
           // error callback
           console.log("error ici");
       });
  }
}

function drawChart(data){
  var chart = c3.generate({
                bindto: '#chart',
                data: data,
                axis: {
                    x: {
                        type: 'category' // this needed to load string x value
                    }
                }
            });
}
</script>
