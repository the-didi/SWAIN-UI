<template>
  <button
    class="swain-button"
    :class="[
      `swain-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    @click="handleSwainButtonClick"
    :disabled="disabled"
  >
    <i></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "swainButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
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
  },
  emits: ["click"],
  setup(props, context) {
    const handleSwainButtonClick = (e) => {
        context.emit('click',e)
    };
    return {
      handleSwainButtonClick,
    };
  },
});
</script>
