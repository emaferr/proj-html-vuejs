import 'bootstrap';

const app = new Vue({

    el:'#app',

    data:{

        show: false,

        scTimer: 0,
        scY: 0,

        view: {
            topOfPage: true
          },

        agency: {

            name: 'Avada Barbers',

            street: '123 New York Street',

            city: 'New York City',

            eMail: 'info@yourwebsite.com',

            phone: '+1 (555) 555-1212'

        },

        services: [

            {
                image_service: 'avadabarbers-trimcut-icon-before',
                name_service:'Trim & Cut',
                description_service:'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.'
            },
            {
                image_service: 'avadabarbers-washndry-icon',
                name_service:'Wash & Dry',
                description_service:'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.'
            },
            {
                image_service: 'avadabarbers-beardtrim-icon',
                name_service:'Beard Tidy',
                description_service:'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.'
            }
        ],

        products: [

            {
                image_product: 'brush_dark.png',
                name_product:'Brush',
                price_product:'15.00'
            },
            {
                image_product: 'scissors.webp',
                name_product:'Scissors',
                price_product:'85.00'
            },
            {
                image_product: 'hot_oil_dark.png',
                name_product:'Hot Oil',
                price_product:'15.00'
            },
            {
                image_product: 'straight_razor_dark.png',
                name_product:'Straight Razor',
                price_product:'30.00'
            }
        ],

        reviews: [

            {
                user_name: 'John Doe',
                user_image:'6',
                review_txt:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, ullam commodi vel, atque consequatur assumenda recusandae vero nemo.'
            },
            {
                user_name: 'Pete Jones',
                user_image:'7',
                review_txt:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, ullam commodi vel, atque consequatur assumenda recusandae vero nemo.'
            },
            {
                user_name: 'Mark Wilson',
                user_image:'3',
                review_txt:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, ullam commodi vel, atque consequatur assumenda recusandae vero nemo.'
            },
        ],

        posts: [

            {
                post_name: 'Avada Barbars Now Open',
                post_image:'second',
                post_txt:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quo quam non?'
            },
            {
                post_name: 'Choosing The Right Barber',
                post_image:'choosing',
                post_txt:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quo quam non?'
            },
            {
                post_name: 'Quick Service Guide',
                post_image:'ourservice',
                post_txt:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quo quam non?'
            },
        ]

    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },

    // Change background color to navbar on scroll
    beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    },

    methods: {

        

    handleScroll(){
        if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
        } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
        }
        if (this.scTimer) return;
            this.scTimer = setTimeout(() => {
              this.scY = window.scrollY;
              clearTimeout(this.scTimer);
              this.scTimer = 0;
            }, 100);
    },

    toStart: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },

    },
    
})
