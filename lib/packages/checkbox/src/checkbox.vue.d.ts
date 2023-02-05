declare const _default: import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    name: StringConstructor;
    indeterminate: BooleanConstructor;
    checked: BooleanConstructor;
    label: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    modelValue: (BooleanConstructor | StringConstructor | NumberConstructor)[];
}, {
    model: import("vue").WritableComputedRef<any>;
    isChecked: import("vue").ComputedRef<unknown>;
    handleChange: (e: InputEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: BooleanConstructor;
    name: StringConstructor;
    indeterminate: BooleanConstructor;
    checked: BooleanConstructor;
    label: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    modelValue: (BooleanConstructor | StringConstructor | NumberConstructor)[];
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    indeterminate: boolean;
    checked: boolean;
}>;
export default _default;
