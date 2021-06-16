import 'bootstrap';

const app = new Vue({

    el:'#app',

    data:{

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
        ]

    },
    
    
})