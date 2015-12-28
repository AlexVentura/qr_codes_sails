# QR example in SailsJS

a [Sails](http://sailsjs.org) application

---

## Description

In this example I show you how to send a QR code via HTTP request in two simple steps:

1. Add a route to the controller you want to use like
```javascript
  'GET /qr': 'QrController.index',
  'GET /qr2': 'QrController.showqr'
```

2. Require the Node module in the controller, in this case **qr-image**
```javascript
  var qr = require('qr-image');
```

Also you can retreive the data you want to embed in the QR code by the parameters in the request like:

```javascript
  var text = req.param('data_to_embed');

  var img = qr.image(text);
  res.writeHead(200, {'Content-Type': 'image/png'});
  img.pipe(res);
```

I hope it could be useful,
Follow me on Twitter [@Lexynux](https://twitter.com/Lexynux)!
