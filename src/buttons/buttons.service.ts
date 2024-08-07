import { WELOCME_BUTTON } from '@/shared/constants';
import { Injectable } from '@nestjs/common';
import { Markup } from 'telegraf';

@Injectable()
export class ButtonsService {
  createWelcomeButtons() {
    return Markup.keyboard(
      Object.keys(WELOCME_BUTTON).map((key) =>
        Markup.button.callback(
          WELOCME_BUTTON[key].label,
          WELOCME_BUTTON[key].value,
        ),
      ),
    );
  }
}
