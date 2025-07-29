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
import { CheckboxProps, checkboxRules, defaultCheckboxStyle } from "./schema";
import { useMemo } from "react";

const Checkbox = (
    { checked, ...props }:
    CheckboxProps &
    BaseProps &
    StyleProps &
    SizeProps &
    SpacingProps &
    PositionProps &
    TransformProps
) => {
    const style = useMemo(() => processStyles(
        props,
        checkboxRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules
    ), [props]);
    return <label 
        aria-label="Checkbox"
        style={style.toStyle(defaultCheckboxStyle)}>
        <input 
            aria-label="Checkbox-input"
            type="checkbox"
            style={{display: "none"}}
            checked={checked}
            disabled={props.disabled} 
            onChange={props.onChange}
        />
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            {checked && <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>}
        </svg>
    </label>
}

export default Checkbox;