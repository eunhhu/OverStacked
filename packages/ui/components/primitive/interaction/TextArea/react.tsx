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
import { TextAreaProps, textareaRules, defaultTextAreaStyle } from "./schema";
import { useMemo } from "react";

const TextArea = (
    { children, ...props }:
    TextAreaProps &
    BaseProps &
    StyleProps &
    SizeProps &
    SpacingProps &
    PositionProps &
    TransformProps
) => {
    const style = useMemo(() => processStyles(
        props,
        textareaRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules
    ), [props]);
    return <textarea
        aria-label="TextArea"
        rows={props.rows}
        cols={props.cols}
        style={style.toStyle(defaultTextAreaStyle)}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={props.onChange}
    >{children}</textarea>
}

export default TextArea;