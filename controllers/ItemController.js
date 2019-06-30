var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Item = require('../models/Item');
 
// Create Item
router.post('/', function (req, res) {
    Item.create({
        name: req.body.name,
        price: req.body.price,
        available: req.body.available,
        }, 
        function (err, item) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
           res.status(200).send(item);
        });
});
 
// Get all Items
router.get('/', function (req, res) {
    Item.find({}, function (err, items) {
        if (err) return res.status(500).send("There was a problem finding the Items.");
        res.status(200).send(items);
    });
});
// Get item by Id
router.get('/:id', function (req, res) {
    Item.findById(req.params.id, function (err, item) {
        if (err) return res.status(500).send("There was a problem finding the Item.");
        if (!item) return res.status(404).send("No item found.");
res.status(200).send(item);
    });
});
// Delete item
router.delete('/:id', function (req, res) {
    Item.findByIdAndRemove(req.params.id, function (err, item) {
        if (err) return res.status(500).send("There was a problem deleting the item.");
res.status(200).send("Item "+ item.name +" was deleted.");
    });
});
// Update item by id
router.put('/:id', function (req, res, next) {
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true},
function (err, item) {
        if (err) return res.status(500).send("There was a problem updating the item."); 
res.status(200).send(item);
    });
});
module.exports = router;