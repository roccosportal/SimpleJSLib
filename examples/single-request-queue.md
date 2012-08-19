Example
===========

Execute last request after a certain time 
--------------
```javascript
     var queue = SimpleJSLib.SingleRequestQueue();
     queue.setTimeout(500); // after 500ms the last request gets triggered
     
     // jquery is not necessary for SimpleJSLib
     $('#searchbox').keyup(function(){
		// first parameter is an object that can contain necessary data
		// for the callback
		queue.addToQueue({val : $('#searchbox').val()}, function(data){
			// do something
			alert(data.val);
		});
     });
```     
     
Execute asynchronus request but only handle the last
--------------

If the first request needs longer than the last request it may happens that the user get an old search result.

```javascript
	var queue = SimpleJSLib.SingleRequestQueue();
	// returns a request object with the function isLatestRequest()
	
	function search(searchphrase){
	
		var request = queue.runAsynchronRequest();
		$.getJSON('url', {
				search : searchphrase
			}, function(data) {
				if(request.isLatestRequest()){
					// handle request
				}
		});
	}
	
	search('abcdefghijklmnop');
	search('b');
 ```         