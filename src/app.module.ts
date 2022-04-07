import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { ItemsController } from './items/items.controller';

@Module({
  imports: [ItemsModule],
  controllers: [ItemsController],
  providers: [],
})
export class AppModule {}
