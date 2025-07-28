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
import { HStackProps, hStackRules, defaultHStackStyle } from "./schema";
import { useMemo } from "react";

const HStack = (
    { children, ...props }:
    HStackProps &
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
        hStackRules,
        styleRules,
        sizeRules,
        spacingRules,
        positionRules,
        transformRules,
        layoutRules
    ), [props]);
    return <div
        aria-label="HStack"
        style={style.toStyle(defaultHStackStyle)}
    >
        {children}
    </div>
}

export default HStack;