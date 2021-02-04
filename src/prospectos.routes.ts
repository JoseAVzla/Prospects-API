import * as Router from 'express';
import ProspectosController from './prospectos.controller';
const router = Router();

router.get('/', ProspectosController.getAllProspects);

router.get('/:id', ProspectosController.getProspectById);

router.post('/save', ProspectosController.saveProspect);

router.patch('/:id', ProspectosController.updateProspect);

router.delete('/:id', ProspectosController.deleteProspect);

router.get('/test', (req, res) => {
    res.send('Todo fine!!!');
});

export default router;