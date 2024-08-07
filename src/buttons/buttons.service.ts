import { Injectable } from '@nestjs/common';
import { Markup } from 'telegraf';

@Injectable()
export class ButtonsService {
  createWelcomeButtons() {
    return Markup.keyboard([
      Markup.button.callback('Create appointment', 'callback_create'),
      Markup.button.callback('Create TEST appointment', 'callback_create_test'),
    ]);
  }
}
