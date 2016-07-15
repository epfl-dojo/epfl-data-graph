<template>
    <h3>GraphDemo</h3>
    <!--<pre>{{ response | json }}</pre>-->
    <pre>{{ memberOrigin | json }}</pre>
    <utable></utable>
    <hr />
    <textarea v-model="doctorantsCH" @keyup="refresh()"></textarea>
    <div id="chartDemo"></div>
</template>

<script>
    import utable from '../components/user-table.vue'

    export default {
        components:{
            utable: utable
        },
        data: function(){
            return { 
                doctorantsCH: "",
                memberOrigin: {},
                response: {}
            }
        },
        watch: {
            'memberOrigin': function(val, oldVal){
                drawChart(this.memberOrigin);
            }
        },
        asyncData: function (resolve, reject) {
            this.$http({url: 'https://raw.githubusercontent.com/ponsfrilus/epfl-data-extract/master/data_example/dataFormation.json', method: 'GET'})
            .then(function (response) {
                this.response = response;
                var data = {};
                var dataColumns = [];
                var columns = [['x'],],
                     allStudies = {};

                var statsPerStudyAndYear = {};

                response.data.forEach(function(yearObj) {
                    var year = yearObj.Year;
                   columns[0].push(year);
                   var YearData = [];
                   yearObj.Statistics.forEach(function(statObj){
                      if (statObj.stat === 'Etudiants'){
                        statObj.Studies.forEach(function(studiesObj){
                          var study = studiesObj.study;
                          allStudies[study] = 1;
                          studiesObj.Minorities.forEach(function(minorObj){
                            if(minorObj.minor === 'Total') {
                                statsPerStudyAndYear[study] = (statsPerStudyAndYear[study] || {});
                                statsPerStudyAndYear[study][year] = minorObj.data.Total;
                            }
                          })
                        })
                      }
                   })
                });

                var years = columns[0].slice(1);
                Object.keys(allStudies).forEach(function(study) {
                    var column = [study]
                    years.forEach(function(year){
                        if(statsPerStudyAndYear[study]) {
                            column.push(statsPerStudyAndYear[study][year]);
                        } else {
                            column.push(0);
                        }
                    });
                    columns.push(column);
                });



                data.memberOrigin = {
                    x: 'x',
                    columns:columns
                }

                resolve(data)
            });


            var u = { memberOrigin: {
                                        x: 'x',
                                        columns: [
                                            ['x', 'CH', 'EU', 'ASIA', 'AMER', 'AFR', 'OCÉ', 'Total'],
                                            ['Doctorants', Number(this.doctorantsCH), 67, 18, 8, 33, 1, 254],
                                            ['Total étudiants', 1570, 405, 105, 61, 166, 1, 2308],
                                            ['Diplome', 12,33,444,22,11,44,777]
                                        ],
                                        type: 'bar'
                    }};
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

