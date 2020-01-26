import { Injectable } from '@nestjs/common';
import { Dao } from './dao.interface';
import { NedbService } from './nedb/nedb.service';
import { LocalFsService } from './local-fs/local-fs.service';

/**
 * Data Access Object Service
 * Provides a concrete data access object
 *
 * @export
 * @class DaoService
 */
@Injectable()
export class DaoService {

    constructor(
        private readonly nedbDao: NedbService,
        private readonly localfsDao: LocalFsService
    ) { }

    /**
     * Depending on a key, returns the corresponding Data Access Object
     *
     * @param {string} [key="nedb"]
     * @returns {Dao}
     * @memberof DaoService
     */
    getDao(key = "nedb"): Dao {
        switch (key) {
            case "nedb": return this.nedbDao;
            case "localfs": return this.localfsDao;
        }
    }
}
