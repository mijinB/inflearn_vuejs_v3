<template>
  <canvas ref="lineChart"></canvas>
</template>

<script>
export default {
    mounted() {
        new this.$_Chart(this.$refs.lineChart.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45],
                }]
            }
        })
    }
}
</script>