if(typeof(SimpleJSLib)==='undefined'){
    var SimpleJSLib = {}; // define namespace
}
SimpleJSLib.BaseObject = function(){
    // returns an object you wether can inherit from or instantiate it
    var createInheritObject = function(inheritFunctions){
        return {
            // instantiate the current class
            // iterates through all functions which the class inherits from and calls them
            construct : function(){
                var me = {}, _protected = {};
                for(var i = 0; i < inheritFunctions.length; i++){
                    me = inheritFunctions[i].call(me, me, _protected);
                    if(typeof(me)==='undefined'){
                        throw 'Inherit function did not return "me"';
                    }
                }
                // if a constructor is defined we call them and deliver the arguments this function was called with
                if(typeof(_protected.construct)!=='undefined'){
                    _protected.construct.call(me, arguments);
                }
                return me;
            },
            // clones the pointers to the functions you inherit from
            // and returns another object you can instantiate or inherit from
            inherit : function(inheritFunction){
                var _inheritFunctions = inheritFunctions.slice(0); // clone
                _inheritFunctions.push(inheritFunction);
                return createInheritObject.call(window, _inheritFunctions);
            }
        };
    };

    return {
        // allows you to inherit directly from BaseObject
        inherit : function(inheritFunction){
            // this is the first call of the function, so the the inheritFunctions array just contains one function
            return createInheritObject.call(window, [inheritFunction]);
        }
    }
}();