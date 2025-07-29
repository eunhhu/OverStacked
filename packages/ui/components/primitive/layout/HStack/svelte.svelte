<script lang="ts">
    import {
        type BaseProps,
        type StyleProps,
        type SizeProps,
        type SpacingProps,
        type PositionProps,
        type TransformProps,
        type LayoutProps,
        processStyles,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules,
        layoutRules
    } from "../../../../property";
    import { HStackProps, hStackRules, defaultHStackStyle } from "./schema";

    let { children, ...props }:
        HStackProps &
        BaseProps &
        StyleProps &
        SizeProps &
        SpacingProps &
        PositionProps &
        TransformProps &
        Omit<LayoutProps, "row" | "col">
    = $props();

    let style = $derived(processStyles(
        props,
        hStackRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules,
        layoutRules
    ));
</script>

<div
    aria-label="HStack"
    style={style.toCSS(defaultHStackStyle)}
>
    {#if typeof children === "function"}
        {@render children()}
    {:else if children}
        {children}
    {/if}
</div>
