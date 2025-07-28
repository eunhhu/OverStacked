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
} from "@overstacked/ui/property";
import { VStackProps, vStackRules, defaultVStackStyle } from "./schema";
import { useMemo } from "react";

const VStack = (
    { children, ...props }:
    VStackProps &
    BaseProps &
    StyleProps &
    SizeProps &
    SpacingProps &
    PositionProps &
    TransformProps &
    Omit<LayoutProps, "row" | "col">
) => {
    const style = useMemo(() => processStyles(
        props,
        vStackRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules,
        layoutRules
    ), [props]);
    return <div
        aria-label="VStack"
        style={style.toStyle(defaultVStackStyle)}
    >
        {children}
    </div>
}

export default VStack;