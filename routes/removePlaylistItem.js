var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

var Playlist = require('../models/playlist');

router.post('/', function(req,res){
    console.log(req.body);
    Playlist.remove({id : req.body.id}, function(err, data){
       if(err){
            res.status(500).json("Something went wrong.");
        }
        else{
            Playlist.find(function(err, playlist){
            if (err) {
                //code
                res.status(500).json("Something went wrong");
            }
            else{
                if (!playlist) {
                    //code
                    res.status(404).json("No song in playlist");
                }
                else{
                    res.status(200).json(playlist);
                }
            }
        });
        }
    });
});

module.exports = router;