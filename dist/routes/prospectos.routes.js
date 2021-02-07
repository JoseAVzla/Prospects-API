import * as Router from 'express';
import ProspectosController from '../controllers/prospectos.controller';
const router = Router();
router.get('/', ProspectosController.getAllProspects);
router.get('/find-by-id', ProspectosController.getProspectById);
router.post('/save', ProspectosController.saveProspect);
router.patch('/update', ProspectosController.updateProspect);
router.delete('/delete', ProspectosController.deleteProspect);
export default router;
//# sourceMappingURL=prospectos.routes.js.map