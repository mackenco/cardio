<template>
  <Card
    :source="source"
    :title="title">
    <div slot="demo">
      <v-slider
        @click.stop="handleChange"
        v-model="times"
        thumb-label
        ticks
        label="2 - 40"
        step="1"
        min="2"
        max="40" />
      {{ string }}
    </div>
  </Card>
</template>

<script>
import Card from './Card';

function calculateFibonacci(times) {
  const out = [1, 1];

  for (let i = 2; i < times; i += 1) {
    const len = out.length;
    out.push(out[len - 1] + out[len - 2]);
  }

  return out.join(', ');
}

export default {
  name: 'Fibonacci',
  components: {
    Card,
  },
  data() {
    return {
      times: 2,
      string: '1, 1',
      source: calculateFibonacci.toString(),
      title: 'Fibonacci sequence to 2 places',
    };
  },
  methods: {
    handleChange() {
      this.string = calculateFibonacci(this.times);
      this.title = `Fibonacci sequence to ${this.times} places`;
    },
  },
};
</script>
