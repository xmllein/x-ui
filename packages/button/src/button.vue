<template>
  <button :class="classs" @click="handleClick">
    <i v-if="loading" class="x-icon-loading"></i>
    <i v-if="!loading && icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
type IButtonType =
  | 'primary'
  | 'warning'
  | 'danger'
  | 'default'
  | 'info'
  | 'success'
export default defineComponent({
  name: 'XButton',
  props: {
    type: {
      type: String as PropType<IButtonType>,
      default: 'primary',
      vaildator: (val: string) => {
        return [
          'primary',
          'warning',
          'danger',
          'default',
          'info',
          'success',
        ].includes(val)
      },
    },
    icon: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean,
  },
  emits: ['click'],
  // 在这里加了emits之后不再把外界的事件绑定到子组件的最外层元素。如果不加，将绑定里外两个事件。
  // 加了emits之后，只绑定里面的事件，触发里面的事件后，在通过ctx.emit的方式手动触发外面的事件。
  setup(props, ctx) {
    const classs = computed(() => [
      'x-button',
      'x-button--' + props.type,
      {
        'is-disabled': props.disabled,
        'is-loading': props.loading,
        'is-round': props.round,
      },
    ])
    const handleClick = (e: any) => {
      console.log('inner')
      ctx.emit('click', e)
    }
    return {
      classs,
      icon: props.icon,
      handleClick,
    }
  },
})
</script>
