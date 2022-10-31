const Inventory = require('../models/clothes');

module.exports = {
    create
};

function create(req, res) {
    req.body.soldDonated = !!req.body.soldDonated;
    Inventory.findById(req.params.id, function(err, item) {
        item.additionalInfo.push(req.body);
        item.save(function(err) {
            res.redirect('/closet');
        });
    });
}