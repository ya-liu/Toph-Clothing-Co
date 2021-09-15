const path = require('path');
const express = require('express'); // npm installed
const api = require('./helpers/api.js');
const products = require('./helpers/products.js');
const qna = require('./helpers/qna.js');
const related = require('./helpers/related.js');
const reviews = require('./helpers/reviews.js');

const app = express();

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// other configuration...

app.get('/', (req, res) => {
  res.send('Server says hello!');
});

//Daniel

app.get('/products', (req, res) => {
  products.getProductList()
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

app.get('/products/:product_id/styles', (req, res) => {
  // console.log('req.params:', req.params);
  products.getProductStyles(req.params.product_id)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

app.get('/reviews/', (req, res) => {
  // console.log('req.query:', req.query);
  products.getProductReviews(req.query.product_id)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

app.get('/reviews/meta', (req, res) => {
  // console.log('req.query:', req.query);
  products.getProductRatings(req.query.product_id)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

// Alex





<<<<<<< HEAD
// Ya
=======
//Ya
app.get('/reviews', (req, res) => {
  const { product_id, count, sort } = req.query;
  reviews.getReviews({ product_id, count, sort })
    .then((APIRes) => {
      res.send(APIRes.data);
      res.status(200).end();
    })
    .catch((err) => {
      console.error(err);
      res.end();
    });
});
>>>>>>> main

app.get('/reviews/meta', (req, res) => {
  const { product_id } = req.query;
  reviews.getReviewMeta({ product_id })
    .then((APIRes) => {
      res.send(APIRes.data);
      res.status(200).end();
    })
    .catch((err) => {
      console.error(err);
      res.end();
    });
});

app.post('/reviews', (req, res) => {
  const {
    product_id, rating, summary, body, recommend, name, email, photos, characteristics,
  } = req.body;
  reviews.postReview({
    product_id, rating, summary, body, recommend, name, email, photos, characteristics,
  })
    .then(() => {
      res.status(201).end();
    })
    .catch((err) => {
      console.error(err);
      res.end();
    });
});



// Bishal





app.listen(9000, () => {
  console.log('connected to server at 9000');
});
