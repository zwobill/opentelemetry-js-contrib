# Changelog

## [0.31.2](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-mysql-v0.31.1...instrumentation-mysql-v0.31.2) (2022-11-02)


### Bug Fixes

* separate public and internal types for all instrumentations ([#1251](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1251)) ([e72ea58](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/e72ea58cfb888a90590970f63d3a042a8ea3aaf2))

## [0.31.1](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-mysql-v0.31.0...instrumentation-mysql-v0.31.1) (2022-09-15)


### Bug Fixes

* **mysql:** set proper context for outgoing queries ([#1140](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1140)) ([59f7bce](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/59f7bce383a754bd5f08ae4e5a75e27de6d3d6e2))

## [0.31.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-mysql-v0.30.0...instrumentation-mysql-v0.31.0) (2022-09-02)


### Features

* update experimental Otel deps to ^0.31.0 ([#1096](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1096)) ([4c8843b](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/4c8843be14896d1159a622c07eb3a049401ccba1))
* update experimental Otel deps to ^0.32.0 ([#1143](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1143)) ([6fb1911](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/6fb191139aed2ca763300dcf9adb51121a88f97e))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @opentelemetry/contrib-test-utils bumped from ^0.31.0 to ^0.32.0

## [0.30.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-mysql-v0.29.0...instrumentation-mysql-v0.30.0) (2022-06-08)


### Features

* update core dependencies stable ^1.3.1 experimental ^0.29.2 ([141b155](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/141b155e344980b51264e26b26c117b2113bcef6))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @opentelemetry/contrib-test-utils bumped from ^0.30.0 to ^0.31.0

## [0.29.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-mysql-v0.28.0...instrumentation-mysql-v0.29.0) (2022-05-14)


### Features

* add supported node versions for all packages ([#973](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/973)) ([baaacbd](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/baaacbdd35ca4baab0afae64647aa8c0380ee4b7))
* use Otel SDK 1.2/0.28 ([#984](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/984)) ([098c2ed](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/098c2ed6f9c5ab7bd865685018c0777245aab3b7))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @opentelemetry/contrib-test-utils bumped from 0.29.0 to ^0.30.0

## [0.28.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-mysql-v0.27.1...instrumentation-mysql-v0.28.0) (2022-03-02)


### ⚠ BREAKING CHANGES

* **mysql*,redis:** net.peer.ip -> db.connection_string

### Bug Fixes

* **mysql*,redis:** net.peer.ip -> db.connection_string ([bf39b90](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/bf39b908fd64cec92c862b2deca5d760ddcf4509))

### [0.27.1](https://www.github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-mysql-v0.27.0...instrumentation-mysql-v0.27.1) (2022-01-24)


### Bug Fixes

* allow mysql streamable query with values array ([#790](https://www.github.com/open-telemetry/opentelemetry-js-contrib/issues/790)) ([88db0a4](https://www.github.com/open-telemetry/opentelemetry-js-contrib/commit/88db0a4ea134593ba5bf2c7209f94eae466519bd))
* rename lerna's --include-filtered-dependencies option ([#817](https://www.github.com/open-telemetry/opentelemetry-js-contrib/issues/817)) ([cf268e7](https://www.github.com/open-telemetry/opentelemetry-js-contrib/commit/cf268e7a92b7800ad6dbec9ca77466f9ee03ee1a))
* use localhost for services in CI ([#816](https://www.github.com/open-telemetry/opentelemetry-js-contrib/issues/816)) ([f497313](https://www.github.com/open-telemetry/opentelemetry-js-contrib/commit/f4973133e86549bbca301983085cc67788a10acd))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @opentelemetry/contrib-test-utils bumped from ^0.28.0 to ^0.29.0

## [0.27.0](https://www.github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-mysql-v0.26.0...instrumentation-mysql-v0.27.0) (2021-11-30)


### Features

* use latest instrumentation base ([#769](https://www.github.com/open-telemetry/opentelemetry-js-contrib/issues/769)) ([7aff23e](https://www.github.com/open-telemetry/opentelemetry-js-contrib/commit/7aff23ebebbe209fa3b78c2e7f513c9cd2231be4))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @opentelemetry/contrib-test-utils bumped from ^0.27.0 to ^0.28.0

## [0.26.0](https://www.github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-mysql-v0.25.0...instrumentation-mysql-v0.26.0) (2021-10-22)


### Features

* support API and SDK 1.0 ([#706](https://www.github.com/open-telemetry/opentelemetry-js-contrib/issues/706)) ([096b694](https://www.github.com/open-telemetry/opentelemetry-js-contrib/commit/096b694bbc3079f0ab4ee0462869b10eb8185202))



### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @opentelemetry/contrib-test-utils bumped from ^0.25.0 to ^0.27.0
