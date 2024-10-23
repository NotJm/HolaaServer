import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Incident, IncidentSchema } from './schemas/incident.schema';
import { IncidentController } from './incident.controller';
import { IncidentService } from './incident.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Incident.name, schema: IncidentSchema }]),
  ],
  controllers: [IncidentController],
  providers: [IncidentService, JwtService],
  exports: [IncidentService]
})
export class IncidentModule {}  
