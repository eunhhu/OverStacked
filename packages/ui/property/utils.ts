export type Mode = "add" | "replace";

export type StyleRules<T> = Record<keyof T, Array<[string, (v: any) => string, number, Mode]>>;

export const ruleHandle = (property: string, transform?: (v: any) => string, priority: number = 1, mode: Mode = "add"): 
    [string, (v: any) => string, number, Mode] => [
    property, 
    transform || ((v: any) => v), 
    priority,
    mode
];

export function processStyles<T extends Record<string, any>>(
    props: T, 
    ...ruleSets: StyleRules<any>[]
): { 
    toCSS(additionalStyles?: React.CSSProperties): string;
    toStyle(additionalStyles?: React.CSSProperties): Record<string, string>
} {
    const styles = new Map<string, { value: string; priority: number }>();

    ruleSets.forEach(rules => {
        (Object.keys(rules) as Array<keyof T>).forEach(propKey => {
            const value = props[propKey];
            const ruleArray = rules[propKey];
            
            if (value !== undefined && value !== null && value !== "" && ruleArray) {
                ruleArray.forEach(([property, transform, priority, mode]) => {
                    const cssValue = transform(value);
                    
                    if (cssValue && cssValue !== "") {
                        const existing = styles.get(property);
                        
                        if (!existing || priority >= existing.priority || mode === "replace") {
                            styles.set(property, { 
                                value: cssValue, 
                                priority 
                            });
                        } else if (mode === "add") {
                            styles.set(property, { 
                                value: existing.value ? existing.value + " " + cssValue : cssValue, 
                                priority 
                            });
                        }
                    }
                });
            }
        });
    });

    return {
        toCSS: (additionalStyles: React.CSSProperties = {}) => {
            const styleEntries = Array.from(styles.entries()).map(([prop, styleValue]) => [prop, styleValue?.value]);
            return [
                ...Object.entries(additionalStyles),
                ...Object.entries(Object.fromEntries(styleEntries)),
            ]
            .filter(([_, value]) => value != null)
            .map(([prop, value]) => `${camelToSnake(prop)}: ${value}`)
            .join('; ') + ";";
        },
        
        toStyle: (additionalStyles: React.CSSProperties = {}) => {
            const result: Record<string, string> = {};
            styles.forEach(({ value }, prop) => result[snakeToCamel(prop)] = value);
            return { ...additionalStyles as Record<string, string>, ...result };
        }
    };
}

export function snakeToCamel(str: string): string {
    return str.replace(/-([a-z])/g, (g) => g[1] ? g[1].toUpperCase() : "");
}

export function camelToSnake(str: string): string {
    return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}