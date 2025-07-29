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
import { useMemo } from "react";

const Button = (
    { children, ...props }:
    ButtonProps &
    BaseProps &
    StyleProps &
    SizeProps &
    SpacingProps &
    PositionProps &
    TransformProps
) => {
    const style = useMemo(() => processStyles(
        props,
        buttonRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules
    ), [props]);
    return <button
        aria-label="Button"
        onClick={props.onClick}
        style={style.toStyle(defaultButtonStyle)}
        disabled={props.disabled}
    >
        {children}
    </button>
}

export default Button;