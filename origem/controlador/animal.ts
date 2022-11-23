import { Request, Response } from "express";
import { Animal } from "../entity/animal";
import  AppDataSource from "../data-source";
import { Repository } from "typeorm";

export class AnimalController {

    async listar(req: Request, res: any) {
        const datasource = await AppDataSource.initialize();
        const animalRepository = datasource.getRepository(Animal);
        const listaAnimais = await animalRepository.find();
        res.json(listaAnimais);
    }

    async inserir(req: any, res: any) {
        const datasource = await AppDataSource.initialize();
        const animalRepository = datasource.getRepository(Animal);

        const animalRequest = req.body;

        const animal = new Animal();
        animal.nome = animalRequest.nome;
        animal.dt_nascimento = animalRequest.dt_nascimento;
       
        const animalSalvo = await animalRepository.save(animal);

        res.status(201).json(animalSalvo);
    }

    async buscarPorId(req: any, res: any) {
        const datasource = await AppDataSource.initialize();
        const animalRepository = datasource.getRepository(Animal);
        
        const id = req.params.id;

        const animal = await animalRepository.findOneBy({id: id});

        res.json(animal);
    }

    
}