import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller';
import { PedidoPrisma } from './pedido.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [PedidoController],
  providers: [PedidoPrisma],
})
export class PedidoModule {}
