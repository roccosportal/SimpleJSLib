Example
===========
Allows you to map and array to an identifier (like an database id).

--------------
```javascript
var Author = SimpleJSLib.BaseObject.inherit(function(me, _protected){

	_protected.books = null;

	_protected.construct = function(){
		_protected.books = SimpleJSLib.MappingArray.construct();
	}

	me.addBook = function(bookId, book){
		_protected.books.add(bookId, book);
	}

	me.getBookById = function(bookId){
		return _protected.books.getByKey(bookId);
	}

	me.iterateBooks = function(callbackIterator, makeRemovingSafe){
		return _protected.books.each(callbackIterator, makeRemovingSafe);
	}
	
	return me;
});


var GeorgeOrwell = Author.construct();
GeorgeOrwell.addBook('1', { title : 'Animal Farm', year : '1945'});
GeorgeOrwell.addBook('2', { title : 'Nineteen Eighty-Four', year : '1949'});


console.log(GeorgeOrwell.getBookById('1')); 


GeorgeOrwell.iterateBooks(function(index, book){
	console.log(book); 
});    
```     
     
