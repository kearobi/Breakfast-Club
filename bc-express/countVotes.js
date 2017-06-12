// returns the id of the winning restaurant for the current event
var countVotes = function(){
	let event_id;
	let count_1 = 0;
	let count_2 = 0;
	return Bevent.findOne({
			limit: 1,
			order: [['date', 'DESC']]
	})
	.then(function(event){
		event_id = event.id;
		return GuestList.findAll({
			where:{
				event_id: event_id
			}
	})
	.then(function(lists){
		for (var i = 0; i < lists.length; i++){
			if (lists[i].vote == '1'){
				count_1++;
			}
			else if (lists[i].vote == '2'){
				count_2++;
			}
		}
		if (count_1 > count_2){
			return new Promise()
		}
	})
	})
}
