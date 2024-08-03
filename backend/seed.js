const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Phone = require('./models/Phone');

dotenv.config();  // Load environment variables from .env file

const DB_URL = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const phones = [
  {
    name: 'Xiaomi 14',
    picture: ['./assets/1.jpg'],
    price: 824.00,
    network: 'GSM / CDMA / HSPA / CDMA2000 / LTE / 5G',
    launch: {
      announced: '2023, October 26',
      status: 'Available. Released 2023, November 01'
    },
    body: {
      dimensions: '152.8 x 71.5 x 8.2 mm or 8.3 mm',
      weight: '188 g or 193 g (6.63 oz)',
      sim: 'Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)',
      build: 'Glass front (Gorilla Glass Victus), glass back or silicone polymer back, aluminum frame'
    },
    display: {
      type: '152.8 x 71.5 x 8.2 mm or 8.3 mm',
      size: '188 g or 193 g (6.63 oz)',
      resolution: 'Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)',
    },
    platform: {
      os: '152.8 x 71.5 x 8.2 mm or 8.3 mm',
      chip: '188 g or 193 g (6.63 oz)',
      cpu: 'Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)',
      gpu: 'Glass front (Gorilla Glass Victus), glass back or silicone polymer back, aluminum frame'
    },
    thumbnail: 'https://www.youtube.com/watch?v=_3Jo7Vy4YbY'
    },
  {
    name: 'Apple Iphone 15 Pro Max',
    picture: ['./assets/2.jpg'],
    price: 857.99,
    network: 'GSM / CDMA / HSPA / EVDO / LTE / 5G',
    launch: {
      announced: '2023, September 12',
      status: 'Available. Released 2023, September 22'
    },
    body: {
      dimensions: '159.9 x 76.7 x 8.3 mm (6.30 x 3.02 x 0.33 in)',
      weight: '221 g (7.80 oz)',
      sim: 'Nano-SIM and eSIM - International',
      build: 'Glass front (Corning-made glass), glass back (Corning-made glass), titanium frame (grade 5)'                  
    },
    display: {
      type: '152.8 x 71.5 x 8.2 mm or 8.3 mm',
      size: '188 g or 193 g (6.63 oz)',
      resolution: 'Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)',
    },
    platform: {
      os: '152.8 x 71.5 x 8.2 mm or 8.3 mm',
      chip: '188 g or 193 g (6.63 oz)',
      cpu: 'Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)',
      gpu: 'Glass front (Gorilla Glass Victus), glass back or silicone polymer back, aluminum frame'
    },
    thumbnail: 'https://www.youtube.com/watch?v=cVpcl7KGly0' 
  },
  {
    name: 'Huawei nova 5T',
    picture: ['./assets/3.jpg'],
    price: 599,
    network: 'GSM / HSPA / LTE',
    launch: {
        announced: '2019, August 27',
        status: 'Available. Released 2019, September 05'
      },
    body: {
      dimensions: '154.3 x 74 x 7.8 mm (6.07 x 2.91 x 0.31 in)',
      weight: '	174 g (6.14 oz)',
      sim: 'Dual SIM (Nano-SIM, dual stand-by)',
      build: 'Glass front, glass back, aluminum frame'
    },
    display: {
      type: '152.8 x 71.5 x 8.2 mm or 8.3 mm',
      size: '188 g or 193 g (6.63 oz)',
      resolution: 'Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)',
    },
    platform: {
      os: '152.8 x 71.5 x 8.2 mm or 8.3 mm',
      chip: '188 g or 193 g (6.63 oz)',
      cpu: 'Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)',
      gpu: 'Glass front (Gorilla Glass Victus), glass back or silicone polymer back, aluminum frame'
    },
    thumbnail: 'https://www.youtube.com/watch?v=yrpIvCI7Fw8' 
  },
  {
    name: 'LG Velvet 5G',
    picture: ['./assets/4.jpg'],
    price: 599,
    network: 'GSM / HSPA / LTE / 5G	',
    launch: {
        announced: '2020, May 07',
        status: 'Available. Released 2020, May 15'
      },
    body: {
      dimensions: '167.2 x 74.1 x 7.9 mm (6.58 x 2.92 x 0.31 in)',
      weight: '180 g (6.35 oz)',
      sim: 'Hybrid Dual SIM (Nano-SIM, dual stand-by)',
      build: 'Glass front, glass back, aluminum frame'
    },
    display: {
      type: '152.8 x 71.5 x 8.2 mm or 8.3 mm',
      size: '188 g or 193 g (6.63 oz)',
      resolution: 'Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)',
    },
    platform: {
      os: '152.8 x 71.5 x 8.2 mm or 8.3 mm',
      chip: '188 g or 193 g (6.63 oz)',
      cpu: 'Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)',
      gpu: 'Glass front (Gorilla Glass Victus), glass back or silicone polymer back, aluminum frame'
    },
    thumbnail: 'https://www.youtube.com/watch?v=Z-1RUn8MfiQ' 
  },
  {
    name: 'Sony Xperia 1 VI',
    picture: ['./assets/5.jpg'],
    price: 599,
    network: 'GSM / HSPA / LTE / 5G',
    launch: {
        announced: '2024, May 15',
        status: 'Available. Released 2024, June 03'
      },
    body: {
      dimensions: '	162 x 74 x 8.2 mm (6.38 x 2.91 x 0.32 in)',
      weight: '192 g (6.77 oz)',
      sim: 'Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)',
      build: 'Glass front (Gorilla Glass Victus 2), glass back (Gorilla Glass Victus)'
    },
    display: {
      type: 'LTPO OLED, 1B colors, 120Hz, HDR BT.2020',
      size: '6.5 inches, 103.7 cm2 (~86.5% screen-to-body ratio)',
      resolution: '	1080 x 2340 pixels, 19.5:9 ratio (~396 ppi density)',
    },
    platform: {
      os: 'Android 14',
      chip: 'Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)',
      cpu: '	Octa-core (1x3.3 GHz Cortex-X4 & 3x3.2 GHz Cortex-A720 & 2x3.0',
      gpu: 'Adreno 750'
    },
    thumbnail: 'https://www.youtube.com/watch?v=_w0E4nqUrDI' 
  }
];

Phone.insertMany(phones)
  .then(() => {
    console.log('Phones inserted successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting phones:', error);
  });
