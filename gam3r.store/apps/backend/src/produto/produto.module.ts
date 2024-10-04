import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { DbModule } from 'src/db/db.module';
import { ProdutoPrisma } from './produto.prisma';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
  providers: [ProdutoPrisma],
})
export class ProdutoModule {}
