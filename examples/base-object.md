Description
===========
Allows you to work in a typical class context with inheritance.


Example
===========

Simple inheritance
```javascript
var MyClass = SimpleJSLib.BaseObject.inherit(function(me, _protected){

	// protected

	_protected.myValue = 'value';

	_protected.doSomething = function(){
		console.log('something')
	};

	// public

	me.getMyValue = function(){
		return _protected.myValue;
	}


	return me;
});


var MySubClass = MyClass.inherit(function(me, _protected){

	me.anotherFunction = function(){
		_protected.doSomething();
	}

	return me;
});

var myClassInstance = MyClass.construct();
console.log(myClassInstance.getMyValue());


var mySubClassInstance = MyClass.construct();
console.log(mySubClassInstance.anotherFunction());
    
```

Using a constructor

```javascript
var MyClass = SimpleJSLib.BaseObject.inherit(function(me, _protected){

	_protected.valueOne = null;

	_protected.valueTwo = null;
	
	_protected.construct =  function(parameters){
		_protected.valueOne = parameters[0];
		_protected.valueTwo = parameters[1];
	};
	return me;
});

var myClassInstance = MyClass.construct('valueOne', 'valueTwo');     
```

Singelton

```javascript
var Singelton = SimpleJSLib.BaseObject.inherit(function(me, _protected){
	return me;
}).construct(); // mention the construct!
```