<template>
  <div class="x-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue'

export default defineComponent({
  name: 'XCheckboxGroup',
  props: {
    modelValue: Array,
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const modelValue = computed(() => props.modelValue)
    const changeEvent = (value: unknown) => {
      emit('change', value)
      emit('update:modelValue', value)
    }
    provide('XChenkboxGroup', {
      name: 'XChenkboxGroup',
      modelValue,
      changeEvent,
    })
  },
})
</script>
