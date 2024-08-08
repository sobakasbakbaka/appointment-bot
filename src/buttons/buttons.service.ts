import { WELCOME_BUTTON } from '@/shared/constants';
import { Injectable } from '@nestjs/common';
import { Markup } from 'telegraf';

@Injectable()
export class ButtonsService {
  createWelcomeButtons() {
    return Markup.keyboard(
      Object.keys(WELCOME_BUTTON).map((key) =>
        Markup.button.callback(
          WELCOME_BUTTON[key].label,
          WELCOME_BUTTON[key].value,
        ),
      ),
    );
  }
}
