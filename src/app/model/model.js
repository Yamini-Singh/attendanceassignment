var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginInfoSchema = new Schema ({
    email: { type : String, required: true , unique: true},
    password: { type: String, required: true },
    role: {type: Number }
});

var attendanceSchema = new Schema ({
    email: { type : String  },
    date: { type: String }
   
});
var Login =mongoose.model('logininfo',loginInfoSchema);
var Attendance= mongoose.model('attendanceinfo',attendanceSchema);
module.exports = Login , Attendance; 