const Clothes = require('../models/clothes');

module.exports = {
  index,
  new: newItem,
  create,
  show,
  edit,
  update
};

function update(req, res) {
  Clothes.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, item) {
      if (err || !item) return res.redirect('/closet');
      res.redirect(`/closet/${item._id}`);
    }
  );
}

function edit(req, res) {
  Clothes.findOne({ _id: req.params.id }, function (err, item, title) {
    if (err || !item) return res.redirect('/closet');
    res.render('closet/edit', { item, title });
  });
}

function index(req, res) {
  Clothes.find({ user: req.user._id }, function (err, item) {
    res.render('closet/index', { title: "My Closet", item });
  })
};

function show(req, res) {
  Clothes.findById(req.params.id, function (err, item, title) {
    res.render('closet/show', { item, title: item.itemType })
  })
};

function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const item = new Clothes(req.body);
  item.save(function (err) {
    if (err) return res.redirect('/closet/new');
    res.redirect(`/closet/${item._id}`);
  });
};

function newItem(req, res, title) {
  res.render('closet/new', { title });
}