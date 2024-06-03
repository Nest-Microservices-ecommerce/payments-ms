import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession() {
    return 'create payment session';
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
