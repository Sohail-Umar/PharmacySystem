const stripe = require('stripe')('your_secret_key');


const stripeCharge = async (req, res) => {
  try {
    const { amount, token } = req.body;

    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'usd',
      description: 'Example charge',
      source: token,
    });

    res.json({ id: charge.id });
  } catch (err) {
    res.status(500).end();
  }
}

module.exports = { stripeCharge }