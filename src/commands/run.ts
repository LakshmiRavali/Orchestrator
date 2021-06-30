import {Command, flags} from '@oclif/command'
const {spawnSync} = require('child_process')
const sendSms = require('../helpers/sms-sender.ts')
const sendEmail = require('../helpers/email-sender.ts')

export class Run extends Command {
  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-s, --sms)
    sms: flags.string({char: 's', description: 'Phone number to send command execution status'}),
    // flag with no value (-f, --jobName)
    jobName: flags.string({char: 'j', description: 'Executing job name'}),
    email: flags.string({char: 'e', description: 'Email id to send command execution status'}),
  }

  static args = [
    {
      name: 'command',
      description: 'Command to be executed.',
      required: true},
  ]

  static examples = [
    '$ orchestrator run "commandToBeExecuted" --sms=phoneNumber',
  ]

  async run() {
    const {args, flags} = this.parse(Run)
    const child = spawnSync(args.command, {
      shell: true,
      cwd: process.cwd(),
      env: process.env,
      stdio: 'inherit',
      encoding: 'utf-8',
      silent: true,
    })
    let subject = flags.jobName || args.command
    if (child && child.status !== 0) {
      subject += ' execution failed.'
    } else {
      subject += ' execution successful'
    }

    if (flags.sms) {
      const msgId = await sendSms(flags, subject)
      this.log(msgId)
    }

    if (flags.email) {
      const msgId = await sendEmail(flags, subject, subject)
      this.log(msgId)
    }
  }
}
