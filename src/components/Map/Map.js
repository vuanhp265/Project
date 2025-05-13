import React from 'react';
import styles from './Map.module.css';

function Map() {
  // Thay thế đoạn mã dưới đây bằng mã nhúng bạn đã sao chép từ Google Maps
  const embedCode = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4725151165176!2d105.81095227508041!3d21.013771380631795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab624d5b38d7%3A0xc4eb647dc53c8099!2zMTAxIFAuIEzDoW5nIEjhuqEsIEzDoW5nIEjhuqEsIMSQ4buRbmcgxJBhLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1746178904383!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <div className={styles.mapContainer}>
      <h3>Map</h3>
      <div className={styles.mapResponsive} dangerouslySetInnerHTML={{ __html: embedCode }} />
    </div>
  );
}

export default Map;