import { computed, defineComponent, h, provide } from 'vue'

export default defineComponent({
  name: 'XRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: 'start', // flex-start  flex-end flex-around
    },
  },
  setup(props, { slots }) {
    provide('XRow', props.gutter)

    const classs = computed(() => {
      return [
        'x-row',
        props.justify !== 'start' ? `is-justify-${props.justify}` : '',
      ]
    })

    const styles = computed(() => {
      let ret = {
        marginLeft: '',
        marginRight: '',
      }
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`
        ret.marginRight = `-${props.gutter / 2}px`
      }
      return ret
    })
    return () =>
      h(
        props.tag,
        {
          class: classs.value,
          style: styles.value,
        },
        slots.default?.()
      )
  },
})
