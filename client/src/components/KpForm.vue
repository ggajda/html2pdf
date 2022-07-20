<template>
  <form action>
    <table>
      <tr>
        <td>
          <label>Name:</label>
        </td>
        <td>
          <input type="text" />
        </td>
      </tr>
      <tr>
        <td>
          <label>Address:</label>
        </td>
        <td>
          <input type="text" />
        </td>
      </tr>
      <tr>
        <td>Sign:</td>
        <td>
          <img width="200" :src="img" />
        </td>
      </tr>
    </table>
  </form>
</template>

<script setup>
import { ref } from "vue";
const img = ref(window.localStorage.getItem("VueDrawingCanvas"));
</script>

<style scoped>
table {
  margin: auto;
}
td {
  padding: 5px;
}
</style>