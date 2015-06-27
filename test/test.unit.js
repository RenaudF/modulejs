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

describe('Testing module loader', function(){
	it('should setup ok', function(){
		var app = modulejs();

		expect(app).to.be.defined;
		expect(Object.isFrozen(app)).to.be.true;
		expect(app).to.have.property('register').to.be.an('function');
		expect(app).to.have.property('moduleMap').to.be.an('object');
		expect(Object.keys(app)).to.have.length(2);
	});
	it('should register modules', function(){
		var app = modulejs();
		var static = {}, spy = sinon.spy(function(){ return static; });
		app.register('module', spy);

		expect(app.moduleMap).to.have.property('module').to.be.an('object').to.equal(static);
		expect(Object.keys(app.moduleMap)).to.have.length(1);
		spy.should.have.been.calledOnce;
	});
	it('should not override modules', function(){
		var app = modulejs();
		var static1 = {}, spy1 = sinon.spy(function(){ return static1; });
		var static2 = {}, spy2 = sinon.spy(function(){ return static2; });
		app.register('module', spy1);
		app.register('module', spy2);

		spy1.should.have.been.calledOnce;
		spy2.should.not.have.been.called;
		expect(app.moduleMap.module).to.equal(static1);
	});
});