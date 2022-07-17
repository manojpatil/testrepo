import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommitDocument = Commit & Document;

@Schema()
export class Commit {

    @Prop()
    _id: string;

    @Prop()
    build_app_links: string;

    @Prop()
    author: string;

    @Prop()
    userId: string;

    @Prop()
    author_email: string;

    @Prop()
    branch_name: string;

    @Prop()
    hash: string;

    @Prop()
    commit_date: string;

    @Prop()
    buildId: string;

    @Prop()
    commit_message: string;

    @Prop()
    projectId: string;

    @Prop()
    projectName: string;

    @Prop()
    status: string;

    @Prop()
    platform: string;

    @Prop()
    build_number: string;

    @Prop()
    createdDate: string;

    @Prop()
    updatedDate: string;

    @Prop()
    createdAt: string;

    @Prop()
    updatedAt: string;
}

export const CommitSchema = SchemaFactory.createForClass(Commit);