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
        transformRules,

        parseValue

    } from "../../../../property";
    import { CheckboxProps, defaultCheckboxStyle, checkboxRules } from "./schema";

    let { checked = $bindable(), ...props }:
        CheckboxProps &
        BaseProps &
        StyleProps &
        SizeProps &
        SpacingProps &
        PositionProps &
        TransformProps
    = $props();

    let style = $derived(processStyles(
        { checked, ...props },
        checkboxRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules
    ));
</script>

<label 
    aria-label="Checkbox"
    style={style.toCSS(defaultCheckboxStyle)}>
    <input 
        aria-label="Checkbox-input"
        type="checkbox"
        style="display: none;"
        bind:checked={checked} 
        disabled={props.disabled} 
        oninput={props.onChange}
    />
    <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        {#if checked}
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
        {/if}
    </svg>
</label>