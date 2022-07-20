<template>
  <vue-drawing-canvas
    ref="VueCanvasDrawing"
    lineJoin="bevel"
    :styles="{
            border: 'solid 1px #000',
          }"
  />
  <br />

  <button @click="reset">Reset</button>
</template>

<script setup>
import { defineExpose, ref } from "vue";
import VueDrawingCanvas from "vue-drawing-canvas";

const VueCanvasDrawing = ref(null);

const reset = () => {
  VueCanvasDrawing.value.reset();
};

const sav = () => {
  window.localStorage.setItem(
    "VueDrawingCanvas",
    VueCanvasDrawing.value.save()
  );
};

defineExpose({
  sav,
});
</script>

<style scoped>
vue-drawing-canvas {
  border: 1px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
