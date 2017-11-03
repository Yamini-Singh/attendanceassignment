var mongoose = require('mongoose');
var Login = mongoose.model('logininfo');
var Attendance= mongoose.model('attendanceinfo');

exports.getUser = (req,res) => {
    var email = req.params.email;
    Login.findOne({email: email}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
} 
exports.createUser = (req, res) => {
    var login = new Login({
        email: req.body.email,
        name: req.body.name,
        role: 1,
        password: req.body.password
    });
    login.save((error, response) => {
        if (error) {
             res.json(error);
        }
        else {
            res.json({
                success: true,
                body: response
            });
        }
    });
} 

exports.getAttendance=(req,res)=>{
    var email=req.params.email;
    Attendance.find({email:email},function(err,response){
        if(err)
        res.json("Error in getting attendance", err);
        else
        res.json({
            success:true,
            body: response
        });
    })
}

exports.setAttendance = (req, res) => {
    var email = req.body.email;
    var date = req.body.date;
    console.log(email+ " " +date);
    Attendance.find({email:email,date:date}).then( user => {
        console.log(user);
    if (!user.length) {
    var attendance = new Attendance({
        email: email,
        date: date  
    });
    attendance.save((error, response) => {
        if (error) {
             res.json(error);
        }
        else {
            res.json({
                success: true,
                body: response
            });
        }
    });
}
else {
    res.json("Already exists");
}
}
)
} 
