// utils/qrGenerator.js
const QRCode = require('qrcode');

async function generateQRCode(data) {
  try {
    const qrCodeDataURL = await QRCode.toDataURL(data, {
      width: 200,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });
    return qrCodeDataURL;
  } catch (error) {
    console.error('QR Code generation error:', error);
    throw error;
  }
}

module.exports = { generateQRCode };