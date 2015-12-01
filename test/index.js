import assert from 'assert';
import tp5 from '../lib';

describe('tp-5', function () {
  it('should have a version number!', function () {
    assert(typeof tp5.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});

