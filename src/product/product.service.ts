import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from "./schemas/product.entity";
import {Repository} from "typeorm";
import {CreateProductDto} from "./dto/create-product.dto";
import {FileService, FileType} from "../file/file.service";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        private fileService: FileService
    ) {}


    async productCreate(dto: CreateProductDto, picture): Promise<Product>{
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        const newProduct = await this.productRepository.create({...dto, picture: picturePath})
        return await this.productRepository.save(newProduct)

    }

    async productOne(id: string): Promise<Product> {
        return await this.productRepository.findOne(id)
    }


    async productAll(): Promise<Product[]> {
        return await this.productRepository.find()
    }

    async productDelete(id: string) {
        const deleteProduct = await this.productRepository.delete(id)
        return deleteProduct.affected
    }
}