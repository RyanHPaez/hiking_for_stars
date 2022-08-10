const db = require('./models')

Hiking_for_stars.places.create(
    [
        {
            name:'West San Gabriel River Parkway Nature Trail',
            address: '4626 ShadeWay Rd',
            city:'Lakewood',
            rating:'3',
            description:'Enjoy this 3.4-mile out-and-back trail near Lakewood, California. Generally considered an easy route, it takes an average of 1 h 0 min to complete. This is a popular trail for hiking, road biking, and trail running, but you can still enjoy some solitude during quieter times of day. Dogs are welcome, but must be on a leash.',
            difficulty: 'Easy',
            thumbnail: 'https://i1.wp.com/3.bp.blogspot.com/-DxphsscDZbk/T4y7odvapuI/AAAAAAAABjw/-nfELzXTF6Y/s1600/lakewood1.JPG'     
        },
        
        {
            name:'Heartwell Park Trail',
            address: '6700 E Carson St',
            city: 'Long Beach',
            rating:'4',
            description: 'Heartwell Park Trail is a 5 mile moderately trafficked out and back trail located near Long Beach, California that offers scenic views and is good for all skill levels. The trail is primarily used for walking, running, nature trips, and bird watching and is accessible year-round. Dogs are also able to use this trail but must be kept on leash',
            difficulty: 'Easy',
            thumbnail: 'https://assets.agentfire3.com/uploads/sites/111/2018/01/Heartwell-Park.jpg'
            
        },
        
        {
            name:'The Los Angeles Bikeway',
            address: '651 Oregon Ave',
            city: 'Los Angeles',
            rating: '3.5',
            description: ' 13.5-mile point-to-point trail near Long Beach, California. Generally considered a moderately challenging route, it takes an average of 4 h 2 min to complete. This trail is great for birding, road biking, and trail running, and it is unlikely you will encounter many other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.',
            difficulty: 'Easy',
            thumbnail: 'https://i.pinimg.com/originals/a3/2b/15/a32b153b1dc09e72783760ebac31f9bd.jpg'
        },
        
        {
            name:'El Dorado Lake Loop',
            address: '5468 Cherry Ave',
            city: 'Signal Hill',
            rating: '4',
            description: '1.8-mile loop trail near Long Beach, California. Generally considered an easy route, it takes an average of 31 min to complete. This is a popular trail for hiking and walking, but you can still enjoy some solitude during quieter times of day.',
            difficulty: 'Easy',
            thumbnail: 'https://i.pinimg.com/originals/7e/61/df/7e61df09a5fb18087a3465e5f7195303.jpg'
        },
        
        {
            name:'Long Beach Shoreline Bike Path',
            address: '5404 E Ocean Blvd',
            city: 'Long Beach',
            rating: '4.5',
            description: '7.3-mile out-and-back trail near Long Beach, California. Generally considered an easy route, it takes an average of 2 h 10 min to complete. This is a very popular area for birding, hiking, and paddle sports, so you will likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You will need to leave pups at home — dogs are not allowed on this trail.',
            difficulty: 'Easy',
            thumbnail: 'https://spinlister-blog.s3.amazonaws.com/2016/09/long-beach-bike-path-1.jpg'
        },
        
        {
            name:'Dominguez Gap Trail',
            address: '4878 Dominguez St',
            city: 'Long Beach',
            rating: '4',
            description: 'Experience this 2.2-mile loop trail near Long Beach, California. Generally considered an easy route, it takes an average of 40 min to complete. This is a popular trail for trail running and walking, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.',
            difficulty: 'Intermediate',
            thumbnail: 'https://i.ytimg.com/vi/hnfziPSLNOo/maxresdefault.jpg'
        },
        
        {
            name:'Colorado Lagoon Loop',
            address: '753 Lincoln Blvd',
            city: 'Los Angeles',
            rating: '4.5',
            description: ' 1.0-mile loop trail near Long Beach, California. Generally considered an easy route, it takes an average of 18 min to complete. This trail is great for birding and hiking, and it is unlikely you will encounter many other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash',
            difficulty: 'Intermediate',
            thumbnail: 'https://www.californiabeaches.com/wp-content/uploads/2014/09/IMG_1864-Large-e1460255806782-1000x653.jpg'
        },
        
        {
            name:'Bluff Park Loop',
            address: '1596 Ocean Blvd',
            city: 'Los Angeles',
            rating: '3',
            description: '1.3-mile loop trail near Long Beach, California. Generally considered an easy route, it takes an average of 26 min to complete. This is a very popular area for road biking, trail running, and walking, so you will likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.',
            difficulty: 'Easy',
            thumbnail: 'https://s3-media4.fl.yelpcdn.com/bphoto/BtLEenwXFYSp6Ebf0FnxOg/o.jpg'
        }])

    .then (() => {})
    .catch(err => {})