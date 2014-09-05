## repeat-time

Declarative setInterval based on [english-time](http://github.com/azer/english-time).

Basically a `s/setTimeout/setInterval/g` of [after-time](http://github.com/azer/after-time).

```js
repeat = require('repeat-time')

repeat('150ms', function(){
  console.log('yo!')
})

repeat('5 minutes', function(){
  console.log('hello!')
})

repeat('3 Hours, 15 Minutes and 20 Milliseconds', function(){
  console.log('yo!')
})

repeat('3h 15m 20ms', 'foo', 'bar', function(foo, bar){
  foo // => 'foo'

  bar // => 'bar'
})
```

## Install

```bash
$ npm install repeat-time
```

## License

MIT
