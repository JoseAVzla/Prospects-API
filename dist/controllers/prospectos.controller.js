var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getRepository } from "typeorm";
import { ProspectEntity } from '../entities/prospects.entity';
import { validate } from "class-validator";
export class ProspectosController {
}
ProspectosController.deleteProspect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const prospectoRepository = getRepository(ProspectEntity);
    let prospect = ProspectEntity;
    try {
        const prospect = yield prospectoRepository.findOneOrFail(id);
    }
    catch (e) {
        res.status(404).json({ message: "No encontrado delete" });
    }
    prospectoRepository.delete(id);
    res.status(201).json({ message: "Prospecto eliminado" });
});
ProspectosController.updateProspect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let prospecto;
    const { id, estatus, observacion } = req.body;
    const prospectoRepository = getRepository(ProspectEntity);
    try {
        prospecto = yield prospectoRepository.findOneOrFail(id);
        prospecto.estatus = estatus;
        prospecto.observacion = observacion;
    }
    catch (e) {
        res.status(404).json({ message: "Prospecto no encontrado" });
    }
    const errors = yield validate(prospecto, {
        validationError: { target: false, value: false }
    });
    if (errors.length) {
        return res.status(400).json(errors);
    }
    try {
        yield prospectoRepository.save(prospecto);
    }
    catch (e) {
        return res
            .status(409)
            .json({ message: "Hubo un problema al actualizar" });
    }
    res.status(201).send("Prospecto actualizado");
});
ProspectosController.saveProspect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellidop, apellidom, calle, numero, colonia, cp, telefono, rfc, documento } = req.body;
    //const documento1 = (req as MulterRequest).file;
    //const filefine = documento1.originalname.replace(/\s/g, "-");
    const prospect = new ProspectEntity();
    prospect.nombre = nombre;
    prospect.apellidop = apellidop;
    prospect.apellidom = apellidom;
    prospect.calle = calle;
    prospect.numero = numero;
    prospect.colonia = colonia;
    prospect.cp = cp;
    prospect.telefono = telefono;
    prospect.rfc = rfc;
    prospect.documento = documento;
    prospect.estatus = "E";
    prospect.observacion = "";
    // Validación
    const errors = yield validate(prospect, {
        validationError: { target: false, value: false }
    });
    if (errors.length > 0) {
        return res.status(400).json(errors);
    }
    const prospectoRepository = getRepository(ProspectEntity);
    try {
        yield prospectoRepository.save(prospect);
    }
    catch (e) {
        return res.status(409).json({ message: "RFC ya existe" });
    }
    res.send("Prospecto creado correctamente");
});
ProspectosController.getAllProspects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prospectRepository = getRepository(ProspectEntity);
    try {
        const prospectos = yield prospectRepository.find();
        res.send(prospectos);
    }
    catch (e) {
        res.status(404).json({ message: "No hay prospectos registrados" });
    }
});
ProspectosController.getProspectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prospectoRepository = getRepository(ProspectEntity);
    try {
        const prospect = yield prospectoRepository.findOneOrFail(Number(req.query.id));
        res.send(prospect);
    }
    catch (e) {
        res.status(404).json({ message: "No encontrado" });
    }
});
export default ProspectosController;
//# sourceMappingURL=prospectos.controller.js.map