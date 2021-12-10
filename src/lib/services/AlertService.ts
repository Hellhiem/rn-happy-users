import { Alert } from 'react-native';

import { i18n } from 'config/translations';

const baseTranslationPath = 'Common:';

export class AlertService {
  static show(message: string): void {
    Alert.alert(
      i18n.t(`${baseTranslationPath}somethingWentWrong`),
      message,
      [
        {
          text: i18n.t(`${baseTranslationPath}ok`),
        },
      ],
      {
        cancelable: false,
      },
    );
  }
}
