import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Laptop } from '../entity/laptop.entity';
import { Repository, UpdateResult, Like } from 'typeorm';
import { CreateLaptopDto } from './dto/create-laptop.dto';
import { FileService, FileType } from '../file/file.service';
import { UpdateLaptopDto } from './dto/update-laptop.dto';
import { from, Observable } from 'rxjs';
import {ModelsService} from "../models/models.service";
import {Models} from "../entity/models.entity";
import {CreateModelsDto} from "../models/dto/create-models.dto";


@Injectable()
export class LaptopService {
  constructor(
    @InjectRepository(Laptop)
    private laptopRepository: Repository<Laptop>,
    private fileService: FileService,
    @InjectRepository(Models)
    private modelsRepository: Repository<Models>,
  ) {}

  // get one request
  async laptopOne(id: string): Promise<Laptop> {
    return await this.laptopRepository.findOne(id);
  }

  // get all request
  async laptopAll(): Promise<Laptop[]> {
    return await this.laptopRepository.find({ relations: ['models'] });
  }


  // create request


  async laptopCreate(dto: CreateLaptopDto, picture, models) {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);

    const newLaptop = await this.laptopRepository.create({
      ...dto,
      picture: picturePath,
      models: models
    });
    return  await this.laptopRepository.save(newLaptop)
    // await this.modelsUpdate(models, newLaptop) // 1 option
    // const modelService = await this.modelsRepository.create({ // 2 option
    //   laptop: [newLaptop]
    // })
    // await this.modelsRepository.save(modelService)

  }

  // modelsUpdate(modelId, newLaptop): Observable<UpdateResult>{
  //   return from(this.modelsRepository.update(modelId,{...CreateModelsDto, laptop: [newLaptop]}))
  // }

  // delete request
  async laptopDelete(id: string) {
    const deleteLaptop = await this.laptopRepository.delete(id);
    return deleteLaptop.affected;
  }


  // update request
  laptopUpdate(
    id: string,
    laptop: UpdateLaptopDto,
    picture,
  ): Observable<UpdateResult> {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    return from(
      this.laptopRepository.update(id, { ...laptop, picture: picturePath }),
    );
  }

  async search(name: string): Promise<Laptop | undefined> {
    return await this.laptopRepository.findOne({name})

    // return await this.laptopRepository.findOne({name: Like("%out #%")})
  }
}
