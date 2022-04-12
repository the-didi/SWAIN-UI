<template>
  <span> </span>
  <button
    
    class="mdc-button"
    :class="[
      {
        'mdc-button--raised': fill,
        'mdc-button--outlined': plain,
      },
      `swain-button-${type}`
    ]"
    :style="`background-color:${type=='warning'?'#B00020':type=='default'?'#909399':'#6200ee'}`"
    @click="handleSwainButtonClick"
    :disabled="disabled"
  >
    <span class="mdc-button__ripple"></span>
    <i
      class="material-icons mdc-button__icon"
      aria-hidden="true"
      v-if="icon != null"
      >{{ icon }}</i
    >
    <span class="mdc-button__label">
      <span v-if="$slots.default"><slot></slot></span>
    </span>
  </button>

</template>
<script>
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "swainButton",
  props: {
    type: {
      type: String,
      default: "",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props, context) {
    const handleSwainButtonClick = (e) => {
      context.emit("click", e);
    };
    onMounted(()=>{
      console.log(props.type)
    })
    return {
      handleSwainButtonClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.swain-button-warning{
    background-color: orange;
}
.swain-button-default{
    color: red;
}
.swain-button-circle{
    border-radius: 50%;
}
</style>
<style>
@import url("https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css");
@import url("https://fonts.googleapis.com/css2?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Material+Icons+Outlined");
@import url("https://fonts.googleapis.com/css2?family=Material+Icons+Round");
@import url("https://fonts.googleapis.com/css2?family=Material+Icons+Sharp");
@import url("https://fonts.googleapis.com/css2?family=Material+Icons+Two+Tone");
</style>
