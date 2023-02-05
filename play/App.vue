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

  <h2>button-group</h2>
  <x-button-group>
    <x-button type="primary" icon="x-icon-arrow-left-bold">上一页</x-button>
    <x-button type="primary"
      >下一页<i class="x-icon-arrow-right x-icon--right"></i
    ></x-button>
  </x-button-group>

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

  <h2>checkbox</h2>
  <x-checkbox v-model="checkVal" @change="handleChange"> aaa </x-checkbox>
  <h2>chekbox-group</h2>
  {{ checkedList }}
  <x-checkbox-group v-model="checkedList" @change="handleChange">
    <x-checkbox
      v-for="city in checkList"
      :key="city"
      :label="city"
    ></x-checkbox>
  </x-checkbox-group>

  <h2>Col/Row</h2>
  <x-row style="margin-bottom: 20px">
    <x-col :span="6" style="background-color: red">111</x-col>
    <x-col :span="6" :offset="6" style="background-color: green">222</x-col>
    <x-col :span="6" style="background-color: blue">333</x-col>
  </x-row>

  <x-row :gutter="20" style="margin-bottom: 20px">
    <x-col :span="8" style="background-color: red">111</x-col>
    <x-col :span="8" style="background-color: green">222</x-col>
    <x-col :span="8" style="background-color: blue">333</x-col>
  </x-row>
  <x-row :gutter="20" :justify="'around'" style="margin-bottom: 20px">
    <x-col :span="2" style="background-color: red">111</x-col>
    <x-col :span="2" style="background-color: green">222</x-col>
    <x-col :span="2" style="background-color: blue">333</x-col>
  </x-row>
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
  const checkVal = ref(false)
  // const checkVal = ref([true]);

  const checkedList = ref(['北京', '南京'])
  const checkList = ref(['北京', '上海', '南京'])

  const handleChange = (value: any): void => {
    console.log(value)
    checkVal.value = value
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
