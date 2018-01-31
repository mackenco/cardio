<template>
  <v-card class="mt-4">
    <v-card-title primary-title>
      <h3>Source</h3>
    </v-card-title>
    <v-card-text v-highlightjs="source">
      <code class="javascript" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Source',
  props: {
    source: {
      type: String,
      default: '',
    },
  },
};
</script>
