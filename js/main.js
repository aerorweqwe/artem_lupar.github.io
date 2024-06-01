    var app = new Vue({
    el: '.items, .item, .contactUs',
    data: {
        products:[
            {id:1, title:"TAG 853", short_text:"Onion Bulb. ", image:"tag853.png", desc:"Basic onion. Not everyone will like it raw, but it is excellent caramelized or fried along with barbecue. This bow can be used in any unclear situation"},
            {id:2, title:"TAG 855", short_text:"Onion White .", image:"tag855.png", desc:"When raw, these onions have a milder taste than onions - you can thinly slice them into a salad or put them on a burger. And if you rinse with cold water, the sharpness and bitterness will disappear completely. Replaces regular onions in almost any recipe"},
            {id:3, title:"TAG 816", short_text:"Onion Red.", image:"tag816.png", desc:"Sweeter than onion and white. It is added raw to dishes, stewed and grilled, and marinated. The main feature is the texture: even after heat treatment, the onion holds its shape and is slightly crunchy. This can be both a plus and a minus"},
            {id:4, title:"TAG 834", short_text:"Onion Yalta", image:"tag834.png", desc:"The sweetest and juiciest of all - ideal in vegetable salads. This is a seasonal onion: it is harvested only in summer and early autumn, and is not stored for long."},
            {id:5, title:"TAG 848", short_text:"Onion The Shawl", image:"tag848.png", desc:"A vegetable from the world of haute cuisine. The taste is sweet and rich, but almost without bitterness. Can be used as a substitute for onions in most recipes or finely chopped into sauce or salad dressing."}
        ],
        product:[],
        cart:[],
        cartIds:[],
        contactFields:[],
        btnVisible: 0,
        orderVisible: 0
    },
    mounted:function() {
        this.getProducts();
        this.checkInCart();
        this.getCart();
        console.log(this.cartIds);
        console.log(this.contactFields);
    },
    methods: {
        addItem:function(id){
            window.localStorage.setItem('prod',id)
        },
        getProducts:function(){
            if(window.location.hash) {
                var id = window.location.hash.replace('#','');
                if(this.products && this.products) {
                   for(i in this.products) {
                       if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                   } 
                }
            }
        },
        addToCart:function(id) {
            var cart = [];
            if(window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if(cart.indexOf(String(id))==-1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function() {
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) !=-1 ) this.btnVisible=1;
        },
        getCart:function() {
            for(i in localStorage.getItem('cart')) {
                for(p in this.products) {
                    if(this.products[p].id == localStorage.getItem('cart').split(',')[i]) {
                       this.cart.push(this.products[p]);
                       this.cartIds.push(this.products[p].id);
                    }
                }
            }
        },
        removeFromCart:function(id) {
            for(i in this.cart) {
                if(this.cart[i].id == id) {
                    this.cart.splice(i, 1);
                    this.cartIds.splice(i, 1);
                    window.localStorage.setItem('cart', this.cartIds.join());
                }
            }
        },
        makeOrder:function() {
            this.orderVisible = 1;
            this.cart = [];
            this.cartIds = [];
            window.localStorage.removeItem('cart');
        }
    }
});
