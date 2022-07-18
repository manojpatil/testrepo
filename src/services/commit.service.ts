import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Commit, CommitDocument } from "src/schemas/commit.schema";

@Injectable()
export class CommitService {

    constructor(@InjectModel(Commit.name) private commitModel: Model<CommitDocument>) {}
    
    async readAll(): Promise<Commit[]> {
        return await this.commitModel.find().exec();
    }

    async readById(id): Promise<Commit> {
        console.log('id :' + id)
        return await this.commitModel.findById(id).exec();
    }

    async totalCommits(userId) {
        console.log('userId :' + userId)
        return  await this.commitModel.find({ userId: userId }).count().exec();
      }

    /* This is returning Project Names by User  
    async totalProjects(userId) {
        console.log('userId :' + userId)
        return  await this.commitModel.find().distinct("projectName").where({'userId':userId}).exec();
      }
    */
    async distinctProjects(userId) {
        console.log('userId :' + userId)
        return  await this.commitModel.find({ userId: userId }).distinct("projectId").exec();
      }
    
    async totalProjects(userId) {
        console.log('userId :' + userId)
        return await (await this.commitModel.distinct("projectId").where({'userId':userId})).length;
      }
    
      async commitsByDate(userId) {
        console.log('userId :' + userId)
        return await this.commitModel.distinct('commit_date').where({'userId':userId}).exec();
      } 
      

   
}