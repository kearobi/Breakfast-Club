var moment = require('moment');

exports.helpers = {
    syncToServerTime: function(input_date) {
        return moment(input_date).format();
    }
}

//add react-moment later
