import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    driver: "postgresql",
    database: "to-do",
    host: "ep-aged-dust-a5mobltt.us-east-2.aws.neon.tech",
    username: "to-do_owner",
    password: "LDjhw9tO4TAg",
    ssl: true,
    synchronize: true,
    autoLoadEntities: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//postgresql://to-do_owner:LDjhw9tO4TAg@ep-aged-dust-a5mobltt.us-east-2.aws.neon.tech/to-do?sslmode=require	