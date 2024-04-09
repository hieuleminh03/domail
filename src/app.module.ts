import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HandshakeApiController } from './transaction/transaction.controller';
import { HandshakeApiService } from './transaction/transaction.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, HandshakeApiController],
  providers: [AppService, HandshakeApiService],
})
export class AppModule {}


