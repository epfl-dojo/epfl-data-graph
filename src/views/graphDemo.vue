<template>
    <h3>GraphDemo</h3>
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
                doctorantsCH: ""
            }
        },
        computed: {
            memberOrigin: function() {
                return {
                    x: 'x',
                    columns: [
                        ['x', 'CH', 'EU', 'ASIA', 'AMER', 'AFR', 'OCÉ', 'Total'],
                        ['Doctorants', Number(this.doctorantsCH), 67, 18, 8, 33, 1, 254],
                        ['Total étudiants', 1570, 405, 105, 61, 166, 1, 2308],
                        ['Diplome', 12,33,444,22,11,44,777]
                    ],
                    type: 'bar'
                }
            },
        },
        ready: function(){
            drawChart(this.memberOrigin);
        },
        methods: {
            refresh: function(){
                drawChart(this.memberOrigin);
            }      
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

