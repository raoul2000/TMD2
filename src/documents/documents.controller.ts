import { Controller, Get, Req } from '@nestjs/common';
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
}
