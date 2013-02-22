SimpleJSLib
===========

Description
--------------
Just a library of simple javascript functions which could be useful sometimes.

Usage
--------------
Include the function/object you need.
You can call it via:

```javascript
var instance = SimpleJSLib.<Class>.construct();
```
or inherit from via:
```javascript
// look at /examples/base-object.md
var newClass = SimpleJSLib.<Class>.inherit(function(me, _protected){
	// alter contents here
	return me;
});
```
    
Have a look in the examples folder.


Contents
--------------
* BaseObject

	Lets you create a class you can inherit from and instantiate.

* EventHandler

	Inherit from this class and you can fire events and 
somebody else can listen to it.

* MappingArray

	A class that allows you to associate a key to a value in an array.

* Observable

	If you need to know when a value of a variable got changed, this could be quite useful.


* SingleRequestQueue

	This object allows you to handle a request queue.
You weather can append callbacks to a queue than triggers after a certain time or you
can run asynchronus request and only the last was will be handled.





        


