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
    import { VStackProps, vStackRules, defaultVStackStyle } from "./schema";

    let { children, ...props }:
        VStackProps &
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
        vStackRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules,
        layoutRules
    ));
</script>

<div
    aria-label="VStack"
    style={style.toCSS(defaultVStackStyle)}
>
    {#if typeof children === "function"}
        {@render children()}
    {:else if children}
        {children}
    {/if}
</div>
