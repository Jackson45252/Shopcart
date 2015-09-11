data = {
    product: [{
        name: 'HTML5',
        image: 'image/html5.jpg',
        price: 840,
        link: 'http://www.tenlong.com.tw/items/0596806027?item_id=56727',
        amount: 10
    }, {
        name: 'CSS3',
        image: 'image/css3.jpg',
        price: 354,
        link: 'http://www.tenlong.com.tw/items/7111426517?item_id=607708',
        amount: 10
    }, {
        name: 'Javascript',
        image: 'image/javascirpt.jpg',
        price: 490,
        link: 'http://www.tenlong.com.tw/items/986684014X?item_id=34657',
        amount: 5
    }, {
        name: 'JQuery',
        image: 'image/jquery.jpg',
        price: 612,
        link: 'http://www.tenlong.com.tw/items/9865712725?item_id=997434',
        amount: 8
    }],
    shopcart:[{
        name:'123',
        price:'',
        amount:''}
        ]
};
/*商品列表*/
list_build();
alert(data.shopcart[0].name);
    function list_build(){
    var len = data.product.length;

    for(i=0;len>i;i++){
        var name= data.product[i].name;
        var price = data.product[i].price;
        var amount = data.product[i].amount;
        var link = data.product[i].link;
        var image = data.product[i].image;
         var product_list ='<li id="item'+i+'" class="book"><a href="'+link+'"><img src="'+image+'" width="100"  /></a><h2>'+name+'</h2><p class="price">價格:'+price+'元</p><p class="amount">尚餘數量:'+amount+'</p><p class="add"><select>';;
        for(x=1;x<amount+1;x++){
        product_list = product_list+'<option value="'+x+'">'+x+'</option>'; 
    }
   
    $('.product').append(product_list+'</select><button class="add_cart">加入購物車</button></p></li>');

    }
    };

/*按鈕功能*/
        
        /*加入購物車*/
        var sum=0;
        var left= [];
        $('.store').on('click','li .add_cart',function(){

    
            var index = $(this).closest('li').index();
            var name= data.product[index].name+'</td>';
            var price = data.product[index].price;
            var amount = $(this).prev().find(':selected').val();
            var value= price*amount;
            /* data.shopcart[index].amount = ;
          left[index] =  left[index] -amount;
  $(this).parent().prev('.amount').html('尚餘數量:'+left);*/
    
            var cart_list = ('<tr><td>'+name+'</td><td>'+price+'</td><td>'+amount+'</td><td class="value">'+value+'</td><td><a href="#" class="remove">移除項目</a></td></tr>')
             $('.shopcart tbody').append(cart_list);
             /*購物車總額*/
                sum = sum+value;
                $('.total').html('$'+sum);
            });

        /*顯示/隱藏購物車列表*/
    $('#show_cart').on('click',function(){

        $('.shopcart').toggle();

        });
/*移除購物車列表項目*/
$('.shopcart').on('click','.remove',function(){
 sum= sum-$(this).parent().prev().html();
$('.total').html('$'+sum);
$(this).closest('tr').remove();


});
/*清空購物車*/
    $('.store').on('click','#clear',function(){
        $('.shopcart tbody,.total').html(' ');
        sum=0;

        });
