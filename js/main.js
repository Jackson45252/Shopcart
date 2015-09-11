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
    shopcart:[{name:'',price:'',amount:''}]
};

var len = data.product.length;

for(i=0;len>i;i++){
    var name= data.product[i].name;
    var price = data.product[i].price;
    var amount = data.product[i].amount;
    var link = data.product[i].link;
    var image = data.product[i].image;
  $('.product').append('<li id="item'+i+'" class="book"><a href="'+link+'"><img src="'+image+'" width="200"/></a><h2>'+name+'</h2><p class="price">價格:'+price+'元</p><p class="amount">尚餘數量:'+amount+'</p><p class="add"><select><option>1</option><option>2</option></select><button>加入購物車</button></p></li>');
}