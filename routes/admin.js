const ex = require("express");
const path = require("path");
const crypto = require("crypto");

const root_dir = require("../utils/path");

const router = ex.Router();

const products = [];

router.get("/add-product", (req, res) => {
  console.log("Inside add products route");
  res.render("add-product", {
    pageTitle: "add product",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title, id: crypto.randomUUID() });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
