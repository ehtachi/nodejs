const ex = require("express");
const path = require("path");

const router = ex.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Akash" });
});

module.exports = router;
