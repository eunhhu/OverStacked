export type StyleRules<T> = Record<keyof T, Array<[string, (v: any) => string, number]>>;

export const ruleHandle = (property: string, transform?: (v: any) => string, priority: number = 1): 
    [string, (v: any) => string, number] => [
    property, 
    transform || ((v: any) => v), 
    priority
];

export function processStyles<T extends Record<string, any>>(
    props: T, 
    rules: StyleRules<T>
): { toCSS(): string; toStyle(): Record<string, string> } {
    const styles = new Map<string, { value: string; priority: number }>();

    (Object.keys(rules) as Array<keyof T>).forEach(propKey => {
        const value = props[propKey];
        const ruleArray = rules[propKey];
        
        if (value !== undefined && value !== null && value !== "" && ruleArray) {
            ruleArray.forEach(([property, transform, priority]) => {
                const cssValue = transform(value);
                
                if (cssValue && cssValue !== "") {
                    const existing = styles.get(property);
                    
                    if (!existing || priority >= existing.priority) {
                        styles.set(property, { 
                            value: cssValue, 
                            priority 
                        });
                    }
                }
            });
        }
    });

    return {
        toCSS: () => Array.from(styles.entries())
            .map(([prop, { value }]) => `${prop}: ${value}`)
            .join('; '),
        
        toStyle: () => {
            const result: Record<string, string> = {};
            styles.forEach(({ value }, prop) => result[prop] = value);
            return result;
        }
    };
}
