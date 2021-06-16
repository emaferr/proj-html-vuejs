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
        ]

    },
    
    
})