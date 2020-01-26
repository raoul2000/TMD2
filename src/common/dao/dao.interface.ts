import { Document } from '../../documents/interfaces/document.interface';

export interface Dao {
    findAllDocuments() : Promise<Document[]>;
    findDocumentById(id:string) : Promise<Document>;
}