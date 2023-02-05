import { computed, defineComponent, h, inject } from 'vue'

export default defineComponent({
  name: 'XCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    const gutter = inject('XRow', 0)

    const classs = computed(() => {
      const pos = ['span', 'offset'] as const
      const ret: Array<string> = []
      pos.forEach((item) => {
        const size = props[item]
        if (typeof size === 'number' && size > 0) {
          ret.push(`x-col-${item}-${size}`)
        }
      })
      return ['x-col', ...ret]
    })

    const styles = computed(() => {
      if (gutter !== 0) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px',
        }
      } else {
        return {}
      }
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
