<template>
  <div id="pdf">
    <div v-if="show">
      <KpForm />
    </div>
    <div v-else>
      <SignCanvas ref="signCanvas" />
    </div>
  </div>
  <button @click="sng">{{ bname }}</button>
</template>

<script setup>
import { ref } from "vue";
import KpForm from "./KpForm.vue";
import SignCanvas from "./SignCanvas.vue";

const show = ref(true);
const bname = ref("Sign");
const signCanvas = ref();

const sng = () => {
  show.value = !show.value;

  if (show.value) {
    bname.value = "Sign";
    signCanvas.value.sav();
  } else {
    bname.value = "Close";
  }
};
</script>