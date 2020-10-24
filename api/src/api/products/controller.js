const Product = require('./model')
const request = require('request-promise-cache')
const config  = require('../../configuration')
const apiKey = config.get('GOOGLE_BOOKS_API_KEY')

const getProductDetails = async function(googleId) {
  const url = 
    `https://www.googleapis.com/books/v1/volumes/${googleId}?key=${apiKey}`
  const result = await request({
    url: url,
    cacheKey: url,
    cacheTTL: 3600 * 24,
    cacheLimit: 24,
    resolveWithFullResponse: false
  })
  return JSON.parse(result)
}

const populateDetails = async function(product) {
  try {
    const details = await getProductDetails(product.googleId)
    return {
      _id: product._id,
      price: product.price,
      info: details.volumeInfo,
    }
  } catch (error) {
    console.log(error)
  }
}

exports.getProducts = async function() {
  const products = await Product.find()
  const results = await Promise.all(products.map(populateDetails))
  return results
}

exports.getProduct = async function(id) {
  const product = await Product.findById(id)
  return populateDetails(product);
}
