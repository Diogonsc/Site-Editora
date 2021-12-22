<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn no-caps :color="color" :style="style" :label="label"></q-btn>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    color: String,
    style: String,
  },
};
</script>
<style lang="scss" scoped>
</style>
