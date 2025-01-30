import { COLORS } from '../../helpers/colors.ts';

import { LocalLogger } from "../01-adapter.ts";

// TODO: Implementar el LocalLogger Class

const logger  = new LocalLogger ('01-adapter.ts');

logger.writeLog('Mensaje normal');

logger.writeWarning('Mensaje warning');

logger.writeError('Mensaje warning');