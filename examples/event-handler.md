Example
===========
If an module inherits from SimpleJSLib.EventHandler its allows the module to fire events and allows others to attach to the events.



```javascript
var One = SimpleJSLib.EventHandler.inherit(function(me, _protected){
		me.doSomething = function(){
			// do something
			me.fireEvent("done");
		}
		return me;

 }).construct(); // singelton

 
    
var Two = SimpleJSLib.BaseObject.inherit(function(me, _protected){

	_protected.onDone = function(){
		// One did something
		console.log('onDone')
	}

	me.init = function(){
		One.attachEvent("done", _protected.onDone);
	}
	
	me.destroy = function(){
		One.detachEvent("done", _protected.onDone);
	}
	
	return me;
}).construct(); // singelton
    
    
Two.init();
One.doSomething();
Two.destroy();
    
```