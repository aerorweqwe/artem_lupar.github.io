    var app = new Vue({
    el: '.items, .item, .contactUs',
    data: {
        products:[
            {id:1, title:"TAG 853", short_text:"Eggplant Determinate Black handsome Round. ", image:"tag853.png", desc:"The plant is an indeterminate, erect bush that reaches 2–4 feet tall when fully grown. Eggplants have an extensive, fibrous root system. Flowers are borne singly or in clusters in leaf axils"},
            {id:2, title:"TAG 855", short_text:"Eggplant Determinate Eggplant diamond Round.", image:"tag855.png", desc:"The plant is an indeterminate, erect bush that reaches 2–4 feet tall when fully grown. Eggplants have an extensive, fibrous root system. Flowers are borne singly or in clusters in leaf axils"},
            {id:3, title:"TAG 816", short_text:"Eggplant Determinate Purple miracle Round.", image:"tag816.png", desc:"The plant is an indeterminate, erect bush that reaches 2–4 feet tall when fully grown. Eggplants have an extensive, fibrous root system. Flowers are borne singly or in clusters in leaf axils"},
            {id:4, title:"TAG 834", short_text:"Eggplant Determinate 'Banana' Round", image:"tag834.png", desc:"The plant is an indeterminate, erect bush that reaches 2–4 feet tall when fully grown. Eggplants have an extensive, fibrous root system. Flowers are borne singly or in clusters in leaf axils"},
            {id:5, title:"TAG 848", short_text:"Eggplant Determinate Small Round", image:"tag848.png", desc:"The plant is an indeterminate, erect bush that reaches 2–4 feet tall when fully grown. Eggplants have an extensive, fibrous root system. Flowers are borne singly or in clusters in leaf axils"}
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
