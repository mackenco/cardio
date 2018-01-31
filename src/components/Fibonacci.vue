<template>
  <div>

    <v-card>
      <v-card-title primary-title>
        <h3>Fibonacci sequence to {{ times }} places</h3>
      </v-card-title>
      <v-card-text>
        <v-slider
          @click.stop="calculateFibonacci"
          v-model="times"
          thumb-label
          ticks
          label="2 - 40"
          step="1"
          min="2"
          max="40" />
        {{ string }}
      </v-card-text>
    </v-card>

    <Source :source="source"/>
  </div>
</template>

<script>
import Source from './Source';

function calculateFibonacci() {
  const out = [1, 1];

  for (let i = 2; i < this.times; i += 1) {
    const len = out.length;
    out.push(out[len - 1] + out[len - 2]);
  }

  this.string = out.join(', ');
}

export default {
  name: 'Fibonacci',
  components: {
    Source,
  },
  data() {
    return {
      times: 2,
      string: '1, 1',
      source: calculateFibonacci.toString(),
    };
  },
  methods: {
    calculateFibonacci,
  },
};
</script>
