import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentsModule } from './documents/documents.module';
import { DaoModule } from './common/dao/dao.module';

@Module({
  imports: [DocumentsModule, DaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
