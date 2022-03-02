# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Added `logger.ts`, which implements logger handling for the CLI. This includes the following
  items:
  - `defaultKipperLoggerConfig` - Default Config for the tslog `Logger`
  - `defaultCliEmitHandler` - Default Emit Handler for the CLI
  - `defaultCliLogger` - Default tslog `Logger`

### Changed

### Removed

## [0.0.5] - 2022-03-02

### Added
- Class `KipperParseStream` for storing the content of a file.
- Namespace `KipperStreams` with the function `fromFile()`, which reads a file asynchronously and 
  initialises an instance of the class `KipperParseStream`.
- Basic commands `analyse`, `compile` and `run`, which were imported from the main repository.

[unreleased]: https://github.com/Luna-Klatzer/Kipper-CLI/compare/0.0.5...HEAD
[0.0.5]: https://github.com/Luna-Klatzer/Kipper-CLI/tags/0.0.5
