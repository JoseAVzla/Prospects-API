import * as Router from 'express';
import ProspectosController from '../controllers/prospectos.controller';
const router = Router();

router.get('/', ProspectosController.getAllProspects);

router.get('/:id', ProspectosController.getProspectById);

router.post('/save', ProspectosController.saveProspect);

router.patch('/:id', ProspectosController.updateProspect);

router.delete('/:id', ProspectosController.deleteProspect);

export default router;