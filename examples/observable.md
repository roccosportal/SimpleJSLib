Example
===========

If you need to know when a value of a variable got changed, this could be quite useful.



```javascript
var observable = SimpleJSLib.Observable.construct('initial value');
observable.listen(function(data){
	console.log('Value changed to: ' + data);
});

console.log(observable.get());
observable.set('new value');

observable.set('another value');
    
```