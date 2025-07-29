<script lang="ts">
    import {
        type BaseProps,
        type StyleProps,
        type SizeProps,
        type SpacingProps,
        type PositionProps,
        type TransformProps,
        processStyles,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules
    } from "../../../../property";
    import { InputProps, defaultInputStyle, inputRules } from "./schema";

    let { ...props }:
        InputProps &
        BaseProps &
        StyleProps &
        SizeProps &
        SpacingProps &
        PositionProps &
        TransformProps
    = $props();

    let style = $derived(processStyles(
        props,
        inputRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules
    ));
</script>

<input 
    aria-label="Input"
    type={props.type}
    style={style.toCSS(defaultInputStyle)}
    disabled={props.disabled}
    value={props.value}
    placeholder={props.placeholder}
    oninput={props.onChange}
/>
