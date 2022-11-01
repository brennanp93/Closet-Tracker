const Inventory = require('../models/clothes');

module.exports = {
    create,
    delete: deleteInfo
};

function deleteInfo(req,res) {
    Inventory.findOne({
        'additionalInfo._id': req.params.id,
        // 'reviews.user': req.user._id
    }). then (function(item) {
        if (!item) return res.redirect('/closet');
        item.additionalInfo.remove(req.params.id);
        item.save().then(function() {
          res.redirect(`/closet/${item._id}`);
        }).catch(function(err) {
          return next(err);
        });
      });
}

function create(req, res) {
    req.body.soldDonated = !!req.body.soldDonated;
    Inventory.findById(req.params.id, function(err, item) {
        item.additionalInfo.push(req.body);
        item.save(function(err) {
            res.redirect(`/closet/${item.id}`);
        });
    });
};