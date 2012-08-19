Example
===========


```javascript
    var Module1 = function(){
		var me = SimpleJSLib.EventHandler();
		
		me.doSomething = function(){
			// do something
			me.fire("done");
		}
		return me;
    }();
    
   var Module2 = function(){
		var me = {};
		me.init = function(){
			Module1.attach("done", module1onDone);
		}
		
		me.module1onDone = function(){
			// Module 1 did something
		}
		
		me.destroy = function(){
			Module1.detach("done", module1onDone);
		}
		
		return me;
    }();
    
    
    Module2.init();
    Module1.doSomething();
    Module2.destory();
    
```     
     

  