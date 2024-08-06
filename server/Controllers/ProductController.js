const Product = require("../Models/ProductModel");
const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const { AWS_BUCKET_NAME } = process.env;

const s3 = new AWS.S3();

exports.addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      category,
      imageUrl,
      imageUrl1,
      imageUrl2,
    } = req.body;

    const product = await Product.create({
      name,
      price,
      description,
      category,
      imageUrl,
      imageUrl1,
      imageUrl2,
    });
    res.status(201).json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// exports.addProduct = async (req, res) => {
//   try {
//     const { name, description, price, imageUrls, category } = req.body;

//     // Create a new product and save to the database
//     const product = await Product.create({
//       name,
//       description,
//       price,
//       imageUrls,
//       category,
//     });

//     res.status(201).json({ product });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
exports.searchProducts = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }

    const regex = new RegExp(query, "i"); // Case-insensitive regex

    const products = await Product.find({
      $or: [{ name: regex }, { description: regex }],
    });

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// exports.handleFileUpload = (req, res) => {
//   // Multer will process the uploaded files, and you can access them in req.files
//   const fileNames = req.files.map((file) => file.filename);
//   res.json({ fileNames });
// };

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res
      .status(200)
      .json({ message: "Data fetched successfully", success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// In your controller file (e.g., ProductController.js)
// exports.getProductsByCategory = async (req, res) => {
//   try {
//     const { categoryId } = req.body;
//     if (!categoryId) {
//       return res.status(400).json({
//         error: "Invalid request. Please provide a category ID.",
//       });
//     }

//     const products = await Product.find({ category: { $in: categoryId } });
//     res
//       .status(200)
//       .json({ message: "Data fetched successfully", success: true, products });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

exports.getProductsByCategories = async (req, res) => {
  try {
    const { categoryId } = req.body;
    if (!categoryId || !Array.isArray(categoryId)) {
      return res.status(400).json({
        error: "Invalid request. Please provide an array of categories.",
      });
    }
    const products = await Product.find({ category: { $in: categoryId } });
    res
      .status(200)
      .json({ message: "Data fetched successfully", success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    // Extract prodyct ID from request parameters or query parameters
    const { productId } = req.body;
    // Fetch products based on the filter
    const product = await Product.findById(productId);
    res
      .status(201)
      .json({ message: "Data fetched successfully", success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
