import { AppRoutingModule } from './app.routing-module';
import { ConfigurationModule } from './infrastructure/configuration/configuration.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { Module } from '@nestjs/common';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { PrismaService } from './prisma.service';

@Module({
    imports: [AppRoutingModule, ConfigurationModule, DatabaseModule],
    controllers: [TaskController],
    providers: [TaskService, PrismaService]
})
export class AppModule {}
