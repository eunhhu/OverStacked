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
import { useMemo } from "react";

const Text = (
    { children, ...props }:
    TextProps &
    BaseProps &
    StyleProps &
    SizeProps &
    SpacingProps &
    PositionProps &
    TransformProps
) => {
    const style = useMemo(() => processStyles(
        props,
        textRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules
    ), [props]);
    return <span
        aria-label="Text"
        style={style.toStyle(defaultTextStyle)}
    >
        {children}
    </span>
}

export default Text;