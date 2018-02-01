<template>
  <Card
    :source="source"
    :title="title">
    <div slot="demo"></div>
  </Card>
</template>

<script>
import Card from './Card';

function doSomething() {

}

export default {
  name: 'NAME',
  components: {
    Card,
  },
  data() {
    return {
      source: doSomething.toString(),
    };
  },
  methods: {
    handleChange() {

    },
  },
};
</script>
