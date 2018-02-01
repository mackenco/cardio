<template>
  <div>

    <v-card>
      <v-card-title primary-title>
        <h3>{{ title }} </h3>
      </v-card-title>
      <v-card-text>
        <slot name="demo" />
      </v-card-text>
    </v-card>

    <v-card class="mt-4">
      <v-card-title primary-title>
        <h3>Source</h3>
      </v-card-title>
      <v-card-text v-highlightjs="source">
        <code class="javascript" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Source',
  props: {
    source: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Title',
    },
  },
};
</script>

<style>
code {
  font-size: 1rem;
}
</style>
