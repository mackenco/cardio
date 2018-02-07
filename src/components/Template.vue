<template>
  <Card
    :source="source"
    :title="title">
    <div slot="demo">
      {{ string }}
    </div>
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
      string: '',
      source: doSomething.toString(),
      title: 'A title',
    };
  },
  methods: {
    handleChange() {

    },
  },
};
</script>
