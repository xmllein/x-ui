import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot, toDisplayString } from 'vue';

var script$1 = defineComponent({
    name: 'XButton',
    props: {
        type: {
            type: String,
            default: 'primary',
            vaildator: (val) => {
                return [
                    'primary',
                    'warning',
                    'danger',
                    'default',
                    'info',
                    'success',
                ].includes(val);
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
        ]);
        const handleClick = (e) => {
            console.log('inner');
            ctx.emit('click', e);
        };
        return {
            classs,
            icon: props.icon,
            handleClick,
        };
    },
});

const _hoisted_1 = {
  key: 0,
  class: "x-icon-loading"
};
const _hoisted_2 = { key: 2 };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.classs),
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    (_ctx.loading)
      ? (openBlock(), createElementBlock("i", _hoisted_1))
      : createCommentVNode("v-if", true),
    (!_ctx.loading && _ctx.icon)
      ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(_ctx.icon)
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createElementBlock("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

script$1.install = function (app) {
    // 注册组件
    app.component(script$1.name, script$1);
};

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

//整合组件
// 全局引入
const components = [script$1, script];
// 全局注册组件
const install = function (app) {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};
var index = {
    install,
};

export { index as default };
