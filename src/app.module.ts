import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';

@Module({
  imports: [ItemsModule],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class AppModule {}
