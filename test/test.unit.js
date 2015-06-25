// chai must be required through requirejs, chai-as-promised
// sinon and should are already exported to the global scope
var assert = chai.assert;
var expect = chai.expect;

describe('Testing environment', function () {
	it('should work with chai', function () {
		assert.equal('test', 'test');
		expect('test').to.equal('test');
		('test').should.equal('test');
	});
	it("should work with sinon", function () {
		var spy = sinon.spy();
		spy.should.not.have.been.called;
	});
	it('should work asynchronously', function(done){
		// using deferred syntax
		var promise = new Promise(function(resolve, reject) { setTimeout(resolve, 500); });
		promise.should.eventually.be.fulfilled.notify(done);
	});
});