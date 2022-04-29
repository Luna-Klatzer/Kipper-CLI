# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Implemented foundation of compilation command `compile` and execution command `run`.
- New option `outputDir` in `compile` and `run`.
- Logger implementation which handles console logging for the CLI. This includes the following
  items:
  - `defaultKipperLoggerConfig` - Default Config for the tslog `Logger`.
  - `defaultCliEmitHandler` - Default Emit Handler for the CLI.
  - `defaultCliLogger` - Default tslog `Logger`.
- Classes `KipperEncoding` and `KipperEncodings` for hinting the supported file encodings that can be used.   
- Function `writeCompilationResult()` in `compile.ts`, which writes out the result of a compilation to a file.
- CLI Base error class `KipperCLIError` and basic errors that inherit from it:
  - `KipperFileAccessError`
  - `KipperFileWriteError`
  - `KipperUnsupportedEncodingError`
- Field `KipperFileStream.path`, which returns a `path.ParsedPath` instance.
- Function `verifyEncoding()` which checks if the passed encoding is supported in Kipper.

### Changed
- Set default encoding for reading files to `UTF-8`.
- Changed order of arguments in `KipperParseFile` (Breaking change!).

### Removed
- Namespace `KipperStreams` and moved `fromFile` to `KipperParseFile` as a static method.

## [0.0.5] - 2022-03-02

### Added
- Class `KipperParseStream` for storing the content of a file.
- Namespace `KipperStreams` with the function `fromFile()`, which reads a file asynchronously and 
  initialises an instance of the class `KipperParseStream`.
- Basic commands `analyse`, `compile` and `run`, which were imported from the main repository.

[unreleased]: https://github.com/Luna-Klatzer/Kipper-CLI/compare/0.0.5...HEAD
[0.0.5]: https://github.com/Luna-Klatzer/Kipper-CLI/tags/0.0.5
