<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn no-caps :color="color" :text-color="text" :style="style" :label="label" :icon-right="icon" ></q-btn>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    color: String,
    text: String,
    style: String,
    icon: String,
  },
};
</script>
<style lang="scss" scoped></style>
