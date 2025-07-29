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
    import { ButtonProps, buttonRules, defaultButtonStyle } from "./schema";

    let { children, ...props }:
        ButtonProps &
        BaseProps &
        StyleProps &
        SizeProps &
        SpacingProps &
        PositionProps &
        TransformProps
    = $props();

    let style = $derived(processStyles(
        props,
        buttonRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules
    ));
</script>

<button
    aria-label="Button"
    onclick={props.onClick}
    style={style.toCSS(defaultButtonStyle)}
    disabled={props.disabled}
>
    {#if typeof children === "function"}
        {@render children()}
    {:else if children}
        {children}
    {/if}
</button>
