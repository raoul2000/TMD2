import { Injectable } from '@nestjs/common';
import { Document } from './interfaces/document.interface';
import { DaoService} from '../common/dao/dao.service';

@Injectable()
export class DocumentsService {
    
    constructor(private readonly daoService: DaoService) { }

    findAll(): Promise<Document[]> {
        return this.daoService.getDao("localfs").findAllDocuments();
    }
}
