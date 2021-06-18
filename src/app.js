import 'bootstrap';

// Import VueScrollTo and AutoScroll
import vuescroll from 'vuescroll';
import AutoScroll from "vue-plugin-autoscroll";
 
Vue.use(AutoScroll);
Vue.use(vuescroll);

const app = new Vue({

    el:'#app',

    data:{

        show: false,
        scTimer: 0,
        scY: 0,
        contatore: 0,

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

        socialIcons:[

            {
                social_name : 'Facebook',
                social_icon : 'fab fa-facebook-f',
                active : false,
            },
            {
                social_name : 'Twitter',
                social_icon : 'fab fa-twitter',
                active : false,
            },
            {
                social_name : 'YouTube',
                social_icon : 'fab fa-youtube',
                active : false,
            },
            {
                social_name : 'Instagram',
                social_icon : 'fab fa-instagram',
                active : false,
            }
        ],

        sitePages: ['home','about us','services','shop','our team','blog','contact us'],

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
            },
            {
              image_service: 'avadabarbers-services-hairstyling',
              name_service:'Hair Styling',
              description_service:'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.'
            },
            {
              image_service: 'avadabarbers-services-oils',
              name_service:'Oils & Scrubs',
              description_service:'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.'
            },
            {
              image_service: 'avadabarbers-services-artisancoffee',
              name_service:'Artisan Coffee',
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
            },
            {
              image_product: 'shave_balm-768x768.png',
              name_product:'Shave Balm',
              price_product:'15.00'
            },
            {
              image_product: 'safety_set-768x768.png',
              name_product:'Safety Set',
              price_product:'45.00'
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

      // use VueScroll
      scroll_left() {
        let content = document.querySelector(".prova");
        let content2 = document.querySelector(".prova2");
        content.scrollLeft -= 1000;
        content2.scrollLeft -= 400;
        // setTimeout(() => {
        //   content.scrollLeft -= 330;
        // }, 3000);
      },
      scroll_right() {
        let content = document.querySelector(".prova");
        let content2 = document.querySelector(".prova2");
        content.scrollLeft += 1000;
        content2.scrollLeft += 400;
        // setTimeout(() => {
        //   content.scrollLeft += 330;
        // }, 3000);

      },
 
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

// Parallax Footer
var body = document.getElementsByTagName('body')[0];

initializeParallaxFooter(
  // main can be whatever element you want
  document.getElementsByTagName('main')[0],
  // footer can be whatever element you want
  document.getElementsByTagName('footer')[0]
);

function initializeParallaxFooter(mainElement, footerElement) {
  footerElement.style.left = '0';
  footerElement.style.right = '0';
  footerElement.style.zIndex = '-1';
  updateParallaxFooter(mainElement, footerElement);
  window.addEventListener('resize', function() {
    updateParallaxFooter(mainElement, footerElement);
  });
  window.addEventListener('scroll', function() {
    updateParallaxFooter(mainElement, footerElement);
  });
}

function updateParallaxFooter(mainElement, footerElement) {

  if (isViewportSmallerThanFooter(footerElement)) {
    // Reset bottom style in case user resized window
    footerElement.style.bottom = '';
    footerElement.style.top = '0';
  } else {
    // Reset top style in case user resized window
    footerElement.style.top = '';
    footerElement.style.bottom = '0';
  }
  if (window.scrollY > getBottomY(mainElement)) {
    footerElement.style.position = 'static';
    // Margin is only used to add
    body.style.marginBottom = '0px';
  } else {
    body.style.marginBottom = footerElement.offsetHeight + 'px';
    footerElement.style.position = 'fixed';
  }
  
}

function isViewportSmallerThanFooter(footerElement) {
  return window.innerHeight < footerElement.offsetHeight;
}

function getBottomY(element) {
  return element.offsetTop + element.offsetHeight;
}
