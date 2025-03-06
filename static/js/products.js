// Product database with hardcoded data
const products = {
    // iPhones
    iphone13: {
        name: "iPhone 13",
        image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
        description: "A15 Bionic chip, 6.1-inch Super Retina XDR display, Dual-camera system",
        rating: 4.7,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 54999, originalPrice: 69900, discount: "21%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 55999, originalPrice: 69900, discount: "20%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 56990, originalPrice: 69900, discount: "18%", link: "https://www.vijaysales.com/" },
            { store: "Reliance Digital", logo: "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg", currentPrice: 56990, originalPrice: 69900, discount: "18%", link: "https://www.reliancedigital.in/" }
        ]
    },
    iphone14: {
        name: "iPhone 14",
        image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg",
        description: "A15 Bionic chip, 6.1-inch Super Retina XDR display, Dual-camera system with improved low-light performance",
        rating: 4.8,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 64999, originalPrice: 79900, discount: "19%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 65999, originalPrice: 79900, discount: "17%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 66990, originalPrice: 79900, discount: "16%", link: "https://www.vijaysales.com/" },
            { store: "TataCliq", logo: "https://www.tatacliq.com/src/general/components/img/tatacliqLogo.png", currentPrice: 66990, originalPrice: 79900, discount: "16%", link: "https://www.tatacliq.com/" }
        ]
    },
    iphone14pro: {
        name: "iPhone 14 Pro",
        image: "https://m.media-amazon.com/images/I/71ZDY57yTQL._SL1500_.jpg",
        description: "A16 Bionic chip, 6.1-inch Super Retina XDR display with ProMotion and Always-On, Dynamic Island, 48MP main camera",
        rating: 4.9,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 119999, originalPrice: 129900, discount: "8%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 118999, originalPrice: 129900, discount: "8%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 121990, originalPrice: 129900, discount: "6%", link: "https://www.vijaysales.com/" },
            { store: "Reliance Digital", logo: "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg", currentPrice: 120990, originalPrice: 129900, discount: "7%", link: "https://www.reliancedigital.in/" }
        ]
    },
    iphone15: {
        name: "iPhone 15",
        image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg",
        description: "A16 Bionic chip, 6.1-inch Super Retina XDR display, Dual-camera system with 48MP main camera, Dynamic Island",
        rating: 4.8,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 74999, originalPrice: 79900, discount: "6%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 73999, originalPrice: 79900, discount: "7%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 75990, originalPrice: 79900, discount: "5%", link: "https://www.vijaysales.com/" },
            { store: "TataCliq", logo: "https://www.tatacliq.com/src/general/components/img/tatacliqLogo.png", currentPrice: 74990, originalPrice: 79900, discount: "6%", link: "https://www.tatacliq.com/" }
        ]
    },
    iphone15pro: {
        name: "iPhone 15 Pro",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708",
        description: "A17 Pro chip, 6.1-inch Super Retina XDR display with ProMotion and Always-On, Dynamic Island, Pro camera system",
        rating: 4.9,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 129999, originalPrice: 134900, discount: "4%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 128999, originalPrice: 134900, discount: "4%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 131990, originalPrice: 134900, discount: "2%", link: "https://www.vijaysales.com/" },
            { store: "Reliance Digital", logo: "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg", currentPrice: 130990, originalPrice: 134900, discount: "3%", link: "https://www.reliancedigital.in/" }
        ]
    },

    // Samsung Galaxy
    samsungs23: {
        name: "Samsung Galaxy S23",
        image: "https://m.media-amazon.com/images/I/61RW5RGJeCL._SL1500_.jpg",
        description: "Snapdragon 8 Gen 2 for Galaxy, 6.1-inch Dynamic AMOLED 2X display, Triple camera system",
        rating: 4.7,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 64999, originalPrice: 89999, discount: "28%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 65999, originalPrice: 89999, discount: "27%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 66990, originalPrice: 89999, discount: "26%", link: "https://www.vijaysales.com/" },
            { store: "TataCliq", logo: "https://www.tatacliq.com/src/general/components/img/tatacliqLogo.png", currentPrice: 65990, originalPrice: 89999, discount: "27%", link: "https://www.tatacliq.com/" }
        ]
    },
    samsungs24: {
        name: "Samsung Galaxy S24",
        image: "https://m.media-amazon.com/images/I/71CXhVypjDL._SL1500_.jpg",
        description: "Snapdragon 8 Gen 3 for Galaxy, 6.2-inch Dynamic AMOLED 2X display, Triple camera system, Galaxy AI",
        rating: 4.8,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 74999, originalPrice: 79999, discount: "6%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 73999, originalPrice: 79999, discount: "8%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 75990, originalPrice: 79999, discount: "5%", link: "https://www.vijaysales.com/" },
            { store: "Reliance Digital", logo: "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg", currentPrice: 74990, originalPrice: 79999, discount: "6%", link: "https://www.reliancedigital.in/" }
        ]
    },
    samsungs24ultra: {
        name: "Samsung Galaxy S24 Ultra",
        image: "https://images.samsung.com/in/smartphones/galaxy-s24-ultra/buy/product_color_titanium_black.png",
        description: "Snapdragon 8 Gen 3 for Galaxy, 6.8-inch Dynamic AMOLED 2X display, Quad camera system with 200MP main camera, Galaxy AI, S Pen",
        rating: 4.9,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 124999, originalPrice: 129999, discount: "4%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 124999, originalPrice: 129999, discount: "4%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 126990, originalPrice: 129999, discount: "2%", link: "https://www.vijaysales.com/" },
            { store: "TataCliq", logo: "https://www.tatacliq.com/src/general/components/img/tatacliqLogo.png", currentPrice: 126990, originalPrice: 129999, discount: "2%", link: "https://www.tatacliq.com/" }
        ]
    },

    // MacBooks
    macbookairm1: {
        name: "MacBook Air M1",
        image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
        description: "Apple M1 chip, 13.3-inch Retina display, 8GB RAM, 256GB SSD",
        rating: 4.8,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 79990, originalPrice: 92900, discount: "14%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 78990, originalPrice: 92900, discount: "15%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 81990, originalPrice: 92900, discount: "12%", link: "https://www.vijaysales.com/" },
            { store: "Reliance Digital", logo: "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg", currentPrice: 81990, originalPrice: 92900, discount: "12%", link: "https://www.reliancedigital.in/" }
        ]
    },
    macbookairm2: {
        name: "MacBook Air M2",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1654122880566",
        description: "Apple M2 chip, 13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD",
        rating: 4.9,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 99990, originalPrice: 114900, discount: "13%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 98990, originalPrice: 114900, discount: "14%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 100990, originalPrice: 114900, discount: "12%", link: "https://www.vijaysales.com/" },
            { store: "TataCliq", logo: "https://www.tatacliq.com/src/general/components/img/tatacliqLogo.png", currentPrice: 101990, originalPrice: 114900, discount: "11%", link: "https://www.tatacliq.com/" }
        ]
    },
    macbookairm3: {
        name: "MacBook Air M3",
        image: "https://m.media-amazon.com/images/I/81UFHe-hH5L._SL1500_.jpg",
        description: "Apple M3 chip, 13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD",
        rating: 4.9,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 109990, originalPrice: 114900, discount: "4%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 108990, originalPrice: 114900, discount: "5%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 110990, originalPrice: 114900, discount: "3%", link: "https://www.vijaysales.com/" },
            { store: "Reliance Digital", logo: "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg", currentPrice: 110990, originalPrice: 114900, discount: "3%", link: "https://www.reliancedigital.in/" }
        ]
    },
    macbookprom1: {
        name: "MacBook Pro M1",
        image: "https://m.media-amazon.com/images/I/71pC69I3lzL._SL1500_.jpg",
        description: "Apple M1 chip, 13.3-inch Retina display, 8GB RAM, 256GB SSD",
        rating: 4.8,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 112990, originalPrice: 129900, discount: "13%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 110990, originalPrice: 129900, discount: "15%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 114990, originalPrice: 129900, discount: "11%", link: "https://www.vijaysales.com/" },
            { store: "TataCliq", logo: "https://www.tatacliq.com/src/general/components/img/tatacliqLogo.png", currentPrice: 113990, originalPrice: 129900, discount: "12%", link: "https://www.tatacliq.com/" }
        ]
    },
    macbookprom2: {
        name: "MacBook Pro M2",
        image: "https://m.media-amazon.com/images/I/618M+ksuptL._SL1500_.jpg",
        description: "Apple M2 chip, 13.3-inch Retina display, 8GB RAM, 256GB SSD",
        rating: 4.8,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 129990, originalPrice: 149900, discount: "13%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 127990, originalPrice: 149900, discount: "15%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 131990, originalPrice: 149900, discount: "12%", link: "https://www.vijaysales.com/" },
            { store: "Reliance Digital", logo: "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg", currentPrice: 130990, originalPrice: 149900, discount: "13%", link: "https://www.reliancedigital.in/" }
        ]
    },
    macbookprom3: {
        name: "MacBook Pro M3",
        image: "https://m.media-amazon.com/images/I/61LNnZPoKKL._SL1500_.jpg",
        description: "Apple M3 chip, 14-inch Liquid Retina XDR display, 8GB RAM, 512GB SSD",
        rating: 4.9,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 169990, originalPrice: 179900, discount: "6%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 167990, originalPrice: 179900, discount: "7%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 170990, originalPrice: 179900, discount: "5%", link: "https://www.vijaysales.com/" },
            { store: "TataCliq", logo: "https://www.tatacliq.com/src/general/components/img/tatacliqLogo.png", currentPrice: 169990, originalPrice: 179900, discount: "6%", link: "https://www.tatacliq.com/" }
        ]
    },

    // boAt products
    boatheadphones: {
        name: "boAt Rockerz 450 Bluetooth Headphone",
        image: "https://www.boat-lifestyle.com/cdn/shop/products/33extra_large_2c7ea3ab-f9c9-4e52-9ea6-91158f5cd149.jpg",
        description: "Wireless Bluetooth Headphones with 40mm Dynamic Drivers, 15 hours of playback, soft padded ear cushions",
        rating: 4.5,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 1499, originalPrice: 3990, discount: "62%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 1399, originalPrice: 3990, discount: "65%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 1599, originalPrice: 3990, discount: "60%", link: "https://www.vijaysales.com/" },
            { store: "TataCliq", logo: "https://www.tatacliq.com/src/general/components/img/tatacliqLogo.png", currentPrice: 1499, originalPrice: 3990, discount: "62%", link: "https://www.tatacliq.com/" }
        ]
    },
    boatspeakers: {
        name: "boAt Stone 350 Portable Bluetooth Speaker",
        image: "https://m.media-amazon.com/images/I/61K8FS335JL._SL1500_.jpg",
        description: "10W RMS Stereo Sound, IPX7 Water Resistance, Up to 12 hours of playback, TWS Feature",
        rating: 4.4,
        prices: [
            { store: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", currentPrice: 1499, originalPrice: 3490, discount: "57%", link: "https://www.amazon.in/" },
            { store: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", currentPrice: 1399, originalPrice: 3490, discount: "60%", link: "https://www.flipkart.com/" },
            { store: "Vijay Sales", logo: "https://www.vijaysales.com/Content/images/vs-logo.png", currentPrice: 1599, originalPrice: 3490, discount: "54%", link: "https://www.vijaysales.com/" },
            { store: "Reliance Digital", logo: "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg", currentPrice: 1499, originalPrice: 3490, discount: "57%", link: "https://www.reliancedigital.in/" }
        ]
    }
};
