import {Command, flags} from '@oclif/command'
const {spawn} = require('child_process')
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
    const child = spawn(args.command, {
      shell: true,
      cwd: process.cwd(),
      env: process.env,
      stdio: ['inherit', 'pipe', 'pipe'],
      encoding: 'utf-8',
    })
    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stdout)
    child.on('close', (data: number) => {
      if (data !== 0) {
        child.stderr.on('data', (error: any) => this.sendNotification(flags, args, true, error))
      } else {
        child.stdout.on('data', (data: any) => this.sendNotification(flags, args, false, data))
      }
    })
    // child.stderr.on('data', (error: any) => this.sendNotification(flags, args, true, error))
  }

  async sendNotification(flags: { sms: any; jobName: any; email: any }, args: {  command?: any }, error: boolean, data: { toString: () => any }) {
    let subject = flags.jobName || args.command
    if (error) {
      subject += ' execution failed.'
    } else {
      subject += ' execution successful'
    }

    if (flags.sms) {
      const msgId = await sendSms(flags, subject)
      this.log(msgId)
    }

    if (flags.email) {
      const msgId = await sendEmail(flags, subject, data.toString() || subject)
      this.log(msgId)
    }
  }
}
