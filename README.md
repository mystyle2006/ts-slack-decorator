# ts-slack-decorator
A `Slack` Method Decorator for typescript

## Installation

```shell
npm install --save ts-slack-decorator
## Needed dependencies
npm install --save reflect-metadata
```

> **Note**: You will need to import `reflect-metadata` somewhere in the global place of your app - https://github.com/typeorm/typeorm#installation

## Usage
```typescript
// simple.service.ts
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
```
