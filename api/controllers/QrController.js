/**
 * QrController
 *
 * @description :: Server-side logic for managing qrs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// Require the Node module to generate QR codes
var qr = require('qr-image');

module.exports = {



  /**
   * `QrController.index()`
   */
  index: function (req, res) {

  	// Some data to embed in the code
  	var code = qr.image('https://twitter.com/Lexynux', { type: 'svg', size: 5 });

  	code.pipe(res);
  	return res.type('svg');

    // return res.json({
    //   todo: 'index() is not implemented yet!'
    // });
  },

  /**
   * `QrController.showqr()`
   */
  showqr: function (req, res) {
    // return res.json({
    //   todo: 'showqr() is not implemented yet!'
    // });

  	// Some data to embed in the QR code
	var text = 'http://alejandroventura.com.mx';

	try {
        var img = qr.image(text, { size: 5 });
        res.writeHead(200, {'Content-Type': 'image/png'});
        img.pipe(res);
    } catch (e) {
        res.writeHead(414, {'Content-Type': 'text/html'});
        res.end('<h1>414 Request-URI Too Large</h1>');
    }
  }

};
