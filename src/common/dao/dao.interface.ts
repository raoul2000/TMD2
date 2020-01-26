import { Document } from '../../documents/interfaces/document.interface';

export interface Dao {
    findAllDocuments() : Promise<Document[]>;
}