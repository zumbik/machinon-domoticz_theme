/*
	Check source file on github for latest version
*/
	
var branch = 'master';

$.ajax({url: 'https://raw.githubusercontent.com/EdddieN/machinon-domoticz_theme/'+ branch +'/theme.json' , async: false, dataType: 'json', success: function(data) {
	
	gitVersion = data.version
	
	if (theme.version !== gitVersion) {
		newVersionText = '<i>Machinon Version '+ data.version + ' is available! <a href="https://github.com/EdddieN/machinon-domoticz_theme/tree/' + branch + '" target="_blank">Click here to download</a></i>';
	}
}
});
