<script>
import RequestsDashboard from '@/components/requests/RequestsDashboard.vue';

export default {
 components: {
    RequestsDashboard
 },
 props: {
   request: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
}
 };

</script>

<template>

<RequestsDashboard />

</template>

<style lang="scss">

</style>