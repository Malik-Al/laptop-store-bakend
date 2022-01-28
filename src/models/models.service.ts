import { Injectable } from '@nestjs/common';
import {Models} from "../entity/models.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateModelsDto} from "./dto/create-models.dto";


@Injectable()
export class ModelsService {
    constructor(
        @InjectRepository(Models)
        private modelsRepository: Repository<Models>) {}

    // create request
    async modelCreate(dto: CreateModelsDto) {  // ??????????????
        const newModel = await this.modelsRepository
            .createQueryBuilder("models")
            .leftJoinAndSelect("models.laptop", "laptop")
            .getMany();
        return this.modelsRepository.save(newModel)

    }

    // get all request
    async modelsAll(): Promise<Models[]> {
        const res = await this.modelsRepository.find();
        return res
    }

    // delete request
    async modelDelete(id: string) {
        const deleteModel = await this.modelsRepository.delete(id);
        return deleteModel.affected;
    }

}
