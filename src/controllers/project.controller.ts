import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Project } from "src/schemas/project.schema";
import { ProjectService } from "src/services/project.service";

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService){}

    @Get()
    async fetchAll(@Res() response) {
        const projects = await this.projectService.readAll();
        return response.status(HttpStatus.OK).json({
            projects
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const projects = await this.projectService.readById(id);
        return response.status(HttpStatus.OK).json({
            projects
        })
    }

    


}