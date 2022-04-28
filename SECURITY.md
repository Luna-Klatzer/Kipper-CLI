# Security Policy

## Base Module - `@kipper/base`

For version support info for the base module go [here](https://github.com/Luna-Klatzer/Kipper/security/policy).

In case that a version has no support in `@kipper/base` and the CLI depends on it, then the corresponding version in the CLI is also NOT supported.

## Supported Versions

Note that considering this is a work-in-progress project with no stable version released yet,
only the most recent versions will be supported, while older versions will not get updated,
and must be migrated to newer versions to work continuously.

### List of supported versions

The following versions are supported and will get bug-fixes and security updates:

| Version  | Supported          |
| -------- | ------------------ |
| 0.1.x    | :white_check_mark: |
| 0.0.x    | :x:                |

`0.1.0` is not relased yet. See [#8](https://github.com/Luna-Klatzer/Kipper-CLI).

### NPM Deprecation

If a version gets deprecated/loses support, it will be deprecated as well on the NPM registry. 
This means the version will be marked as outdated and NPM will provide a deprecation warning to everyone who attempts to install it.

View a list of all available NPM versions [here](https://www.npmjs.com/package/@kipper/base/).

## Reporting a Vulnerability

Reporting a vulnerability or issue can be done under the [issues page](https://github.com/Luna-Klatzer/Kipper-CLI/issues/new/choose). 
Mark the issue as a bug report, and follow the guidelines inside the issue editor. Be as detailed as possible to avoid too many
followup questions.

Remember though when reporting an issue, this project is in build-up and development, so it will almost definitely not be a high priority for development.
