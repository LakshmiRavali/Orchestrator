import {expect, test} from '@oclif/test'

describe('run', () => {
  test
  .stdout()
  .command(['run', 'echo hello'])
  .it('runs run --help', ctx => {
    expect(ctx.stdout).to.contain('')
  })
})
