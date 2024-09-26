import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; // Import this to get customFields
import './VED.css';

const VED = () => {
  const { siteConfig } = useDocusaurusContext();
  const vedIconSrc = useBaseUrl('img/ved.png');
  const [isIframeOpen, setIframeOpen] = useState(false);

  const toggleIframe = () => {
    setIframeOpen(!isIframeOpen);
  };

  const reloadIframe = () => {
    const iframe = document.getElementById('iframe');
    iframe.contentWindow.location.reload();
  };

  if (!siteConfig.customFields.enableVEDButton) {
    return null;  // Don't render the button if disabled
  }

  return (
    <div>
      <button id="ved-icon" onClick={toggleIframe}>
        <img src={vedIconSrc} alt="VED AI" style={{ width: '50px', height: '50px' }} />
      </button>

      {isIframeOpen && (
        <div id="iframe-container">
          <div id="iframe-header">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={vedIconSrc} alt="VED AI" style={{ height: '40px', paddingLeft: '10px' }} />
              <span style={{ fontSize: '18px', paddingLeft: '10px' }}>VED AI for Docs <span style={{ fontSize: '12px' }}>(Beta)</span></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button onClick={reloadIframe} style={{ padding: '5px 10px', backgroundColor: '#E7E7E7', fontSize: '14.5px', color: '#000', borderRadius: '5px', marginRight: '10px' }}>Clear Chat</button>
              <button onClick={toggleIframe} style={{ padding: '3px 10px', backgroundColor: '#E7E7E7', fontSize: '17px', color: '#000', borderRadius: '5px' }}>☓</button>
            </div>
          </div>
          <iframe id="iframe" src="https://veddocs.vunetsystems.com/" style={{ width: '100%', height: 'calc(100% - 70px)', border: 'none' }}></iframe>
        </div>
      )}
    </div>
  );
};

export default VED;
