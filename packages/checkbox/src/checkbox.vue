<template>
  <div class="x-checkbox">
    <span class="x-checkbox__input">
      <input
        type="checkbox"
        v-model="model"
        :checked="isChecked"
        @change="handleChange"
        :name="name"
        :disabled="disabled"
        :indeterminate="indeterminate"
        :value="label"
      />
      <!-- vue中checkbox 可以绑定数组，如果绑定数组，会判断value是否在数组中 -->
    </span>
    <span class="x-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCheckbox } from './useCheckbox'

export default defineComponent({
  name: 'XCheckbox',
  props: {
    disabled: Boolean,
    name: String,
    indeterminate: Boolean,
    checked: Boolean,
    label: [String, Number, Boolean],
    modelValue: [String, Number, Boolean],
  },
  emits: ['update:modelValue', 'change'],
  setup(props) {
    return useCheckbox(props)
  },
})
</script>
