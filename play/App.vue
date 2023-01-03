<template>
  <div>x-ui 测试</div>
  <h2>按钮(x-button)</h2>
  <x-button
    type="success"
    disabled
    round
    icon="x-icon-search"
    @click="buttonClick"
    >搜索</x-button
  >
  <x-button
    type="warning"
    round
    icon="x-icon-search"
    :loading="buttonLoading"
    @click="buttonClick"
    >搜索</x-button
  >
  <x-button
    type="primary"
    round
    icon="x-icon-search"
    @click="buttonClick"
  ></x-button>
  <h2>Icon(x-icon)</h2>
  <x-icon></x-icon>
  <x-icon name="loading"></x-icon>
  <x-icon name="minus-circle"></x-icon>
  <x-icon name="more"></x-icon>
  <x-icon name="success"></x-icon>
  <x-icon name="warning"></x-icon>
  <x-icon name="error"></x-icon>
  <x-icon name="close"></x-icon>
  <x-icon name="search"></x-icon>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
const useButton = () => {
  const buttonClick = () => {
    console.log(11)
  }
  const buttonLoading = ref(true)
  setTimeout(() => {
    buttonLoading.value = false
  }, 2000)
  return {
    buttonClick,
    buttonLoading,
  }
}

const useCheckbox = () => {
  const checkVal = ref(true)
  // const checkVal = ref([true]);

  const checkedList = ref(['北京', '南京'])
  const checkList = ref(['北京', '上海', '南京'])

  const handleChange = (value: any): void => {
    console.log(value)
  }
  return {
    checkVal,
    handleChange,
    checkList,
    checkedList,
  }
}
export default defineComponent({
  setup() {
    return {
      ...useButton(),
      ...useCheckbox(),
    }
  },
})
</script>
