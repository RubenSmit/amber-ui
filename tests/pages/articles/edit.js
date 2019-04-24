import {
  create,
  visitable
} from 'ember-cli-page-object';
import form from './form';

export default create({
  visit: visitable('/articles/:id/edit'),
  form
});
