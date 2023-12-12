import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTdvaКлассБилетаLForm from './forms/i-i-s-tdva-класс-билета-l';
import IISTdvaКодыLForm from './forms/i-i-s-tdva-коды-l';
import IISTdvaПассажирLForm from './forms/i-i-s-tdva-пассажир-l';
import IISTdvaПосадТалонLForm from './forms/i-i-s-tdva-посад-талон-l';
import IISTdvaРейсLForm from './forms/i-i-s-tdva-рейс-l';
import IISTdvaКлассБилетаEForm from './forms/i-i-s-tdva-класс-билета-e';
import IISTdvaКодыEForm from './forms/i-i-s-tdva-коды-e';
import IISTdvaПассажирEForm from './forms/i-i-s-tdva-пассажир-e';
import IISTdvaПосадТалонEForm from './forms/i-i-s-tdva-посад-талон-e';
import IISTdvaРейсEForm from './forms/i-i-s-tdva-рейс-e';
import IISTdvaИнфБроньModel from './models/i-i-s-tdva-инф-бронь';
import IISTdvaКлассБилетаModel from './models/i-i-s-tdva-класс-билета';
import IISTdvaКодыModel from './models/i-i-s-tdva-коды';
import IISTdvaПассажирModel from './models/i-i-s-tdva-пассажир';
import IISTdvaПосадТалонModel from './models/i-i-s-tdva-посад-талон';
import IISTdvaРейсModel from './models/i-i-s-tdva-рейс';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tdva-инф-бронь': IISTdvaИнфБроньModel,
    'i-i-s-tdva-класс-билета': IISTdvaКлассБилетаModel,
    'i-i-s-tdva-коды': IISTdvaКодыModel,
    'i-i-s-tdva-пассажир': IISTdvaПассажирModel,
    'i-i-s-tdva-посад-талон': IISTdvaПосадТалонModel,
    'i-i-s-tdva-рейс': IISTdvaРейсModel
  },

  'application-name': 'Tdva',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tdva',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tdva',
          title: 'Tdva'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        tdva: {
          caption: 'Tdva',
          title: 'Tdva',
          'i-i-s-tdva-посад-талон-l': {
            caption: 'Посад талон',
            title: ''
          },
          'i-i-s-tdva-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          },
          'i-i-s-tdva-коды-l': {
            caption: 'Коды',
            title: ''
          },
          'i-i-s-tdva-класс-билета-l': {
            caption: 'Класс билета',
            title: ''
          },
          'i-i-s-tdva-рейс-l': {
            caption: 'Рейс',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tdva-класс-билета-l': IISTdvaКлассБилетаLForm,
    'i-i-s-tdva-коды-l': IISTdvaКодыLForm,
    'i-i-s-tdva-пассажир-l': IISTdvaПассажирLForm,
    'i-i-s-tdva-посад-талон-l': IISTdvaПосадТалонLForm,
    'i-i-s-tdva-рейс-l': IISTdvaРейсLForm,
    'i-i-s-tdva-класс-билета-e': IISTdvaКлассБилетаEForm,
    'i-i-s-tdva-коды-e': IISTdvaКодыEForm,
    'i-i-s-tdva-пассажир-e': IISTdvaПассажирEForm,
    'i-i-s-tdva-посад-талон-e': IISTdvaПосадТалонEForm,
    'i-i-s-tdva-рейс-e': IISTdvaРейсEForm
  },

});

export default translations;
