import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { isDate, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type IncidentDocument = Incident & Document;

@Schema()
export class Incident {
  @Prop({ required: true })
  username: string;

  @Prop({ default: 0 })
  failedAttempts: number;

  @Prop()
  lastAttempt: Date;

  @Prop({ default: "open" })
  state: string;

  @Prop({ default: false })
  isBlocked: boolean

  @Prop({ default: null })
  blockExpiresAt: Date; 



}

export const IncidentSchema = SchemaFactory.createForClass(Incident).set('versionKey', false);