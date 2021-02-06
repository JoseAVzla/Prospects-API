import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ProspectEntity } from "../entities/prospects.entity";
import { validate } from "class-validator";
var multer = require("multer");

export class ProspectosController {
  static deleteProspect = async (req: Request, res: Response) => {
    const { id } = req.body;
    const prospectoRepository = getRepository(ProspectEntity);
    let prospect = ProspectEntity;
    try {
      const prospect = await prospectoRepository.findOneOrFail(id);
    } catch (e) {
      res.status(404).json({ message: "No encontrado delete" });
    }
    prospectoRepository.delete(id);
    res.status(201).json({ message: "Prospecto eliminado" });
  };

  static updateProspect = async (req: Request, res: Response) => {
    let prospecto;
    const { id, estatus, observacion } = req.body;
    const prospectoRepository = getRepository(ProspectEntity);
    try {
      prospecto = await prospectoRepository.findOneOrFail(id);
      prospecto.estatus = estatus;
      prospecto.observacion = observacion;
    } catch (e) {
      res.status(404).json({ message: "Prospecto no encontrado" });
    }

    const errors = await validate(prospecto, {
      validationError: { target: false, value: false }
    });
    if (errors.length) {
      return res.status(400).json(errors);
    }

    try {
      await prospectoRepository.save(prospecto);
    } catch (e) {
      return res
        .status(409)
        .json({ message: "Hubo un problema al actualizar" });
    }
    res.status(201).send("Prospecto actualizado");
  };

  static saveProspect = async (req: Request, res: Response) => {
    interface MulterRequest extends Request {
      file: any;
    }
    const {
      nombre,
      apellidop,
      apellidom,
      calle,
      numero,
      colonia,
      cp,
      telefono,
      rfc,
      documento
    } = req.body;
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
    const errors = await validate(prospect, {
      validationError: { target: false, value: false }
    });
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const prospectoRepository = getRepository(ProspectEntity);
    try {
      await prospectoRepository.save(prospect);
    } catch (e) {
      return res.status(409).json({ message: "RFC ya existe" });
    }

    res.send("Prospecto creado correctamente");
  };

  static getAllProspects = async (req: Request, res: Response) => {
    const prospectRepository = getRepository(ProspectEntity);
    try {
      const prospectos = await prospectRepository.find();
      res.send(prospectos);
    } catch (e) {
      res.status(404).json({ message: "No hay prospectos registrados" });
    }
  };

  static getProspectById = async (req: Request, res: Response) => {
    const prospectoRepository = getRepository(ProspectEntity);

    try {
      const prospect = await prospectoRepository.findOneOrFail(Number(req.query.id));
      res.send(prospect);
    } catch (e) {
      res.status(404).json({ message: "No encontrado" });
    }
  };
}

export default ProspectosController;
