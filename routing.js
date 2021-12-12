var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.sendFile(__dirname+ "/" + "index.html");
})

router.get('/link',function(req,res){
    res.redirect('https://www.linkedin.com/in/i76uum-r-abdul-marzouk-70b576205/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BsxjQgootSOOlvSrQf9RksQ%3D%3D')
});

router.get('/fb',function(req,res){
    res.redirect('https://www.facebook.com/abdul.marzouk');
});

router.get('/twi',function(req,res){
    res.redirect('https://twitter.com/marzoukTkd?t=xxCQv5bjVDKEBrDJSwZB7Q&s=08');
});

router.get('/ins',function(req,res){
    res.redirect('https://www.instagram.com/marzouk_tkd')
});

router.get('/instagram',function(req,res){
    res.redirect('https://www.instagram.com/marzouk_tkd');
});

router.get('/facebook',function(req,res){
    res.redirect('https://www.facebook.com/abdul.marzouk');
});

router.get('/linkedin',function(req,res) {
    res.redirect('https://www.linkedin.com/in/i76uum-r-abdul-marzouk-70b576205/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BsxjQgootSOOlvSrQf9RksQ%3D%3D');
});

router.get('/twitter',function(req,res) {
    res.redirect('https://twitter.com/marzoukTkd?t=xxCQv5bjVDKEBrDJSwZB7Q&s=08');
});

module.exports = router;