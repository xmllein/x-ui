import { WritableComputedRef } from 'vue';
import { ICheckboxProps } from './checkbox.types';
export declare const useCheckbox: (props: ICheckboxProps) => {
    model: WritableComputedRef<any>;
    isChecked: import("vue").ComputedRef<unknown>;
    handleChange: (e: InputEvent) => void;
};
