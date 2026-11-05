import * as random from "@pulumi/random";
import * as repro from "@pulumi/repro-component";

const value = new random.RandomId("value", { byteLength: 4 });

new repro.MyComponent("repro", {
    nestedProperty: {
        value: value.hex,
        otherValue: "plain",
    },
}, {
    transforms: [() => undefined],
});

export const generatedValue = value.hex;
