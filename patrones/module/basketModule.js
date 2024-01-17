var basketModule=(function(){
    var basket=[];
    function doSomethingPrivate(){
        console.log("function private")
    }

    function doSomethingElsePrivate(){
        console.log("other funcion private")
    }

    return {
        addItem:function(values){
            basket.push(values);
        },
        getItemCount:function(){
            return basket.length;
        },
        doSomething:doSomethingElsePrivate(),
        getTotal:function(){
            var q=this.getItemCount();
            p=0;
            while(q--){
                p+=basket[q].price;
            }
            return p;
        }

    }


}());

basketModule.addItem({
    item:'break',
    price:0.5
});
basketModule.addItem({
    item:'butter',
    price:0.3
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

//the following will not work
console.log(basketModule.basket);

