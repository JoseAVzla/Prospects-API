import {Request, Response} from "express";


export class ProspectosController {
    static deleteProspect = async (req: Request, res: Response) => {
        res.send('Hello all prospects');
    }

    static updateProspect = async (req: Request, res: Response) => {
    }

    static saveProspect =  async (req: Request, res: Response) => {
        res.send('Hello all prospects');

    }

    static getAllProspects = async (req:Request, res:Response) => {
        res.status(200).send('Hello all prospects');
    };

    static getProspectById = async (req:Request, res:Response) =>{
        const {id} = req.params;
        res.send(`Hello all prospect with id: ${id}`);

    }
}

export default ProspectosController;