import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Commit } from "src/schemas/commit.schema";
import { CommitService } from "src/services/commit.service";

@Controller('commits')
export class CommitController {
    constructor(private readonly commitService: CommitService){}

    @Get()
    async fetchAll(@Res() response) {
        const commits = await this.commitService.readAll();
        return response.status(HttpStatus.OK).json({
            commits
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const commits = await this.commitService.readById(id);
        return response.status(HttpStatus.OK).json({
            commits
        })
    }

    @Get('/user/:author_email')
    async DashboardKPIs(@Res() response, @Param('author_email') author_email) {
        const TotalCommitsByUser = await this.commitService.totalCommits(author_email);
        const ProjectsByUser = await this.commitService.distinctProjects(author_email);
        const TotalProjectsByUser = await this.commitService.totalProjects(author_email);
        const CommitsByDate = await this.commitService.commitsByDate(author_email);
        return response.status(HttpStatus.OK).json({
            TotalCommitsByUser,TotalProjectsByUser,ProjectsByUser,CommitsByDate
        })
    }

      

}