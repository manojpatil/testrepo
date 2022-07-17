import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {

    @Prop()
    _id: string;

    @Prop()
    branches: string;

    @Prop()
    provider: string;

    @Prop()
    isAutoBuild: string;

    @Prop()
    status: string;

    @Prop()
    xcodeVersion: string;

    @Prop()
    balanceBuildMins: string;

    @Prop()
    usedBuildMins: string;

    @Prop()
    rechargeId: string;

    @Prop()
    balanceSharedTo: string;

    @Prop()
    balanceSharedFrom: string;

    @Prop()
    isManualBuild: string;

    @Prop()
    name: string;

    @Prop()
    projectId: string;

    @Prop()
    userId: string;

    @Prop()
    github_repo: string;

    @Prop()
    github_repo_id: string;

    @Prop()
    repo: string;

    @Prop()
    githubtoken: string;

    @Prop()
    platform: string;

    @Prop()
    rechargeDate: string;

    @Prop()
    validDate: string;

    @Prop()
    createdDate: string;

    @Prop()
    updatedDate: string;

    @Prop()
    createdAt: string;

    @Prop()
    updatedAt: string;

}

export const ProjectSchema = SchemaFactory.createForClass(Project);