import { Slack } from '../../src/slack.decorator'

export class SimpleService {
  @Slack({
    message: 'slack message test',
    url: 'https://hooks.slack.com/services/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',
  })
  sendSlackTest(): string {
    return 'slack message test'
  }
}
