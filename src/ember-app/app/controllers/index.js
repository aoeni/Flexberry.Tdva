import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tdva.caption'),
          title: i18n.t('forms.application.sitemap.tdva.title'),
          children: [{
            link: 'i-i-s-tdva-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.tdva.i-i-s-tdva-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.tdva.i-i-s-tdva-посад-талон-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-tdva-пассажир-l',
            caption: i18n.t('forms.application.sitemap.tdva.i-i-s-tdva-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.tdva.i-i-s-tdva-пассажир-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-tdva-коды-l',
            caption: i18n.t('forms.application.sitemap.tdva.i-i-s-tdva-коды-l.caption'),
            title: i18n.t('forms.application.sitemap.tdva.i-i-s-tdva-коды-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-tdva-класс-билета-l',
            caption: i18n.t('forms.application.sitemap.tdva.i-i-s-tdva-класс-билета-l.caption'),
            title: i18n.t('forms.application.sitemap.tdva.i-i-s-tdva-класс-билета-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-tdva-рейс-l',
            caption: i18n.t('forms.application.sitemap.tdva.i-i-s-tdva-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.tdva.i-i-s-tdva-рейс-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})