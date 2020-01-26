import { Controller, Get, Req, Param } from '@nestjs/common';
import { Request } from 'express';

import { DocumentsService } from './documents.service';
import { Document } from './interfaces/document.interface';


@Controller('documents')
export class DocumentsController {

    constructor(private readonly documentsService: DocumentsService) { }

    @Get()
    findAll(@Req() request: Request): Promise<Document[]> {
        return this.documentsService.findAll();
    }

    /**
     *Find one document by its ID
     *
     * @param {*} id
     * @returns {string}
     * @memberof DocumentsController
     */
    @Get(':id')
    findById(@Param('id') id): Promise<Document> {
        console.log(`findById : #${id} document`);
        return this.documentsService.findById(id);
    }
}
