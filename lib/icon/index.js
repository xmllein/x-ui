import { defineComponent, openBlock, createElementBlock, normalizeClass, toDisplayString } from 'vue';

var script = defineComponent({
    name: 'XIcon',
    props: {
        name: {
            type: String,
            default: '',
        },
    },
    setup() {
        return {};
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(`x-icon-${_ctx.name}`)
  }, toDisplayString(_ctx.name), 3 /* TEXT, CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

// 注册组件
script.install = function (app) {
    app.component(script.name, script);
};

export { script as default };
