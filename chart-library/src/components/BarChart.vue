<template>
  <canvas ref="barChart"></canvas>
</template>

<script>
export default {
	props: ['propsdata'],
    mounted() {
		new this.$_Chart(this.$refs.barChart, {
			type: 'bar',
			data: {
				labels: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
				datasets: this.propsdata
			}
		})
	}
}
</script>