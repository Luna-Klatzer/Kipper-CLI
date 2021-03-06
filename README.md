![](https://github.com/Luna-Klatzer/Kipper/raw/main/img/Kipper-Logo-with-head.png)

# Important notice!

With the recent implementation of Luna-Klatzer/Kipper#55 by Luna-Klatzer/Kipper#56, this repo is officially read-only, as the most recent code from the branch [`cleanup-for-3.0.0`](https://github.com/Luna-Klatzer/Kipper-CLI/tree/cleanup-for-3.0.0) was moved into the monorepo at [Luna-Klatzer/Kipper](https://github.com/Luna-Klatzer/Kipper).

Please for future issues, questions or ideas go to the Kipper repository and open an issue there! :)

# Kipper

The Kipper programming language (CLI implementation) - Currently in development. No usable/stable versions available

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@kipper/cli)](https://npmjs.org/package/@kipper/cli)
[![License](https://img.shields.io/npm/l/@kipper/cli)](https://github.com/Luna-Klatzer/Kipper-CLI/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)

<!-- toc -->
* [Kipper](#kipper)
* [Usage](#usage)
* [Commands](#commands)
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
  FILE  The file that should be analysed

OPTIONS
  --encoding=encoding  [default: utf16] The encoding that should be used to read the file
```

_See code: [src/commands/analyse.ts](https://github.com/Luna-Klatzer/Kipper-CLI/blob/v0.0.5/src/commands/analyse.ts)_

## `kipper compile FILE`

Compiles a Kipper source file file into TypeScript

```
USAGE
  $ kipper compile FILE

ARGUMENTS
  FILE  The file that should be compiled

OPTIONS
  --encoding=encoding  [default: utf16] The encoding that should be used to read the file
```

_See code: [src/commands/compile.ts](https://github.com/Luna-Klatzer/Kipper-CLI/blob/v0.0.5/src/commands/compile.ts)_

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

## `kipper run FILE`

Runs a Kipper program

```
USAGE
  $ kipper run FILE

ARGUMENTS
  FILE  The file that should be run (js/ts)

OPTIONS
  --encoding=encoding  [default: utf16] The encoding that should be used to read the file
```

_See code: [src/commands/run.ts](https://github.com/Luna-Klatzer/Kipper-CLI/blob/v0.0.5/src/commands/run.ts)_
<!-- commandsstop -->
