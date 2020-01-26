import { Injectable } from '@nestjs/common';
import { Dao } from '../dao.interface';
import { Document } from '../../../documents/interfaces/document.interface';

@Injectable()
export class NedbService implements Dao {
    
    findAllDocuments(): Promise<Document[]> {
        return Promise.resolve([
            { name: "doc1" },
            { name: "doc2" },
            { name: "doc3" },
        ]);
    }
}
