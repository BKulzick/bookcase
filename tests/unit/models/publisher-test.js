// noinspection JSAnnotator
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('publisher', 'Unit | Model | publisher', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

test('it has an attribute: name', function(assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('name') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: author', function(assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('author') > -1;
  assert.ok(hasAttr);
});


