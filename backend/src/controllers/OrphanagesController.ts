
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import orphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

import Orphanage from '../models/Orphanage';

export default {

    // index, show, create, update, delete

    async index(request: Request, response: Response) {
        const orphanagesRep = getRepository(Orphanage);
        const orphanages = await orphanagesRep.find({
            relations: ['images']
        });
        return response.status(200).json(orphanageView.renderMany(orphanages));
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        
        const orphanagesRep = getRepository(Orphanage);
        
        const orphanage = await orphanagesRep.findOneOrFail(id, {
            relations: ['images']
        });
        
        return response.status(200).json(orphanageView.render(orphanage));

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

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        });

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'),
            latitude: Yup.number().required('Latitude obrigatória'),
            longitude: Yup.number().required('Longitude obrigatória'),
            about: Yup.string().required('Sobre obrigatório').max(300), 
            instructions: Yup.string().required('Instrução obrigatória'), 
            opening_hours: Yup.string().required('Horário de atendimento obrigatório'), 
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false
        });
    
        const orphanage = orphanagesRep.create(data);
    
        await orphanagesRep.save(orphanage);    
    
        return response.status(201).json( orphanage );
    }

}