import { Module } from '@nestjs/common';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
import { DaoModule } from '../common/dao/dao.module';

@Module({
    controllers: [DocumentsController],
    providers: [DocumentsService],
    imports: [DaoModule]
})
export class DocumentsModule {}
