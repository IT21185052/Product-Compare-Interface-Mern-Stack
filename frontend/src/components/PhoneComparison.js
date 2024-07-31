import React, { useState } from 'react';
import './PhoneComparison.css';
import SearchContainer from './SearchContainer';
import CompareModeSwitch from './CompareModeSwitch';
import TextBox from './TextBox';
import phoneImage1 from '../assets/1.jpg';
import phoneImage2 from '../assets/2.jpg';
import logo from '../assets/logo.png';


// Function to get YouTube thumbnail URL from video URL
const getYouTubeThumbnailUrl = (url) => {
  const videoId = url.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    return `https://img.youtube.com/vi/${videoId.substring(0, ampersandPosition)}/hqdefault.jpg`;
  }
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

// Default phone data
const defaultPhoneData1 = {
  name: 'Xiaomi 14',
  picture: phoneImage1,
  price: 899,
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
  thumbnail: 'https://www.youtube.com/watch?v=_3Jo7Vy4YbY'
};

const defaultPhoneData2 = {
  name: 'Apple Iphone 15 Pro Max',
  picture: phoneImage2,
  price: 877,
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
  thumbnail: 'https://www.youtube.com/watch?v=cVpcl7KGly0' // YouTube video thumbnail URL
};

const PhoneComparison = () => {
  // State for the first phone data & second phone data
  const [phoneData1, setPhoneData1] = useState(defaultPhoneData1);
  const [phoneData2, setPhoneData2] = useState(defaultPhoneData2);

  return (
    <div className="main-container">
      <div className="top-container">
        <div className="box empty-box"><CompareModeSwitch /></div>
        <div className="box">
          <div className="top-box">
            <SearchContainer setPhoneData={setPhoneData1} />
          </div>
          <div className="middle-box">
            <div className="left-box">
              {phoneData1 && (
                <>
                  <h3 className="phone-name">{phoneData1.name}</h3>
                  <img src={phoneData1.picture} alt={phoneData1.name} className="phone-image" />
                </>
              )}
            </div>
            <div className="right-box">
              <TextBox />
              {phoneData1 && (
                <img src={getYouTubeThumbnailUrl(phoneData1.thumbnail)} alt="YouTube thumbnail" className="thumbnail" />
              )}
            </div>
          </div>
          <div className="bottom-box">
            {phoneData1 && (
              <>
                <p className="price">Price: ${phoneData1.price}</p>
                <img src={logo} alt="logo" className="logo" />
                <p className="all-prices">All Prices</p>
              </>
            )}
          </div>
        </div>
        <div className="box">
          <div className="top-box">
            <SearchContainer setPhoneData={setPhoneData2} />
          </div>
          <div className="middle-box">
            <div className="left-box">
              {phoneData2 && (
                <>
                  <h3 className="phone-name">{phoneData2.name}</h3>
                  <img src={phoneData2.picture} alt={phoneData2.name} className="phone-image" />
                </>
              )}
            </div>
            <div className="right-box">
              <TextBox />
              {phoneData2 && (
                <img src={getYouTubeThumbnailUrl(phoneData2.thumbnail)} alt="YouTube thumbnail" className="thumbnail" />
              )}
            </div>
          </div>
          <div className="bottom-box">
            {phoneData2 && (
              <>
                <p className="price">Price: ${phoneData2.price}</p>
                <img src={logo} alt="logo" className="logo" />
                <p className="all-prices">All Prices</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <table className="comparison-table">
          <tbody>
            <tr className="row-1">
              <td className="col-1-1 category">NETWORK</td>
              <td className="col-1-2 subcategory">Technology</td>
              <td className="sub-sub col">{phoneData1 ? phoneData1.network : 'N/A'}</td>
              <td className="sub-sub col">{phoneData2 ? phoneData2.network : 'N/A'}</td>
            </tr>
            <tr className="row-2">
              <td className="col-1-1 category">LAUNCH</td>
              <td className="col-1-2 subcategory cell-content">
                <div className="cell-top">Announced</div>
                <div className="cell-bottom">Status</div>
              </td>
              <td className="col sub-sub cell-content">
                <div className="cell-top">{phoneData1 ? phoneData1.launch.announced : 'N/A'}</div>
                <div className="cell-bottom">{phoneData1 ? phoneData1.launch.status : 'N/A'}</div>
              </td>
              <td className="col sub-sub cell-content">
                <div className="cell-top">{phoneData2 ? phoneData2.launch.announced : 'N/A'}</div>
                <div className="cell-bottom">{phoneData2 ? phoneData2.launch.status : 'N/A'}</div>
              </td>
            </tr>
            <tr className="row-3">
              <td className="col-1-1 category">BODY</td>
              <td className="col-1-2 subcategory cell-content">
                <div className="cell-1">Dimension</div>
                <div className="cell-2">Weight</div>
                <div className="cell-top">Build</div>
                <div className="cell-bottom">Sim</div>
              </td>
              <td className="col sub-sub cell-content">
                <div className="cell-1">{phoneData1 ? phoneData1.body.dimensions : 'N/A'}</div>
                <div className="cell-2">{phoneData1 ? phoneData1.body.weight : 'N/A'}</div>
                <div className="cell-top">{phoneData1 ? phoneData1.body.build : 'N/A'}</div>
                <div className="cell-bottom">{phoneData1 ? phoneData1.body.sim : 'N/A'}</div>
              </td>
              <td className="col sub-sub cell-content">
                <div className="cell-1">{phoneData2 ? phoneData2.body.dimensions : 'N/A'}</div>
                <div className="cell-2">{phoneData2 ? phoneData2.body.weight : 'N/A'}</div>
                <div className="cell-top">{phoneData2 ? phoneData2.body.build : 'N/A'}</div>
                <div className="cell-bottom">{phoneData2 ? phoneData2.body.sim : 'N/A'}</div>
              </td>
            </tr>
            <tr className="row-4">
              <td className="col-1-1 category">DISPLAY</td>
              <td className="col-1-2 subcategory cell-content">
                <div className="cell-1">Type</div>
                <div className="cell-2">Size</div>
                <div className="cell-3">Resolution</div>
              </td>
              <td className="col sub-sub cell-content">
                <div className="cell-1">{phoneData1 ? phoneData1.display.type : 'N/A'}</div>
                <div className="cell-2">{phoneData1 ? phoneData1.display.size : 'N/A'}</div>
                <div className="cell-3">{phoneData1 ? phoneData1.display.resolution : 'N/A'}</div>
              </td>
              <td className="col sub-sub cell-content">
                <div className="cell-1">{phoneData2 ? phoneData2.display.type : 'N/A'}</div>
                <div className="cell-2">{phoneData2 ? phoneData2.display.size : 'N/A'}</div>
                <div className="cell-3">{phoneData2 ? phoneData2.display.resolution : 'N/A'}</div>
              </td>
            </tr>
            <tr className="row-5">
              <td className="col-1-1 category">PLATFORM</td>
              <td className="col-1-2 subcategory cell-content">
                <div className="cell-1">OS</div>
                <div className="cell-2">Chip</div>
                <div className="cell-3">CPU</div>
                <div className="cell-4">GPU</div>
              </td>
              <td className="col sub-sub cell-content">
                <div className="cell-1">{phoneData1 ? phoneData1.platform.os : 'N/A'}</div>
                <div className="cell-2">{phoneData1 ? phoneData1.platform.chip : 'N/A'}</div>
                <div className="cell-3">{phoneData1 ? phoneData1.platform.cpu : 'N/A'}</div>
                <div className="cell-4">{phoneData1 ? phoneData1.platform.gpu : 'N/A'}</div>
              </td>
              <td className="col sub-sub cell-content">
                <div className="cell-1">{phoneData2 ? phoneData2.platform.os : 'N/A'}</div>
                <div className="cell-2">{phoneData2 ? phoneData2.platform.chip : 'N/A'}</div>
                <div className="cell-3">{phoneData2 ? phoneData2.platform.cpu : 'N/A'}</div>
                <div className="cell-4">{phoneData2 ? phoneData2.platform.gpu : 'N/A'}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Exporting PhoneComparison component
export default PhoneComparison;
