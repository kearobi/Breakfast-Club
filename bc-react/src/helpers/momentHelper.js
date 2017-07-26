var moment = require('moment');

exports.helpers = {
    prettyDate: function(input_date) {
        return moment(input_date).format("dddd, MMMM Do YYYY h:mm:ss A");
    }
}

//add react-moment later
