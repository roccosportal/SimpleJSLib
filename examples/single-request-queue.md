Example
===========

Execute last request after a certain time 
--------------
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
     
     
Execute asynchronus request but only handle the last
--------------

If the first request needs longer than the last request it may happens that the user get an old search result.

	var queue = SimpleJSLib.SingleRequestQueue();
	// returns a request object with the function isLatestRequest()
	var request = queue.runAsynchronRequest();
	$.getJSON('url', {
			search : $('#searchbox').val()
		}, function(data) {
			if(request.isLatestRequest()){
				// handle request
			}
	});		
     