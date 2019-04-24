import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: () => faker.lorem.sentence(),
  date: () => faker.date.future(),

  afterCreate(collection, server) {
    collection.author = server.create('user');
    collection.save();
  }
});
