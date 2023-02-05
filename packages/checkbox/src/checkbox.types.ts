import { ComputedRef } from '@vue/reactivity'

export interface ICheckboxProps {
  indeterminate?: boolean
  checked?: boolean
  name?: string
  disabled?: boolean
  label?: string | boolean | number // group 使用
  modelValue?: string | boolean | number // 绑定v-model的值，v-model可以传多个值。。
}

export interface ICheckboxGroupProvide {
  modelValue?: ComputedRef
  changeEvent?: (val: unknown) => void
  name?: string // 表明是CheckBoxGroup传的
}
