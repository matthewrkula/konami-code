var konami = function(callback){
    state = 0;
    keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
    
    document.addEventListener("keydown", function(e){
        if(e.which == keys[state])
            state++;
        else
            state = 0;
        
        if(state == 11){
            if(callback)
                callback();
            state = 0;
        }
        
    });
};
