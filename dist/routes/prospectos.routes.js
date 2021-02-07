"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("express");
var prospectos_controller_1 = require("../controllers/prospectos.controller");
var router = Router();
router.get('/', prospectos_controller_1.default.getAllProspects);
router.get('/find-by-id', prospectos_controller_1.default.getProspectById);
router.post('/save', prospectos_controller_1.default.saveProspect);
router.patch('/update', prospectos_controller_1.default.updateProspect);
router.delete('/delete', prospectos_controller_1.default.deleteProspect);
exports.default = router;
//# sourceMappingURL=prospectos.routes.js.map