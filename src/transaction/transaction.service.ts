// handshake-api.service.ts

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, Observable } from "rxjs";

@Injectable()
export class HandshakeApiService {
  constructor(private httpService: HttpService) {
  }

  async getWalletInfo() {
    const apiURL = 'http://api.handshakeapi.com/hsd';
    const apiKey = '';

    const {data} = await firstValueFrom(
      this.httpService.post(apiURL, { method: 'getwalletinfo' }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(apiKey).toString('base64')}`
        }
      })
    )
    console.log(data);
    return data;

  }
}