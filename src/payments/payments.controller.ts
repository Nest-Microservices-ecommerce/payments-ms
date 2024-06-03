import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment-session.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession(@Body() paymentSessionDto: PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
  }

  @Get('success')
  paymentSuccess() {
    return 'payment success';
  }

  @Get('cancelled')
  paymentCancel() {
    return 'payment cancel';
  }

  @Post('webhook')
  async paymentWebhook() {
    return 'payment webhook';
  }
}
