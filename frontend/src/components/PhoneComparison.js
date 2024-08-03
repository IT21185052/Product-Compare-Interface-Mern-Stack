import React, { useState } from 'react';
import './PhoneComparison.css';
import SearchContainer from './SearchContainer';
import CompareModeSwitch from './CompareModeSwitch';
import TextBox from './TextBox';
import phoneImage1 from '../assets/1.jpg';
import phoneImage2 from '../assets/2.jpg';
import logo from '../assets/logo.png';

const getYouTubeThumbnailUrl = (url) => {
  const videoId = url.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    return `https://img.youtube.com/vi/${videoId.substring(0, ampersandPosition)}/hqdefault.jpg`;
  }
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const getYouTubeVideoUrl = (url) => {
  const videoId = url.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    return `https://www.youtube.com/watch?v=${videoId.substring(0, ampersandPosition)}`;
  }
  return `https://www.youtube.com/watch?v=${videoId}`;
};


const defaultPhoneData1 = {
  name: 'Xiaomi 14',
  picture: phoneImage1,
  ram:'256GB 12GB RAM',
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
  logolink:'https://www.amazon.com/dp/B0CY2FFJT5?tag=gsmarena093-20&linkCode=osi&th=1&psc=1'
};

const defaultPhoneData2 = {
  name: 'Apple Iphone 15 Pro Max',
  picture: phoneImage2,
  ram:'256GB 8GB RAM',
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
  thumbnail: 'https://www.youtube.com/watch?v=cVpcl7KGly0',
  logolink:'https://www.amazon.com/dp/B0CMZ3HT9K?tag=gsmarena093-20&linkCode=osi&th=1&psc=1'
};

const highlightDifferences = (value1, value2) => {
  const words1 = value1.split(/[\s,/]+/);
  const words2 = value2.split(/[\s,/]+/);

  const maxLength = Math.max(words1.length, words2.length);

  const highlightedWords1 = [];
  const highlightedWords2 = [];

  for (let i = 0; i < maxLength; i++) {
    const word1 = words1[i] || ''; 
    const word2 = words2[i] || ''; 

    if (word1 === word2) {
      highlightedWords1.push(`<span class="similar">${word1}</span>`);
      highlightedWords2.push(`<span class="similar">${word2}</span>`);
    } else {
      highlightedWords1.push(`<span class="different">${word1}</span>`);
      highlightedWords2.push(`<span class="different">${word2}</span>`);
    }
  }

  return {
    value1: highlightedWords1.join(' '),
    value2: highlightedWords2.join(' '),
  };
};



const PhoneComparison = () => {
  const [phoneData1, setPhoneData1] = useState(defaultPhoneData1);
  const [phoneData2, setPhoneData2] = useState(defaultPhoneData2);
  const [compareMode, setCompareMode] = useState('FULL');
  

  return (
    <div className="main-container">
      <div className="top-container">
        <div className="box empty-box">
          <CompareModeSwitch setCompareMode={setCompareMode} />
        </div>
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
                <div className="thumbnail-container" onClick={() => window.open(getYouTubeVideoUrl(phoneData1.thumbnail), '_blank')}>
                  <img src={getYouTubeThumbnailUrl(phoneData1.thumbnail)} alt="YouTube thumbnail" className="thumbnail" />
                  <div className="play-logo"></div>
                </div>
              )}
            </div>
          </div>
          <div className="bottom-box">
            {phoneData1 && (
              <>
                  <p className="price">${phoneData1.price}</p>
                  <img src={logo} alt="logo" className="logo" onClick={() => window.open(phoneData1.logolink, '_blank')} />
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
              {phoneData1 && (
                <div className="thumbnail-container" onClick={() => window.open(getYouTubeVideoUrl(phoneData2.thumbnail), '_blank')}>
                  <img src={getYouTubeThumbnailUrl(phoneData2.thumbnail)} alt="YouTube thumbnail" className="thumbnail" />
                  <div className="play-logo"></div>
                </div>
              )}
            </div>
          </div>
          <div className="bottom-box">
            {phoneData2 && (
              <>
                  <p className="price">${phoneData2.price}</p>
                  <img src={logo} alt="logo" className="logo" onClick={() => window.open(phoneData2.logolink, '_blank')} />
                <p className="all-prices">All Prices</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <table className="comparison-table">
          <tbody>
            {(() => {
              const networkComparison = highlightDifferences(phoneData1.network, phoneData2.network);
              return (
                <tr className="row-1">
                  <td className="col-1-1 category">NETWORK</td>
                  <td className="col-1-2 subcategory">Technology</td>
                  <td className="sub-sub col" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? networkComparison.value1 : phoneData1.network }}></td>
                  <td className="sub-sub col" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? networkComparison.value2 : phoneData2.network }}></td>
                </tr>
              );
            })()}
            {(() => {
              const launchAnnouncedComparison = highlightDifferences(phoneData1.launch.announced, phoneData2.launch.announced);
              const launchStatusComparison = highlightDifferences(phoneData1.launch.status, phoneData2.launch.status);
              return (
                <tr className="row-2">
                  <td className="col-1-1 category">LAUNCH</td>
                  <td className="col-1-2 subcategory cell-content">
                    <div className="cell-top">Announced</div>
                    <div className="cell-bottom">Status</div>
                  </td>
                  <td className="col sub-sub cell-content">
                    <div className="cell-top" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? launchAnnouncedComparison.value1 : phoneData1.launch.announced }}></div>
                    <div className="cell-bottom" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? launchStatusComparison.value1 : phoneData1.launch.status }}></div>
                  </td>
                  <td className="col sub-sub cell-content">
                    <div className="cell-top" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? launchAnnouncedComparison.value2 : phoneData2.launch.announced }}></div>
                    <div className="cell-bottom" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? launchStatusComparison.value2 : phoneData2.launch.status }}></div>
                  </td>
                </tr>
              );
            })()}
            {(() => {
              const bodyDimensionsComparison = highlightDifferences(phoneData1.body.dimensions, phoneData2.body.dimensions);
              const bodyWeightComparison = highlightDifferences(phoneData1.body.weight, phoneData2.body.weight);
              const bodySimComparison = highlightDifferences(phoneData1.body.sim, phoneData2.body.sim);
              const bodyBuildComparison = highlightDifferences(phoneData1.body.build, phoneData2.body.build);
              return (
                <tr className="row-3">
                  <td className="col-1-1 category">BODY</td>
                  <td className="col-1-2 subcategory cell-content">
                    <div className="cell-top">Dimensions</div>
                    <div className="cell-middle">Weight</div>
                    <div className="cell-middle">SIM</div>
                    <div className="cell-bottom">Build</div>
                  </td>
                  <td className="col sub-sub cell-content">
                    <div className="cell-top" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? bodyDimensionsComparison.value1 : phoneData1.body.dimensions }}></div>
                    <div className="cell-middle" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? bodyWeightComparison.value1 : phoneData1.body.weight }}></div>
                    <div className="cell-middle" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? bodySimComparison.value1 : phoneData1.body.sim }}></div>
                    <div className="cell-bottom" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? bodyBuildComparison.value1 : phoneData1.body.build }}></div>
                  </td>
                  <td className="col sub-sub cell-content">
                    <div className="cell-top" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? bodyDimensionsComparison.value2 : phoneData2.body.dimensions }}></div>
                    <div className="cell-middle" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? bodyWeightComparison.value2 : phoneData2.body.weight }}></div>
                    <div className="cell-middle" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? bodySimComparison.value2 : phoneData2.body.sim }}></div>
                    <div className="cell-bottom" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? bodyBuildComparison.value2 : phoneData2.body.build }}></div>
                  </td>
                </tr>
              );
            })()}
            {(() => {
              const displayTypeComparison = highlightDifferences(phoneData1.display.type, phoneData2.display.type);
              const displaySizeComparison = highlightDifferences(phoneData1.display.size, phoneData2.display.size);
              const displayResolutionComparison = highlightDifferences(phoneData1.display.resolution, phoneData2.display.resolution);
              return (
                <tr className="row-4">
                  <td className="col-1-1 category">DISPLAY</td>
                  <td className="col-1-2 subcategory cell-content">
                    <div className="cell-top">Type</div>
                    <div className="cell-middle">Size</div>
                    <div className="cell-bottom">Resolution</div>
                  </td>
                  <td className="col sub-sub cell-content">
                    <div className="cell-top" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? displayTypeComparison.value1 : phoneData1.display.type }}></div>
                    <div className="cell-middle" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? displaySizeComparison.value1 : phoneData1.display.size }}></div>
                    <div className="cell-bottom" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? displayResolutionComparison.value1 : phoneData1.display.resolution }}></div>
                  </td>
                  <td className="col sub-sub cell-content">
                    <div className="cell-top" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? displayTypeComparison.value2 : phoneData2.display.type }}></div>
                    <div className="cell-middle" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? displaySizeComparison.value2 : phoneData2.display.size }}></div>
                    <div className="cell-bottom" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? displayResolutionComparison.value2 : phoneData2.display.resolution }}></div>
                  </td>
                </tr>
              );
            })()}
            {(() => {
              const platformOSComparison = highlightDifferences(phoneData1.platform.os, phoneData2.platform.os);
              const platformChipComparison = highlightDifferences(phoneData1.platform.chip, phoneData2.platform.chip);
              const platformCPUComparison = highlightDifferences(phoneData1.platform.cpu, phoneData2.platform.cpu);
              const platformGPUComparison = highlightDifferences(phoneData1.platform.gpu, phoneData2.platform.gpu);
              return (
                <tr className="row-5">
                  <td className="col-1-1 category">PLATFORM</td>
                  <td className="col-1-2 subcategory cell-content">
                    <div className="cell-top">OS</div>
                    <div className="cell-middle">Chipset</div>
                    <div className="cell-middle">CPU</div>
                    <div className="cell-bottom">GPU</div>
                  </td>
                  <td className="col sub-sub cell-content">
                    <div className="cell-top" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? platformOSComparison.value1 : phoneData1.platform.os }}></div>
                    <div className="cell-middle" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? platformChipComparison.value1 : phoneData1.platform.chip }}></div>
                    <div className="cell-middle" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? platformCPUComparison.value1 : phoneData1.platform.cpu }}></div>
                    <div className="cell-bottom" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? platformGPUComparison.value1 : phoneData1.platform.gpu }}></div>
                  </td>
                  <td className="col sub-sub cell-content">
                    <div className="cell-top" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? platformOSComparison.value2 : phoneData2.platform.os }}></div>
                    <div className="cell-middle" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? platformChipComparison.value2 : phoneData2.platform.chip }}></div>
                    <div className="cell-middle" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? platformCPUComparison.value2 : phoneData2.platform.cpu }}></div>
                    <div className="cell-bottom" dangerouslySetInnerHTML={{ __html: compareMode === 'DIFFERENCES' ? platformGPUComparison.value2 : phoneData2.platform.gpu }}></div>
                  </td>
                </tr>
              );
            })()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PhoneComparison;
