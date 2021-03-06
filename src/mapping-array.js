SimpleJSLib.MappingArray = SimpleJSLib.BaseObject.inherit(function(me, _protected){

    _protected.array = [];
    _protected.mappingArray = {};

    me.length = 0;


    me.add = function(key, data){
        var index = _protected.array.push(data) - 1;
        _protected.mappingArray[key] = index;
        me.length = _protected.array.length
    };

    me.remove = function(key){
        if(typeof(_protected.mappingArray[key]) != 'undefined'){
            var index = _protected.mappingArray[key];

            delete _protected.mappingArray[key];
            _protected.array.splice(index, 1);

            for (var key in _protected.mappingArray) {
               if(_protected.mappingArray[key] > index){
                    _protected.mappingArray[key] -= 1;
               }
            }
            me.length = _protected.array.length
        }
      
    }

    me.getByIndex = function(index){
        if(index == null)
            return null;
        if(index < me.length)
            return _protected.array[index];
        return null;
    }

    me.getIndexByKey = function(key){
        if(key == null)
            return null;
        if(typeof(_protected.mappingArray[key]) !== 'undefined')
            return _protected.mappingArray[key];
        return null;
    }

    me.getByKey = function(key){
        if(key == null)
            return null;
        return me.getByIndex(me.getIndexByKey(key));
    }

    me.each = function(callbackIterator, makeRemovingSafe){
        var array = _protected.array;
        if(typeof(makeRemovingSafe) != 'undefined' && makeRemovingSafe){
            array = array.slice();
        }

        var callbackIteratorReturnValue = null;
        for (var i = 0; i < array.length; i++) {
            callbackIteratorReturnValue = callbackIterator(i, array[i]);
            if(typeof(callbackIteratorReturnValue) != 'undefined' && callbackIteratorReturnValue === false)
                return null;
        };
        return null;
    }

    me.getLast = function(index){
        return me.getByIndex(me.length - 1);
    }

    me.cloneArray = function(){
        return _protected.array.slice();
    }



    return me;
});