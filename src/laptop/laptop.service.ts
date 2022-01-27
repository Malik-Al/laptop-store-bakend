import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Laptop } from '../entity/laptop.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateLaptopDto } from './dto/create-laptop.dto';
import { FileService, FileType } from '../file/file.service';
import { UpdateLaptopDto } from './dto/update-laptop.dto';
import { from, Observable } from 'rxjs';

@Injectable()
export class LaptopService {
  constructor(
    @InjectRepository(Laptop)
    private laptopRepository: Repository<Laptop>,
    private fileService: FileService,
  ) {}

  // get one request
  async laptopOne(id: string): Promise<Laptop> {
    return await this.laptopRepository.findOne(id);
  }

  // get all request
  async laptopAll(): Promise<Laptop[]> {
    return await this.laptopRepository.find();
  }

  // create request
  async laptopCreate(dto: CreateLaptopDto, picture): Promise<Laptop> {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture); // add picture file
    const newLaptop = await this.laptopRepository.create({
      ...dto,
      picture: picturePath,
    });
    return await this.laptopRepository.save(newLaptop);
  }

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
    return await this.laptopRepository.findOne({ name })
  }
}
