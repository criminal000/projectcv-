i=5; 
ind=setInterval(function() {
    if(i == 0){ 
        console.log('BOOOM');
        clearInterval(ind);
        
    }
    console.log(i--);
}, 1000 )