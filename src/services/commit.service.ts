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

    async totalCommits(author_email) {
        console.log('author_email :' + author_email)
        return  await this.commitModel.find({ author_email: author_email }).count().exec();
      }

    /* This is returning Project Names by User  
    async totalProjects(author_email) {
        console.log('author_email :' + author_email)
        return  await this.commitModel.find().distinct("projectName").where({'author_email':author_email}).exec();
      }
    */
    async distinctProjects(author_email) {
        console.log('author_email :' + author_email)
        return  await this.commitModel.find({ author_email: author_email }).distinct("projectId").exec();
      }
    
    async totalProjects(author_email) {
        console.log('author_email :' + author_email)
        return await (await this.commitModel.distinct("projectId").where({'author_email':author_email})).length;
      }
    
      async commitsByDate(author_email) {
        console.log('author_email :' + author_email)
        return await this.commitModel.distinct('commit_date').where({'author_email':author_email}).exec();
      } 
      

   
}