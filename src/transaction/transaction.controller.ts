// handshake-api.controller.ts

import { Controller, Get } from '@nestjs/common';
import { HandshakeApiService } from './transaction.service';
import { Observable } from 'rxjs';

@Controller('api')
export class HandshakeApiController {
  constructor(private readonly handshakeApiService: HandshakeApiService) {}

  @Get('walletinfo')
  getWalletInfo() {
    return this.handshakeApiService.getWalletInfo();
  }
}
