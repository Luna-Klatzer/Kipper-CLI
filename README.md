![](./img/Kipper-Logo-with-head.png)

# Kipper

The Kipper programming language (CLI implementation) - Currently in development. No usable/stable versions available

*Note that this is a development preview! Stable releases might take until January-March 2022*

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@kipper/cli)](https://npmjs.org/package/@kipper/cli)
[![License](https://img.shields.io/npm/l/@kipper/cli)](https://github.com/Luna-Klatzer/Kipper-CLI/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)

<!-- toc -->
* [Kipper](#kipper)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @kipper/cli
$ kipper COMMAND
running command...
$ kipper (-v|--version|version)
@kipper/cli/0.0.5 win32-x64 node-v16.13.0
$ kipper --help [COMMAND]
USAGE
  $ kipper COMMAND
...
```
<!-- usagestop -->
<!-- usagestop -->

# Commands

<!-- commands -->
* [`kipper analyse FILE`](#kipper-analyse-file)
* [`kipper compile FILE`](#kipper-compile-file)
* [`kipper help [COMMAND]`](#kipper-help-command)
* [`kipper run FILE`](#kipper-run-file)

## `kipper analyse FILE`

Analyses a file and validates its syntax

```
USAGE
  $ kipper analyse FILE

ARGUMENTS
  FILE  The file that should be analysed and checked

OPTIONS
  --encoding=encoding  [default: utf8] The encoding that should be used to read the file
```

_See code: [src/commands/analyse.ts](https://github.com/Luna-Klatzer/Kipper/blob/v0.0.5/src/commands/analyse.ts)_

## `kipper compile FILE`

Compiles a file into it's js-counterpart with it's typescript types added

```
USAGE
  $ kipper compile FILE

ARGUMENTS
  FILE  The file that should be compiled

OPTIONS
  --encoding=encoding  [default: utf8] The encoding that should be used to read the file
```

_See code: [src/commands/compile.ts](https://github.com/Luna-Klatzer/Kipper/blob/v0.0.5/src/commands/compile.ts)_

## `kipper run FILE`

Runs a compiled file or compiles and afterwards runs the passed file

```
USAGE
  $ kipper run FILE

ARGUMENTS
  FILE  The file that should be either run (.js) or compiled and afterwards run

OPTIONS
  --encoding=encoding  [default: utf8] The encoding that should be used to read the file
```

_See code: [src/commands/run.ts](https://github.com/Luna-Klatzer/Kipper/blob/v0.0.5/src/commands/run.ts)_

## `kipper help [COMMAND]`

display help for kipper

```
USAGE
  $ kipper help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
<!-- commandsstop -->
