import React from 'react';
import Script from 'next/script';

const AdMain = ({ admaxId }) => {
  const admaxScript = `
    (admaxads = window.admaxads || []).push({
      admax_id: "${admaxId}",
      type: "banner"
    });
  `;

  return (
    <div>
      <div className="admax-ads" data-admax-id={admaxId} style={{ display: 'inline-block', width: '728px', height: '90px' }}></div>

      <Script id="admax-script" strategy="beforeInteractive">
        {admaxScript}
      </Script>

      <Script src="https://adm.shinobi.jp/st/t.js" strategy="afterInteractive" async />
    </div>
  );
};

export default AdMain;
