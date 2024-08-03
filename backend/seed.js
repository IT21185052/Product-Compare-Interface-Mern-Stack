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
    ram:'256GB 12GB RAM',
    price: 824.00,
    allPrice:'https://www.gsmarena.com/xiaomi_14-price-12626.php',
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
      type: 'AMOLED',
      size: '6.7 inches',
      resolution: '1440 x 3200 pixels',
    },
    platform: {
      os: 'Android 12, MIUI 13',
      chip: 'Snapdragon 8 Gen 1',
      cpu: 'Octa-core',
      gpu: 'Adreno 730'
    },
    thumbnail: 'https://www.youtube.com/watch?v=_3Jo7Vy4YbY',
    logolink:'https://www.amazon.com/dp/B0CY2FFJT5?tag=gsmarena093-20&linkCode=osi&th=1&psc=1',
    review:'https://www.gsmarena.com/xiaomi_14-review-2672.php',
    specifications:'https://www.gsmarena.com/xiaomi_14-12626.php',
    opinions:'https://www.gsmarena.com/xiaomi_14-reviews-12626.php',
    picturest:'https://www.gsmarena.com/xiaomi_14-pictures-12626.php'
    },
  {
    name: 'Apple Iphone 15 Pro Max',
    picture: ['./assets/2.jpg'],
    ram:'256GB 8GB RAM',
    price: 857.99,
    allPrice:'https://www.gsmarena.com/apple_iphone_15_pro_max-price-12548.php',
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
      type: 'OLED',
      size: '6.7 inches',
      resolution: '1284 x 2778 pixels',
    },
    platform: {
      os: 'iOS 17',
      chip: 'Apple A17 Bionic',
      cpu: 'Hexa-core',
      gpu: 'Apple GPU (5-core graphics)'
    },
    thumbnail: 'https://www.youtube.com/watch?v=cVpcl7KGly0' ,
    logolink:'https://www.amazon.com/dp/B0CMZ3HT9K?tag=gsmarena093-20&linkCode=osi&th=1&psc=1',
    review:'https://www.gsmarena.com/apple_iphone_15_pro_max-review-2618.php',
    specifications:'https://www.gsmarena.com/apple_iphone_15_pro_max-12548.php',
    opinions:'https://www.gsmarena.com/apple_iphone_15_pro_max-reviews-12548.php',
    picturest:'https://www.gsmarena.com/apple_iphone_15_pro_max-pictures-12548.php'
  },
  {
    name: 'Huawei nova 5T',
    picture: ['./assets/3.jpg'],
    ram:'256GB 4GB RAM',
    price: 599,
    allPrice:'https://www.gsmarena.com/huawei_nova_5t-9803.php',
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
      type: 'IPS LCD',
      size: '6.26 inches, 96.2 cm2 (~84.2% screen-to-body ratio)',
      resolution: '1080 x 2340 pixels, 19.5:9 ratio (~412 ppi density)',
    },
    platform: {
      os: 'Android 9.0 (Pie), upgradable to Android 10, EMUI 10',
      chip: 'Kirin 980 (7 nm)',
      cpu: 'Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76',
      gpu: 'Mali-G76 MP10'
    },
    thumbnail: 'https://www.youtube.com/watch?v=yrpIvCI7Fw8' ,
    logolink:'https://www.amazon.com/Compatible-Silicone-Protective-Aesthetic-Rotatable/dp/B0B7G44L9G/ref=sr_1_2?crid=2CN1VVKVGQW01&dib=eyJ2IjoiMSJ9.7fCrww8OJQoiigqu4WzYZktKL2KxuqfFcjaq8qPLM51anTrY3qyYtVJhvbytwbzL_GXsZqc3M5j5Zgi8aoSriGwaazpz7-sq97gh5MxVXYtJNJ9luAC4VGeJ4O6Ls4iajTDxBdHhXzOeIKaQbRDxGnW4SKzJnZqRSGkY80au4XST4l4o5nGbbvErQEVbYCZ6aksyjDboqxpJpj-4xz0Jb1-dk_bBd4I8EZiF-Rkpraw.9kCHAKsOtdcWDzfJt5u4AdqII2r_je6etDxyutV3ArI&dib_tag=se&keywords=Huawei+nova+5T+phone&qid=1722704887&sprefix=huawei+nova+5t+phone%2Caps%2C493&sr=8-2',
    review:'https://www.gsmarena.com/huawei_nova_5t_in_for_review-news-40077.php',
    specifications:'https://www.gsmarena.com/huawei_nova_5t-9803.php',
    opinions:'https://www.gsmarena.com/huawei_nova_5t-reviews-9803.php',
    picturest:'https://www.gsmarena.com/huawei_nova_5t-pictures-9803.php'
  },
  {
    name: 'LG Velvet 5G',
    picture: ['./assets/4.jpg'],
    ram:'256GB 8GB RAM',
    price: 599,
    allPrice:'https://www.gsmarena.com/lg_velvet_5g-10209.php',
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
      type: 'P-OLED',
      size: '6.8 inches, 109.8 cm2 (~88.6% screen-to-body ratio)',
      resolution: '	1080 x 2460 pixels (~395 ppi density)',
    },
    platform: {
      os: 'Android 10, upgradable to Android 13, LG UX',
      chip: 'Qualcomm SM7250 Snapdragon 765G 5G (7 nm)',
      cpu: 'Octa-core (1x2.4 GHz Kryo 475 Prime & 1x2.2 GHz Kryo 475 Gold',
      gpu: 'Adreno 620'
    },
    thumbnail: 'https://www.youtube.com/watch?v=Z-1RUn8MfiQ',
    logolink:'https://www.amazon.com/LG-Velvet-LMG900UM1A-Unlocked-Version/dp/B089P266SZ/ref=sr_1_1?crid=D13UNMD6VKYV&dib=eyJ2IjoiMSJ9.0w0902zeQqMnRpsmvXPPTYCB95uFvexWjhq4r9UdSoEYa1ghbsw5MlgaVaRIz9V0pyIW6obBz3MLopMpXgjYn3g1ln_6rczLumemd2_rSQxaMTjENUdqv4dGUYnhFyE1F9xvHUGKYcqYBdUAa8jBLAamLIqqDJAuZ9OttfdNZWHRFWt-jTEbiww2mMJFXxJDgu3uxOaPHtTG0i1DbpttwnzyslgrAKXsod-ea5PDVQE.JcNL5WI6Jeooo7FYyJxB8FMvc7f5HJGePaK8VRDrEgY&dib_tag=se&keywords=lg+velvet+5g&qid=1722704968&sprefix=lg+vel%2Caps%2C498&sr=8-1' ,
    review:'https://www.gsmarena.com/lg_velvet-review-2125.php',
    specifications:'https://www.gsmarena.com/lg_velvet_5g-10209.php',
    opinions:'https://www.gsmarena.com/lg_velvet_5g-reviews-10209.php',
    picturest:'https://www.gsmarena.com/lg_velvet_5g-pictures-10209.php'
  },
  {
    name: 'Sony Xperia 1 VI',
    picture: ['./assets/5.jpg'],
    ram:'512GB 16GB RAM',
    price: 599,
    allPrice:'https://www.gsmarena.com/sony_xperia_1_vi-13003.php',
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
    thumbnail: 'https://www.youtube.com/watch?v=_w0E4nqUrDI' ,
    logolink:'https://www.amazon.com/Sony-Xperia-XQ-EC72-Factory-Unlocked/dp/B0D54WMZ47/ref=sr_1_1?crid=3FUZXGMLM3XMG&dib=eyJ2IjoiMSJ9.nenM-AoARS5eMAtBNfokPrYY4eHAgE40zzv5WD-M9EknRMTYi79-5wDF3GQke_1b7aJl2AIlDDKQBxA0d6aTJJfYusmr-u-Uu7W3SOZegJ21PDsY2oT7mmklA5XDneEVTKJabg7hVvqGFyPLmyuWC6ZE4LjJpmF673QHdV5hMwf6MXumr-P7HNG66ONA0k6cX_bGIZ2LDmxFBgN9IFlnCkTGczG37Km_wSNO2y2NwUI.uaNExzzzijTOs9O0NkfB_gquJQHFgB2q2XJ7cVGwr1w&dib_tag=se&keywords=Sony+Xperia+1+VI&qid=1722704999&sprefix=sony+xperia+1+vi%2Caps%2C870&sr=8-1',
    review:'https://www.gsmarena.com/sony_xperia_1_vi-review-2699.php',
    specifications:'https://www.gsmarena.com/sony_xperia_1_vi-13003.php',
    opinions:'https://www.gsmarena.com/sony_xperia_1_vi-reviews-13003.php',
    picturest:'https://www.gsmarena.com/sony_xperia_1_vi-pictures-13003.php'
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
