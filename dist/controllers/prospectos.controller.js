"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProspectosController = void 0;
var typeorm_1 = require("typeorm");
var prospects_entity_1 = require("../entities/prospects.entity");
var class_validator_1 = require("class-validator");
var multer = require("multer");
var ProspectosController = /** @class */ (function () {
    function ProspectosController() {
    }
    ProspectosController.deleteProspect = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, prospectoRepository, prospect, prospect_1, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.body.id;
                    prospectoRepository = typeorm_1.getRepository(prospects_entity_1.ProspectEntity);
                    prospect = prospects_entity_1.ProspectEntity;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prospectoRepository.findOneOrFail(id)];
                case 2:
                    prospect_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    res.status(404).json({ message: "No encontrado delete" });
                    return [3 /*break*/, 4];
                case 4:
                    prospectoRepository.delete(id);
                    res.status(201).json({ message: "Prospecto eliminado" });
                    return [2 /*return*/];
            }
        });
    }); };
    ProspectosController.updateProspect = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var prospecto, _a, id, estatus, observacion, prospectoRepository, e_2, errors, e_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, id = _a.id, estatus = _a.estatus, observacion = _a.observacion;
                    prospectoRepository = typeorm_1.getRepository(prospects_entity_1.ProspectEntity);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prospectoRepository.findOneOrFail(id)];
                case 2:
                    prospecto = _b.sent();
                    prospecto.estatus = estatus;
                    prospecto.observacion = observacion;
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _b.sent();
                    res.status(404).json({ message: "Prospecto no encontrado" });
                    return [3 /*break*/, 4];
                case 4: return [4 /*yield*/, class_validator_1.validate(prospecto, {
                        validationError: { target: false, value: false }
                    })];
                case 5:
                    errors = _b.sent();
                    if (errors.length) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, prospectoRepository.save(prospecto)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    e_3 = _b.sent();
                    return [2 /*return*/, res
                            .status(409)
                            .json({ message: "Hubo un problema al actualizar" })];
                case 9:
                    res.status(201).send("Prospecto actualizado");
                    return [2 /*return*/];
            }
        });
    }); };
    ProspectosController.saveProspect = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, nombre, apellidop, apellidom, calle, numero, colonia, cp, telefono, rfc, documento, prospect, errors, prospectoRepository, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, nombre = _a.nombre, apellidop = _a.apellidop, apellidom = _a.apellidom, calle = _a.calle, numero = _a.numero, colonia = _a.colonia, cp = _a.cp, telefono = _a.telefono, rfc = _a.rfc, documento = _a.documento;
                    prospect = new prospects_entity_1.ProspectEntity();
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
                    return [4 /*yield*/, class_validator_1.validate(prospect, {
                            validationError: { target: false, value: false }
                        })];
                case 1:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    prospectoRepository = typeorm_1.getRepository(prospects_entity_1.ProspectEntity);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, prospectoRepository.save(prospect)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_4 = _b.sent();
                    return [2 /*return*/, res.status(409).json({ message: "RFC ya existe" })];
                case 5:
                    res.send("Prospecto creado correctamente");
                    return [2 /*return*/];
            }
        });
    }); };
    ProspectosController.getAllProspects = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var prospectRepository, prospectos, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    prospectRepository = typeorm_1.getRepository(prospects_entity_1.ProspectEntity);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prospectRepository.find()];
                case 2:
                    prospectos = _a.sent();
                    res.send(prospectos);
                    return [3 /*break*/, 4];
                case 3:
                    e_5 = _a.sent();
                    res.status(404).json({ message: "No hay prospectos registrados" });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    ProspectosController.getProspectById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var prospectoRepository, prospect, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    prospectoRepository = typeorm_1.getRepository(prospects_entity_1.ProspectEntity);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prospectoRepository.findOneOrFail(Number(req.query.id))];
                case 2:
                    prospect = _a.sent();
                    res.send(prospect);
                    return [3 /*break*/, 4];
                case 3:
                    e_6 = _a.sent();
                    res.status(404).json({ message: "No encontrado" });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return ProspectosController;
}());
exports.ProspectosController = ProspectosController;
exports.default = ProspectosController;
//# sourceMappingURL=prospectos.controller.js.map