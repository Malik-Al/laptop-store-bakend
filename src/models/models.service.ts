import { Injectable } from '@nestjs/common';
import {Models} from "../entity/models.entity";
import {Repository, UpdateResult} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateModelsDto} from "./dto/create-models.dto";
import {from, Observable} from "rxjs";



@Injectable()
export class ModelsService {
    constructor(
        @InjectRepository(Models)
        private modelsRepository: Repository<Models>,
    ) {}

    // create request
    async modelCreate(dto: CreateModelsDto)  {
        const newModel = await this.modelsRepository.create(dto)
        return this.modelsRepository.save(newModel)

    }

    // get all request
    async modelsAll(): Promise<Models[]> {
        const res = await this.modelsRepository.find({ relations: ['laptop'] });
        return res
    }

    // delete request
    async modelDelete(id: string) {
        const deleteModel = await this.modelsRepository.delete(id);
        return deleteModel.affected;
    }


    // get one request
    async modelOne(id: string): Promise<Models> {
        // return await this.modelsRepository.findOne(id);
        return await this.modelsRepository.findOne(id, {
            relations: ['laptop']
        })
    }
}
