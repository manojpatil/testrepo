import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Project, ProjectDocument } from "src/schemas/project.schema";

@Injectable()
export class ProjectService {

    constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}
    
    async readAll(): Promise<Project[]> {
        return await this.projectModel.find().exec();
    }

    async readById(id): Promise<Project> {
        return await this.projectModel.findById(id).exec();
    }

  

   
}