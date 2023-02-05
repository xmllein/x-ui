import { defineComponent, openBlock, createElementBlock, renderSlot } from 'vue';

var script = defineComponent({
    name: 'XButtonGroup',
    setup() { },
});

const _hoisted_1 = { class: "x-button-group" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "packages/button/src/button-group.vue";

script.install = function (app) {
    // 注册组件
    app.component(script.name, script);
};

export { script as default };
