import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitController } from './controllers/commit.controller';
import { ProjectController } from './controllers/project.controller';
import { Commit, CommitSchema } from './schemas/commit.schema';
import { Project, ProjectSchema } from './schemas/project.schema';
import { CommitService } from './services/commit.service';
import { ProjectService } from './services/project.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/cicd-cli'),
            MongooseModule.forFeature([{name: Commit.name, schema: CommitSchema},{name: Project.name, schema: ProjectSchema}])],
  controllers: [AppController, CommitController,ProjectController],
  providers: [AppService, CommitService,ProjectService],
})
export class AppModule {}