import { Request, Response } from "express";
import { Peso } from "../entity/peso";
import  AppDataSource from "../data-source";
import { Repository } from "typeorm";

export class PesoController {

    async listar(req: Request, res: any) {
        const datasource = await AppDataSource.initialize();
        const pesoRepository = datasource.getRepository(Peso);
        const listaPesos = await pesoRepository.find();
        res.json(listaPesos);
    }

    async inserir(req: any, res: any) {
        const datasource = await AppDataSource.initialize();
        const pesoRepository = datasource.getRepository(Peso);

        const pesoRequest = req.body;

        const peso = new Peso();
        peso.data = pesoRequest.data;
        peso.peso = pesoRequest.peso;
        peso.id_animal =pesoRequest.id_animal;
       
        const pesoSalvo = await pesoRepository.save(peso);

        res.status(201).json(pesoSalvo);
    }

    async buscarPorId(req: any, res: any) {
        const datasource = await AppDataSource.initialize();
        const pesoRepository = datasource.getRepository(Peso);
        
        const id = req.params.id;

        const peso = await pesoRepository.findOneBy({id: id});

        res.json(peso);
    }

    async buscarPorIdAnimal(req: any, res: any) {
        const datasource = await AppDataSource.initialize();
        const pesoRepository = datasource.getRepository(Peso);
        
        const idAnimal = req.params.id_animal;

        const pesoListaAnimal = await pesoRepository.findOneBy({id_animal: idAnimal});

        res.json(pesoListaAnimal);
    }

    
}