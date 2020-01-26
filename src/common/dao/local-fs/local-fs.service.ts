import { Injectable } from '@nestjs/common';
import { Dao } from '../dao.interface';
import { Document } from '../../../documents/interfaces/document.interface';


@Injectable()
export class LocalFsService implements Dao {

    findAllDocuments(): Promise<Document[]> {
        return Promise.resolve([
            { name: "fsdoc1" },
            { name: "fsdoc2" },
            { name: "fsdoc3" },
        ]);
    }
}
