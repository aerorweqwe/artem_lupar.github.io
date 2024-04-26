var app = new Vue({
    el: "article",
    data: {
        products: [
            { id: 1, title: "TAG 853", short_text: 'Eggplant Determinate Black handsome Round', image: 'TAG853.png', desc: "Full desc" },
            { id: 2, title: "TAG 855", short_text: 'Eggplant Determinate Eggplant diamond Round', image: 'TAG855.png', desc: "Full desc" },
            { id: 3, title: "TAG 809", short_text: 'Eggplant Determinate Purple miracle Round', image: 'TAG809.png', desc: "Full desc" },
            { id: 4, title: "TAG 834", short_text: 'Eggplant Determinate "Banana" Round', image: 'TAG834.png', desc: "Full desc" },
            { id: 5, title: "TAG 848", short_text: 'Eggplant Determinate Small Round', image: 'TAG848.png', desc: "Full desc" }
        ]},
    mounted: function () {
        console.log(window.localStorage.getItem('prod'));
    },
    methods: {
        addItem: function (id) {
            window.localStorage.setItem('prod', id);
        }
    }
});
