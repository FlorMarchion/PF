const { Router } = require("express");
const express = require("express");
const mercadopago = require("mercadopago");

const router = Router();
router.use(express.json());

/* ----------MERCADOPAGO---------- */

router.post("/", (req, res) => {
  const chosenRestaurant = req.body;
  let preference = {
    items: [
      {
        id: chosenRestaurant._id,
        title: chosenRestaurant.name,
        currency_id: "ARS",
        description: chosenRestaurant.menu[0],
        category_id: "art",
        quantity: 1,
        unit_price: chosenRestaurant.advance,
      },
    ],
    back_urls: {
      success: "https://eatout.onrender.com",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };
  mercadopago.preferences
    .create(preference)

    .then((response) => {

      res.redirect(
        `/SENDEMAIL?email=${chosenRestaurant.contact.email}&name=${chosenRestaurant.name}&price=${chosenRestaurant.advance}`
      );
    })

    .catch((error) => {
      res.status(404).send(error.message);
    })

   // .then((response) => {
   //   res.status(200).send(response);
  //  })
  //  .catch((error) => {
  //    res.status(404).send(error.message);
 //   });
});

module.exports = router;
