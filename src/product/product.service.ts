import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from "./schemas/product.entity";
import {Repository, UpdateResult} from "typeorm";
import {CreateProductDto} from "./dto/create-product.dto";
import {FileService, FileType} from "../file/file.service";
import {UpdateProductDto} from "./dto/update-product.dto";
import { from, Observable } from 'rxjs';


@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        private fileService: FileService
    ) {}


    // get one request
    async productOne(id: string): Promise<Product> {
        return await this.productRepository.findOne(id)
    }

    // get all request
    async productAll(): Promise<Product[]> {
        return await this.productRepository.find()
    }

    // create request
    async productCreate(dto: CreateProductDto, picture): Promise<Product>{
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)  // add picture file
        const newProduct = await this.productRepository.create({...dto, picture: picturePath})
        return await this.productRepository.save(newProduct)

    }

    // delete request
    async productDelete(id: string) {
        const deleteProduct = await this.productRepository.delete(id)
        return deleteProduct.affected
    }

    // update request
     productUpdate(id: string, product: UpdateProductDto, picture): Observable<UpdateResult>{
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        return from(this.productRepository.update(id,  {...product, picture: picturePath}))
    }

}