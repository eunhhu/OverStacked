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
import { InputProps, inputRules, defaultInputStyle } from "./schema";
import { useMemo } from "react";

const Input = (
    { ...props }:
    InputProps &
    BaseProps &
    StyleProps &
    SizeProps &
    SpacingProps &
    PositionProps &
    TransformProps
) => {
    const style = useMemo(() => processStyles(
        props,
        inputRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules
    ), [props]);
    return <input
        aria-label="Input"
        type={props.type}
        style={style.toStyle(defaultInputStyle)}
        disabled={props.disabled}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
    />
}

export default Input;