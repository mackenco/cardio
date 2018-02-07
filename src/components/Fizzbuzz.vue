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
        step="1"
        min="1"
        max="50" />
      <v-layout
        row
        v-for="entry in entries">
        <v-flex xs12>
          <v-card
            dark
            tile
            flat
            color="error">
            <v-card-text>{{ entry }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </Card>
</template>

<script>
import Card from './Card';

function calculateFizzbuzz(n) {
  return (new Array(n)).fill('').map((el, index) => {
    const i = index + 1;
    let str = '';

    if (i % 3 === 0) { str += 'fizz'; }
    if (i % 5 === 0) { str += 'buzz'; }

    return str || i;
  });
}

export default {
  name: 'Fizzbuzz',
  components: {
    Card,
  },
  data() {
    return {
      entries: [],
      source: calculateFizzbuzz.toString(),
      times: 0,
      title: 'Fizz Buzz',
    };
  },
  methods: {
    handleChange() {
      this.entries = calculateFizzbuzz(this.times);
    },
  },
};
</script>
