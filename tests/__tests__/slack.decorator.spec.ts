import { AppService } from '../nestjs/app.service'
import { Test, TestingModule } from '@nestjs/testing'

describe('NestJS', () => {
  let app: TestingModule
  let service: AppService
  beforeAll(async () => {
    app = await Test.createTestingModule({
      exports: [],
      providers: [AppService],
    }).compile()
    service = app.get<AppService>(AppService)
  })

  it('Testing 1', () => {
    // check slack message in https://ts-slack-decorator.slack.com/archives/C03SNHD1866
    service.sendSlackTest()
  })
})
