const Inventory = require('../models/clothes');

module.exports = {
    index,
    new: newItem,
    create, 
    show
};

function show(req, res) {
    // console.log(req.params.id);
    Inventory.findById(req.params.id, function(err, item, title) {
        res.render('closet/show', {item, title: item.itemType})
        
    })
    
};

function index(req, res) {
    Inventory.find({}, function(err, item) {
        res.render('closet/index', { title: "my closet", item });
    })
};

function create(req, res) {
    // // Remove leading/trailing spaces
    // req.body.brand = req.body.brand.trim();
    // // Split if it's not an empty string
    // if (req.body.brand) req.body.brand = req.body.brand.split(/\s*,\s*/);
    // // Delete empty properties on req.body for defaults to happen 
    // for (let key in req.body) {
    //   if (req.body[key] === '') delete req.body[key];
    // }
    req.body.soldDonated = !!req.body.soldDonated;
    const item = new Inventory(req.body);
    item.save(function(err) {
      if (err) return res.redirect('/closet/new');
      console.log(item);
      res.redirect(`/closet/${item._id}`);
    });
  }

function newItem(req, res, title) {
    res.render('closet/new', {title});
}
