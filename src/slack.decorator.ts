import 'reflect-metadata'
import { SlackInterface } from './slack.interface'
import { IncomingWebhook } from '@slack/webhook'

export function Slack({ message, url }: SlackInterface): MethodDecorator {
  return (target: any, methodName: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const originalMethod = descriptor.value
    descriptor.value = async <T>(...newArgs: unknown[]): Promise<any> => {
      const result = await originalMethod(newArgs)
      const webhook = new IncomingWebhook(url)
      await webhook.send(message)
      return result
    }
  }
}
