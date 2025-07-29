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
    import { TextAreaProps, defaultTextAreaStyle, textareaRules } from "./schema";

    let { children, ...props }:
        TextAreaProps &
        BaseProps &
        StyleProps &
        SizeProps &
        SpacingProps &
        PositionProps &
        TransformProps
    = $props();

    let style = $derived(processStyles(
        props,
        textareaRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules
    ));
</script>

<textarea 
    aria-label="TextArea"
    rows={props.rows}
    cols={props.cols}
    style={style.toCSS(defaultTextAreaStyle)}
    disabled={props.disabled}
    placeholder={props.placeholder}
    oninput={props.onChange}
>{children}</textarea>
