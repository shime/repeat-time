var repeat = require("./");
var expect = require('expect.js')

it('takes a time written in simple english', function(done){

  var a = 0;

  repeat('100 milliseconds', function(){
    a++;
  });

  setTimeout(function(){
    expect(a).to.equal(3)
    done();
  }, 350);

});

it('returns timeout id', function(done){

  var id = repeat('50 milliseconds', function(){
    throw new Error('should be cleaned');
  });

  clearTimeout(id);

  setTimeout(function(){
    done();
  }, 100);

});

it('takes initial parameters optionally', function(done){

  repeat('200ms', 3, 14, 156, function(a, b, c){

    expect(a).to.equal(3);
    expect(b).to.equal(14);
    expect(c).to.equal(156);
    done();

  });

});
