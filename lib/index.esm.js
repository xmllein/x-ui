import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot, toDisplayString, getCurrentInstance, inject, createElementVNode, withDirectives, vModelCheckbox, createTextVNode, provide } from 'vue';

var script$4 = defineComponent({
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

const _hoisted_1$3 = {
  key: 0,
  class: "x-icon-loading"
};
const _hoisted_2$1 = { key: 2 };

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.classs),
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    (_ctx.loading)
      ? (openBlock(), createElementBlock("i", _hoisted_1$3))
      : createCommentVNode("v-if", true),
    (!_ctx.loading && _ctx.icon)
      ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(_ctx.icon)
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$4.render = render$4;
script$4.__file = "packages/button/src/button.vue";

script$4.install = function (app) {
    // 注册组件
    app.component(script$4.name, script$4);
};

var script$3 = defineComponent({
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

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(`x-icon-${_ctx.name}`)
  }, toDisplayString(_ctx.name), 3 /* TEXT, CLASS */))
}

script$3.render = render$3;
script$3.__file = "packages/icon/src/icon.vue";

// 注册组件
script$3.install = function (app) {
    app.component(script$3.name, script$3);
};

var script$2 = defineComponent({
    name: 'XButtonGroup',
    setup() { },
});

const _hoisted_1$2 = { class: "x-button-group" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$2.render = render$2;
script$2.__file = "packages/button/src/button-group.vue";

script$2.install = function (app) {
    // 注册组件
    app.component(script$2.name, script$2);
};

const useCheckboxGroup = () => {
    const chenkboxGroup = inject('XChenkboxGroup', {});
    const isGroup = chenkboxGroup.name === 'XChenkboxGroup';
    return {
        isGroup,
        chenkboxGroup,
    };
};
const useModel = (props) => {
    const { proxy } = getCurrentInstance();
    // 只有checkbox 有modelValue
    const { isGroup, chenkboxGroup } = useCheckboxGroup();
    const store = computed(() => {
        return chenkboxGroup ? chenkboxGroup.modelValue?.value : props.modelValue;
    });
    const model = computed({
        get() {
            // 如果是group， 把group的数组给checkbox
            // vue中checkbox 可以绑定数组，如果绑定数组，会判断value是否在数组中
            return isGroup ? store.value : props.modelValue;
        },
        set(val) {
            if (isGroup) {
                // 触发group的方法，不触发自己的
                return chenkboxGroup.changeEvent?.(val);
            }
            proxy?.$emit('update:modelValue', val);
        },
    });
    return model;
};
const useCheckboxStatus = (props, model) => {
    const isChecked = computed(() => {
        const value = model.value;
        if (Array.isArray(value)) {
            return value.includes(props.label);
        }
        else {
            return value;
        }
    });
    return isChecked;
};
const useEvent = () => {
    const { proxy } = getCurrentInstance();
    return (e) => {
        const target = e.target;
        const value = target.checked ? true : false;
        proxy?.$emit('change', value);
    };
};
const useCheckbox = (props) => {
    let model = useModel(props);
    let isChecked = useCheckboxStatus(props, model);
    let handleChange = useEvent();
    return {
        model,
        isChecked,
        handleChange,
    };
};

var script$1 = defineComponent({
    name: 'XCheckbox',
    props: {
        disabled: Boolean,
        name: String,
        indeterminate: Boolean,
        checked: Boolean,
        label: [String, Number, Boolean],
        modelValue: [String, Number, Boolean],
    },
    emits: ['update:modelValue', 'change'],
    setup(props) {
        return useCheckbox(props);
    },
});

const _hoisted_1$1 = { class: "x-checkbox" };
const _hoisted_2 = { class: "x-checkbox__input" };
const _hoisted_3 = ["checked", "name", "disabled", "indeterminate", "value"];
const _hoisted_4 = { class: "x-checkbox__label" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("span", _hoisted_2, [
      withDirectives(createElementVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.model) = $event)),
        checked: _ctx.isChecked,
        onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args))),
        name: _ctx.name,
        disabled: _ctx.disabled,
        indeterminate: _ctx.indeterminate,
        value: _ctx.label
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3), [
        [vModelCheckbox, _ctx.model]
      ]),
      createCommentVNode(" vue中checkbox 可以绑定数组，如果绑定数组，会判断value是否在数组中 ")
    ]),
    createElementVNode("span", _hoisted_4, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
      ])
    ])
  ]))
}

script$1.render = render$1;
script$1.__file = "packages/checkbox/src/checkbox.vue";

script$1.install = function (app) {
    // 注册组件
    app.component(script$1.name, script$1);
};

var script = defineComponent({
    name: 'XCheckboxGroup',
    props: {
        modelValue: Array,
    },
    emits: ['change', 'update:modelValue'],
    setup(props, { emit }) {
        const modelValue = computed(() => props.modelValue);
        const changeEvent = (value) => {
            emit('change', value);
            emit('update:modelValue', value);
        };
        provide('XChenkboxGroup', {
            name: 'XChenkboxGroup',
            modelValue,
            changeEvent,
        });
    },
});

const _hoisted_1 = { class: "x-checkbox-group" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "packages/checkbox/src/checkbox-group.vue";

script.install = function (app) {
    // 注册组件
    app.component(script.name, script);
};

// 全局引入
const components = [script$4, script$3, script$2, script$1, script];
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
