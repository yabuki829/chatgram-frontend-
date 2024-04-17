import React from 'react';
import Script from 'next/script';

const AdMobile = ({ admaxId }) => {
  const admaxScript = `
    (admaxads = window.admaxads || []).push({
      admax_id: "${admaxId}",
      type: "banner"
    });
  `;

  return (
    <div>
      <div className="admax-ads" data-admax-id={admaxId} style={{ display: 'inline-block' }}></div>
      
      <Script id={`admax-script-${admaxId}`} strategy="beforeInteractive">
        {admaxScript}
      </Script>

      <Script src="https://adm.shinobi.jp/st/t.js" strategy="afterInteractive" async />
    </div>
  );
};

export default AdMobile;
