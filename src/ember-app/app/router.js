import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tdva-класс-билета-l');
  this.route('i-i-s-tdva-класс-билета-e',
  { path: 'i-i-s-tdva-класс-билета-e/:id' });
  this.route('i-i-s-tdva-класс-билета-e.new',
  { path: 'i-i-s-tdva-класс-билета-e/new' });
  this.route('i-i-s-tdva-коды-l');
  this.route('i-i-s-tdva-коды-e',
  { path: 'i-i-s-tdva-коды-e/:id' });
  this.route('i-i-s-tdva-коды-e.new',
  { path: 'i-i-s-tdva-коды-e/new' });
  this.route('i-i-s-tdva-пассажир-l');
  this.route('i-i-s-tdva-пассажир-e',
  { path: 'i-i-s-tdva-пассажир-e/:id' });
  this.route('i-i-s-tdva-пассажир-e.new',
  { path: 'i-i-s-tdva-пассажир-e/new' });
  this.route('i-i-s-tdva-посад-талон-l');
  this.route('i-i-s-tdva-посад-талон-e',
  { path: 'i-i-s-tdva-посад-талон-e/:id' });
  this.route('i-i-s-tdva-посад-талон-e.new',
  { path: 'i-i-s-tdva-посад-талон-e/new' });
  this.route('i-i-s-tdva-рейс-l');
  this.route('i-i-s-tdva-рейс-e',
  { path: 'i-i-s-tdva-рейс-e/:id' });
  this.route('i-i-s-tdva-рейс-e.new',
  { path: 'i-i-s-tdva-рейс-e/new' });
});

export default Router;
