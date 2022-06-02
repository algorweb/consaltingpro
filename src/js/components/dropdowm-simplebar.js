// Подключение плагина кастом-скролла
import vars from '../_vars';
import SimpleBar from 'simplebar';

if (document.querySelector('[data-simplebar]')) {
  new SimpleBar(document.querySelector('.menu__wrap-dropdown'));
}
