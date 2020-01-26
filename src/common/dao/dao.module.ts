import { Module } from '@nestjs/common';
import { NedbService } from './nedb/nedb.service';
import { DaoService } from './dao.service';
import { LocalFsService } from './local-fs/local-fs.service';

@Module({
  providers: [NedbService, DaoService, LocalFsService],
  exports: [DaoService]
})
export class DaoModule {}
