# Changelog

## 1.0.1 (2025-05-15)

Full Changelog: [v1.0.0...v1.0.1](https://github.com/GRID-is/api-sdk-ts/compare/v1.0.0...v1.0.1)

### Bug Fixes

* **stainless:** configure calc and values endpoints ([b1e8f44](https://github.com/GRID-is/api-sdk-ts/commit/b1e8f44ccf9d4eb6dcd97fd7726085737adc77eb))

## 1.0.0 (2025-05-13)

Full Changelog: [v1.0.0-rc.9...v1.0.0](https://github.com/GRID-is/api-sdk-ts/compare/v1.0.0-rc.9...v1.0.0)

### Features

* **api:** api update ([d834425](https://github.com/GRID-is/api-sdk-ts/commit/d834425570e026346310267dd03bab3a6e44f997))
* **api:** api update ([8b73fb6](https://github.com/GRID-is/api-sdk-ts/commit/8b73fb643ac2b279da2ab74ed8453e3d7f706135))
* **client:** add withOptions helper ([826d290](https://github.com/GRID-is/api-sdk-ts/commit/826d290d1c8d2471fdcaa3e8d0b4b42c13727283))


### Bug Fixes

* **client:** always overwrite when merging headers ([7a631e4](https://github.com/GRID-is/api-sdk-ts/commit/7a631e4d9623f4aa003f6f24609078bc1103442c))


### Chores

* **ci:** add timeout thresholds for CI jobs ([d8fc1a4](https://github.com/GRID-is/api-sdk-ts/commit/d8fc1a4cf641d6626357ba9c5141d42d3e52d2e0))
* **ci:** only use depot for staging repos ([a4c649c](https://github.com/GRID-is/api-sdk-ts/commit/a4c649c874ea9130eff6556afce0fe89a87cc22a))
* **client:** drop support for EOL node versions ([a509ad2](https://github.com/GRID-is/api-sdk-ts/commit/a509ad2438b2b2319895a3ed235424ebf9e2c820))
* **client:** minor internal fixes ([2e47260](https://github.com/GRID-is/api-sdk-ts/commit/2e47260d9d3e4e556daec6f623a7fa2490b0f880))
* **internal:** codegen related update ([485efff](https://github.com/GRID-is/api-sdk-ts/commit/485efff03ee7213cb0d2a653e605c3129d0ebbb1))
* **internal:** codegen related update ([7747be3](https://github.com/GRID-is/api-sdk-ts/commit/7747be3b3564af6aa4fce340f6760cd28fe8557a))
* **internal:** refactor utils ([ec57d21](https://github.com/GRID-is/api-sdk-ts/commit/ec57d2112fc5f63c3ed8283194864ee0fd38f0d1))
* **internal:** share typescript helpers ([e21900d](https://github.com/GRID-is/api-sdk-ts/commit/e21900da0bef0e07cd867c6ee706a3e84b86f60a))
* **package:** remove engines ([7dc1db5](https://github.com/GRID-is/api-sdk-ts/commit/7dc1db518861b3cda7682639d81c127366fabb3e))
* **perf:** faster base64 decoding ([76ee06a](https://github.com/GRID-is/api-sdk-ts/commit/76ee06a4d5780e8b7974f90aff9726e06e1a7240))


### Documentation

* add examples to tsdocs ([258efc0](https://github.com/GRID-is/api-sdk-ts/commit/258efc07237dc9af8836358b27a26d9676bffe96))
* **readme:** fix typo ([ff6cb96](https://github.com/GRID-is/api-sdk-ts/commit/ff6cb967df9f929940c619252a56e56a637d347a))

## 1.0.0-rc.9 (2025-04-11)

Full Changelog: [v1.0.0-rc.8...v1.0.0-rc.9](https://github.com/GRID-is/api-sdk-ts/compare/v1.0.0-rc.8...v1.0.0-rc.9)

### Features

* **api:** api update ([434e199](https://github.com/GRID-is/api-sdk-ts/commit/434e199b310c922c55b065236096f44ade271f63))


### Bug Fixes

* **internal:** fix file uploads in node 18 jest ([8f76d14](https://github.com/GRID-is/api-sdk-ts/commit/8f76d14c877c2b6d3a00f803fe0d117726bfdd10))


### Chores

* **internal:** improve node 18 shims ([21abc69](https://github.com/GRID-is/api-sdk-ts/commit/21abc6974f2d08ef9e55758c1bc88567e9b78c54))
* **internal:** reduce CI branch coverage ([54f4fea](https://github.com/GRID-is/api-sdk-ts/commit/54f4feac82aad9e03d6dc87123a506df98fd906b))
* **internal:** upload builds and expand CI branch coverage ([e37cb9a](https://github.com/GRID-is/api-sdk-ts/commit/e37cb9a3912a916f1a43013b19cb6381e12fcf50))

## 1.0.0-rc.8 (2025-04-08)

Full Changelog: [v1.0.0-rc.7...v1.0.0-rc.8](https://github.com/GRID-is/api-sdk-ts/compare/v1.0.0-rc.7...v1.0.0-rc.8)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#47](https://github.com/GRID-is/api-sdk-ts/issues/47)) ([c344306](https://github.com/GRID-is/api-sdk-ts/commit/c344306e2f61fb6c4a2b830e184a7095e1c53093))
* **client:** send `X-Stainless-Timeout` in seconds ([#44](https://github.com/GRID-is/api-sdk-ts/issues/44)) ([7b4a5ab](https://github.com/GRID-is/api-sdk-ts/commit/7b4a5aba048bb1b20e8b897f12fab28fefdca15e))
* **client:** send all configured auth headers ([#49](https://github.com/GRID-is/api-sdk-ts/issues/49)) ([212b3ae](https://github.com/GRID-is/api-sdk-ts/commit/212b3ae5516f76b76592534be02defec7fd75e34))
* **mcp:** remove unused tools.ts ([#48](https://github.com/GRID-is/api-sdk-ts/issues/48)) ([d44b94a](https://github.com/GRID-is/api-sdk-ts/commit/d44b94a902a7d397a8c2b004e261a97dc3d59446))


### Chores

* **internal:** add aliases for Record and Array ([#46](https://github.com/GRID-is/api-sdk-ts/issues/46)) ([2462b10](https://github.com/GRID-is/api-sdk-ts/commit/2462b1024bf10be8395b931863355d874fefc0ce))

## 1.0.0-rc.7 (2025-03-27)

Full Changelog: [v1.0.0-rc.6...v1.0.0-rc.7](https://github.com/GRID-is/api-sdk-ts/compare/v1.0.0-rc.6...v1.0.0-rc.7)

### Features

* **api:** finish renaming of HTTPBearer to apiKey ([#41](https://github.com/GRID-is/api-sdk-ts/issues/41)) ([29a151d](https://github.com/GRID-is/api-sdk-ts/commit/29a151deedf3e7fc9fd062be0a531c3f2b60ed84))

## 1.0.0-rc.6 (2025-03-27)

Full Changelog: [v1.0.0-rc.5...v1.0.0-rc.6](https://github.com/GRID-is/api-sdk-ts/compare/v1.0.0-rc.5...v1.0.0-rc.6)

### Features

* **api:** api update ([#37](https://github.com/GRID-is/api-sdk-ts/issues/37)) ([78d193d](https://github.com/GRID-is/api-sdk-ts/commit/78d193d3d4619f1266ebedccbd3bc73c96e7fcc9))
* **api:** update API URL to api.grid.is ([#38](https://github.com/GRID-is/api-sdk-ts/issues/38)) ([bcc8f3c](https://github.com/GRID-is/api-sdk-ts/commit/bcc8f3c5c61e904e29dd0a7a3bf4de6b112e1729))


### Bug Fixes

* **internal:** add mts file + crypto shim types ([#33](https://github.com/GRID-is/api-sdk-ts/issues/33)) ([7ab8e1d](https://github.com/GRID-is/api-sdk-ts/commit/7ab8e1d00af0416eaa467c42be42a1960abc514a))


### Chores

* **client:** move misc public files to new `core/` directory, deprecate old paths ([#39](https://github.com/GRID-is/api-sdk-ts/issues/39)) ([80f0087](https://github.com/GRID-is/api-sdk-ts/commit/80f00879d13e20c34f51deebdc76f33ffff05634))
* **docs:** Update GRID app URL ([78f283f](https://github.com/GRID-is/api-sdk-ts/commit/78f283fd34f299634cd7755b886811191096045b))
* **exports:** cleaner resource index imports ([#35](https://github.com/GRID-is/api-sdk-ts/issues/35)) ([d8cbc61](https://github.com/GRID-is/api-sdk-ts/commit/d8cbc615cfa73a4d040ba0b3ef9a63312ba4f7f7))
* **exports:** stop using path fallbacks ([#36](https://github.com/GRID-is/api-sdk-ts/issues/36)) ([3ec3190](https://github.com/GRID-is/api-sdk-ts/commit/3ec3190e6113e5ba0e3e3e9bd13ed77387059a17))
* **internal:** codegen related update ([#31](https://github.com/GRID-is/api-sdk-ts/issues/31)) ([93391a0](https://github.com/GRID-is/api-sdk-ts/commit/93391a0a8513219fdf851d0913d16fe32114a318))
* **internal:** minor client file refactoring ([#34](https://github.com/GRID-is/api-sdk-ts/issues/34)) ([f45db71](https://github.com/GRID-is/api-sdk-ts/commit/f45db71123d330d8fd065d50e3d4888d6ba422d1))
* **internal:** remove extra empty newlines ([#32](https://github.com/GRID-is/api-sdk-ts/issues/32)) ([7128673](https://github.com/GRID-is/api-sdk-ts/commit/7128673f7fc7dac02c8884875b95da2c7ff67986))


### Documentation

* Explain how to use the API key ([3f67855](https://github.com/GRID-is/api-sdk-ts/commit/3f67855e034df13f465372a83c66386375bf0fff))

## 1.0.0-rc.5 (2025-03-07)

Full Changelog: [v1.0.0-rc.4...v1.0.0-rc.5](https://github.com/GRID-is/api-sdk-ts/compare/v1.0.0-rc.4...v1.0.0-rc.5)

### Features

* **api:** update via SDK Studio ([#25](https://github.com/GRID-is/api-sdk-ts/issues/25)) ([c5cf079](https://github.com/GRID-is/api-sdk-ts/commit/c5cf079750762b60fcdea6c69863f456720bd4b8))
* **api:** update via SDK Studio ([#27](https://github.com/GRID-is/api-sdk-ts/issues/27)) ([0af6a97](https://github.com/GRID-is/api-sdk-ts/commit/0af6a97467d36ba404805bbf22660749e31c2f62))
* **api:** update via SDK Studio ([#28](https://github.com/GRID-is/api-sdk-ts/issues/28)) ([8df4f0f](https://github.com/GRID-is/api-sdk-ts/commit/8df4f0fb96951d815bbfb3c72db34ed0c1ed6d7f))

## 1.0.0-rc.4 (2025-03-07)

Full Changelog: [v1.0.0-rc.3...v1.0.0-rc.4](https://github.com/GRID-is/api-sdk-ts/compare/v1.0.0-rc.3...v1.0.0-rc.4)

### Features

* **api:** update via SDK Studio ([#18](https://github.com/GRID-is/api-sdk-ts/issues/18)) ([c107c3d](https://github.com/GRID-is/api-sdk-ts/commit/c107c3dcb0885cf9694813d2a8be1c178e764302))
* **api:** update via SDK Studio ([#20](https://github.com/GRID-is/api-sdk-ts/issues/20)) ([c1bbfe8](https://github.com/GRID-is/api-sdk-ts/commit/c1bbfe876f366525194ea85113510a34d2223e4d))
* **api:** update via SDK Studio ([#21](https://github.com/GRID-is/api-sdk-ts/issues/21)) ([9fc5039](https://github.com/GRID-is/api-sdk-ts/commit/9fc5039e1fe544f9760b2d6977a7650c1cc10f26))
* **api:** update via SDK Studio ([#22](https://github.com/GRID-is/api-sdk-ts/issues/22)) ([56714df](https://github.com/GRID-is/api-sdk-ts/commit/56714dffac5e1da2e53411eeb9849b0dbda46c7c))

## 1.0.0-rc.3 (2025-03-05)

Full Changelog: [v1.0.0-rc.2...v1.0.0-rc.3](https://github.com/GRID-is/api-sdk-ts/compare/v1.0.0-rc.2...v1.0.0-rc.3)

### Features

* **api:** update via SDK Studio ([#15](https://github.com/GRID-is/api-sdk-ts/issues/15)) ([0b298c2](https://github.com/GRID-is/api-sdk-ts/commit/0b298c2021d159cf8584e29a80bc9aaf97e4bf4c))

## 1.0.0-rc.2 (2025-03-05)

Full Changelog: [v1.0.0-rc.1...v1.0.0-rc.2](https://github.com/GRID-is/api-sdk-ts/compare/v1.0.0-rc.1...v1.0.0-rc.2)

### Chores

* **docs:** improve docs for withResponse/asResponse ([#13](https://github.com/GRID-is/api-sdk-ts/issues/13)) ([cb86142](https://github.com/GRID-is/api-sdk-ts/commit/cb861427d44fe9e1811816dea0e0a8a30031bd25))
* **types:** improved go to definition on fetchOptions ([#11](https://github.com/GRID-is/api-sdk-ts/issues/11)) ([109b57f](https://github.com/GRID-is/api-sdk-ts/commit/109b57f0be0a415454c738796cc23ac503f6b7d2))


### Documentation

* Remove banner now we're no longer in alpha ([0664e6c](https://github.com/GRID-is/api-sdk-ts/commit/0664e6c1367801e0b4211b386a4ec37b31813b51))

## 1.0.0-rc.1 (2025-03-04)

Full Changelog: [v0.0.1-alpha.0...v1.0.0-rc.1](https://github.com/GRID-is/api-sdk-ts/compare/v0.0.1-alpha.0...v1.0.0-rc.1)

### Features

* **api:** update via SDK Studio ([ed2532d](https://github.com/GRID-is/api-sdk-ts/commit/ed2532d0acf35c2b641c2bc4dea2d99578bef31b))
* **api:** update via SDK Studio ([825bb76](https://github.com/GRID-is/api-sdk-ts/commit/825bb764f8f3ba261fa822b2ced25760f3d57f9e))
* **api:** update via SDK Studio ([e115347](https://github.com/GRID-is/api-sdk-ts/commit/e11534720f9792f9f8c7b530b3ff1d684d63b8ae))
* **client:** improve logging ([569a132](https://github.com/GRID-is/api-sdk-ts/commit/569a13271ac7494147ac50c8b7b8fdd320c63b49))


### Bug Fixes

* **client:** fix export map for index exports, accept BunFile ([123347c](https://github.com/GRID-is/api-sdk-ts/commit/123347c586b62a7842838840cdb4e34f6e6a563b))
* **client:** fix TypeError with undefined File ([#7](https://github.com/GRID-is/api-sdk-ts/issues/7)) ([fc96af3](https://github.com/GRID-is/api-sdk-ts/commit/fc96af3add60747312a94ece211be69def2e4d43))
* **internal:** clean up undefined File test ([#8](https://github.com/GRID-is/api-sdk-ts/issues/8)) ([75aeb76](https://github.com/GRID-is/api-sdk-ts/commit/75aeb76c03b0b5e83db67f974ee49531c6dcda18))
* **internal:** return in castToError instead of throwing ([84a1528](https://github.com/GRID-is/api-sdk-ts/commit/84a152897102999cbb3396f5cd4fdbb84e7739fb))
* **tests:** manually reset node:buffer File ([#9](https://github.com/GRID-is/api-sdk-ts/issues/9)) ([445f5e0](https://github.com/GRID-is/api-sdk-ts/commit/445f5e0862ceeae58e5e0cc2a24ad6073644c251))


### Chores

* **client:** only accept standard types for file uploads ([#4](https://github.com/GRID-is/api-sdk-ts/issues/4)) ([1a5ed95](https://github.com/GRID-is/api-sdk-ts/commit/1a5ed950538c1aaac430f538381db92fba30ae76))
* go live ([#1](https://github.com/GRID-is/api-sdk-ts/issues/1)) ([6dbcfca](https://github.com/GRID-is/api-sdk-ts/commit/6dbcfcac7856288e4a6fa738088f172f1fe5bb7b))
* **internal:** constrain synckit dev dependency ([#6](https://github.com/GRID-is/api-sdk-ts/issues/6)) ([8aa8e5e](https://github.com/GRID-is/api-sdk-ts/commit/8aa8e5edb80faefaeeff98a08e1a03617e028964))
* **internal:** fix devcontainers setup ([1bbe689](https://github.com/GRID-is/api-sdk-ts/commit/1bbe689fc8dd26efd2ca461d058cef4fd85e588b))
* **internal:** fix tests failing on node v18 ([#5](https://github.com/GRID-is/api-sdk-ts/issues/5)) ([7b714ab](https://github.com/GRID-is/api-sdk-ts/commit/7b714ab604380f9fdeb76e1c4bc2660fb26fcf7b))
* **internal:** fix tests not always being type checked ([3252195](https://github.com/GRID-is/api-sdk-ts/commit/3252195ceb83f8c8930c776f55ca80c2d50cf867))
* **internal:** migrate to eslint v9 ([8783aac](https://github.com/GRID-is/api-sdk-ts/commit/8783aac740bebda886b46fa160e82ab8e812f3cf))
* **internal:** remove unnecessary todo ([48fa154](https://github.com/GRID-is/api-sdk-ts/commit/48fa1548c3bbfc73ec66a9aabd063d3e59d6305a))
* **internal:** remove unused method ([6db2175](https://github.com/GRID-is/api-sdk-ts/commit/6db2175d121d0acd78583197e405da918d74e342))
* **internal:** update eslint config ([46d9569](https://github.com/GRID-is/api-sdk-ts/commit/46d95691c2c00d0fbc401c08064fc325a69e1fd1))
* update SDK settings ([#3](https://github.com/GRID-is/api-sdk-ts/issues/3)) ([e849939](https://github.com/GRID-is/api-sdk-ts/commit/e8499394ae1e31e85661c1752376c8066601b84d))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([05b3ff0](https://github.com/GRID-is/api-sdk-ts/commit/05b3ff0439c8357c9040b5de4681aedc8371ca0e))
