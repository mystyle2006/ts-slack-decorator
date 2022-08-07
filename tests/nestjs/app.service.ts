import { Injectable } from '@nestjs/common'
import { SimpleService } from '../simple/simple.service'

@Injectable()
export class AppService extends SimpleService {
}
