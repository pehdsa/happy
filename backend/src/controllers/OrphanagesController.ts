
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {

    // index, show, create, update, delete

    async index(request: Request, response: Response) {
        const orphanagesRep = getRepository(Orphanage);
        const orphanages = await orphanagesRep.find();
        return response.status(200).json(orphanages);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const orphanagesRep = getRepository(Orphanage);
        const orphanage = await orphanagesRep.findOneOrFail(id);
        return response.status(200).json(orphanage);
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;
    
        const orphanagesRep = getRepository(Orphanage);
    
        const orphanage = orphanagesRep.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        });
    
        await orphanagesRep.save(orphanage);    
    
        return response.status(201).json( orphanage );
    }

}