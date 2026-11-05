import * as pulumi from "@pulumi/pulumi";

export interface MyNestedProperty {
    value: pulumi.Input<string>;
    otherValue: string;
}

export interface MyComponentArgs {
    nestedProperty: MyNestedProperty;
}

export class MyComponent extends pulumi.ComponentResource {
    constructor(name: string, args: MyComponentArgs, opts?: pulumi.ComponentResourceOptions) {
        super("repro-component:index:MyComponent", name, {}, opts);

        const configuredProperties = Object.entries(args.nestedProperty)
            .filter(([, value]) => value !== undefined)
            .map(([key]) => key);

        if (configuredProperties.length > 2) {
            throw new pulumi.InputPropertyError({
                propertyPath: "nestedProperty",
                reason: "Only two nested properties can be provided; received: " +
                    configuredProperties.join(", "),
            });
        }

        this.registerOutputs({});
    }
}
