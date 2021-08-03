orchestrator
============

Send the sms and email notification after execution of command

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/orchestrator.svg)](https://npmjs.org/package/orchestrator)
[![Downloads/week](https://img.shields.io/npm/dw/orchestrator.svg)](https://npmjs.org/package/orchestrator)
[![License](https://img.shields.io/npm/l/orchestrator.svg)](https://github.com/appBootcamp/orchestrator/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g orchestrator
$ orchestrator COMMAND
running command...
$ orchestrator (-v|--version|version)
orchestrator/0.0.1 darwin-x64 node-v16.5.0
$ orchestrator --help [COMMAND]
USAGE
  $ orchestrator COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`orchestrator help [COMMAND]`](#orchestrator-help-command)
* [`orchestrator run COMMAND`](#orchestrator-run-command)

## `orchestrator help [COMMAND]`

display help for orchestrator

```
USAGE
  $ orchestrator help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `orchestrator run COMMAND`

```
USAGE
  $ orchestrator run COMMAND

ARGUMENTS
  COMMAND  Command to be executed.

OPTIONS
  -e, --email=email      Email id to send command execution status
  -h, --help             show CLI help
  -j, --jobName=jobName  Executing job name
  -s, --sms=sms          Phone number to send command execution status

EXAMPLE
  $ orchestrator run "commandToBeExecuted" --sms=phoneNumber
```

_See code: [src/commands/run.ts](https://github.com/appBootcamp/orchestrator/blob/v0.0.1/src/commands/run.ts)_
<!-- commandsstop -->
