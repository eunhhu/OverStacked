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
    import { defaultTextStyle, TextProps, textRules } from "./schema";

    let { children, ...props }:
        TextProps &
        BaseProps &
        StyleProps &
        SizeProps &
        SpacingProps &
        PositionProps &
        TransformProps
    = $props();

    let style = $derived(processStyles(
        props,
        textRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules
    ));
</script>

<span
    aria-label="Text"
    style={style.toCSS(defaultTextStyle)}
>
    {#if typeof children === "function"}
        {@render children()}
    {:else if children}
        {children}
    {/if}
</span>
