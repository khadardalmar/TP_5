import { should } from 'chai';
import tp5 from '../lib';

should(); // Modifies objects prototype to include the 'should' property
describe('tp-5', function () {
  it('should have a version number!', function () {
    
 	tp5.should.have.property('VERSION');
  });
});







