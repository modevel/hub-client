import { Configuration, StatusApi } from '@dipa-projekt/hub-openapi';
import { DI } from '@leanup/lib/helpers/injector';

import { MeasurementService } from '../services/measurements/service';
import { StorageService } from '../services/storage/service';

const ConfigApi = new Configuration({});

DI.register('StatusApi', new StatusApi(ConfigApi));

DI.register('StorageService', new StorageService());
DI.register('MeasurementService', new MeasurementService());
