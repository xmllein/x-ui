import {
  computed,
  getCurrentInstance,
  inject,
  WritableComputedRef,
  ComponentInternalInstance,
} from 'vue'
import { ICheckboxGroupProvide, ICheckboxProps } from './checkbox.types'

const useCheckboxGroup = () => {
  const chenkboxGroup = inject<ICheckboxGroupProvide>('XChenkboxGroup', {})
  const isGroup = chenkboxGroup.name === 'XChenkboxGroup'
  return {
    isGroup,
    chenkboxGroup,
  }
}

const useModel = (props: ICheckboxProps) => {
  const { proxy } = getCurrentInstance() as ComponentInternalInstance
  // 只有checkbox 有modelValue
  const { isGroup, chenkboxGroup } = useCheckboxGroup()

  const store = computed(() => {
    return chenkboxGroup ? chenkboxGroup.modelValue?.value : props.modelValue
  })

  const model = computed({
    get() {
      // 如果是group， 把group的数组给checkbox
      // vue中checkbox 可以绑定数组，如果绑定数组，会判断value是否在数组中
      return isGroup ? store.value : props.modelValue
    },
    set(val) {
      if (isGroup) {
        // 触发group的方法，不触发自己的
        return chenkboxGroup.changeEvent?.(val)
      }
      proxy?.$emit('update:modelValue', val)
    },
  })
  return model
}

const useCheckboxStatus = (
  props: ICheckboxProps,
  model: WritableComputedRef<unknown>
) => {
  const isChecked = computed(() => {
    const value = model.value
    if (Array.isArray(value)) {
      return value.includes(props.label)
    } else {
      return value
    }
  })
  return isChecked
}

const useEvent = () => {
  const { proxy } = getCurrentInstance() as ComponentInternalInstance

  return (e: InputEvent) => {
    const target = e.target as HTMLInputElement
    const value = target.checked ? true : false
    proxy?.$emit('change', value)
  }
}
export const useCheckbox = (props: ICheckboxProps) => {
  let model = useModel(props)
  let isChecked = useCheckboxStatus(props, model)
  let handleChange = useEvent()
  return {
    model,
    isChecked,
    handleChange,
  }
}
