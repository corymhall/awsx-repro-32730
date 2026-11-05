# Repro

**Works**

```shell
$ mise x pulumi@3.272.0 -- pulumi preview
```

**Fails**

```shell
$ mise x pulumi@3.273.0 -- pulumi preview
```

**Error**

```shell
error: repro-component:index:MyComponent resource 'repro' has a problem:
            - property nestedProperty with value {"otherValue": "plain", "value": "7b67060b"} has a problem: Only two nested properties can be provided; received: __pulumiOutput, resources, allResources, isKnown, isSecret, promise, toString, toJSON
error: Error: failed to register new resource repro [repro-component:index:MyComponent]: 2 UNKNOWN: resource monitor shut down
    at Object.registerResource (/Users/chall/personal/awsx-repro-32730/node_modules/@pulumi/runtime/resource.ts:696:27)
    at new Resource (/Users/chall/personal/awsx-repro-32730/node_modules/@pulumi/resource.ts:605:13)
    at new ComponentResource (/Users/chall/personal/awsx-repro-32730/node_modules/@pulumi/resource.ts:1657:9)
    at new MyComponent (/Users/chall/personal/awsx-repro-32730/sdks/repro-component/myComponent.ts:43:9)
    at Object.<anonymous> (/Users/chall/personal/awsx-repro-32730/index.ts:7:1)
    at Module._compile (node:internal/modules/cjs/loader:1968:14)
    at Module.m._compile (/Users/chall/personal/awsx-repro-32730/node_modules/@pulumi/pulumi/vendor/ts-node@7.0.1/index.js:3009:23)
    at node:internal/modules/cjs/loader:2108:10
    at Object.require.extensions.<computed> [as .ts] (/Users/chall/personal/awsx-repro-32730/node_modules/@pulumi/pulumi/vendor/ts-node@7.0.1/index.js:3011:12)
    at Module.load (node:internal/modules/cjs/loader:1690:32)
```
