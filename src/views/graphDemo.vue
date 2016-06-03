<template>
    <h3>GraphDemo</h3>
    <div id="chartDemo"></div>
</template>

<script>
export default {
  data: function(){
    return { 
        memberOrigin: {
                  x: 'x',
                  columns: [
                      ['x', 'CH', 'EU', 'ASIA', 'AMER', 'AFR', 'OCÉ', 'Total'],
                      ['Doctorants', 127, 67, 18, 8, 33, 1, 254],
                      ['Total étudiants', 1570, 405, 105, 61, 166, 1, 2308],
                      ['Diplome', 12,33,444,22,11,44,777]
                  ],
                  type: 'bar',
        }
    }
  },
  ready: function(){
      drawChart(this.memberOrigin);
  }
}

function drawChart(data){
  var chart = c3.generate({
                bindto: '#chartDemo',
                data: data,
                axis: {
                    x: {
                        type: 'category' // this needed to load string x value
                    }
                }
            });
}
</script>

