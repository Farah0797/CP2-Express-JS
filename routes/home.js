/*router.use(function (req, res, next) {
    var date = new Date();
    if(date.getDay > 0 && date.getDay < 6 && date.getHours() > 9 && date.getHours < 17){
        next();
    }else{
        res.redirect('/');
    }
});
*/

exports.home=function(req,res){
    res.render('home')
}