var FileConstants            = require('../../../common/constants/FileConstants')
var FileTypes                = require('../../../common/constants/FileConstants').types;
var RemoteDirectoryActionCreator  = require('../actions/RemoteDirectoryActionCreator');
var ActiveAudioActionCreator = require('../actions/ActiveAudioActionCreator');

var FileUtils = {

	fileToDisplayString : function(file) {
		return FileUtils.getLastPathSection(file.path);		
	},

	getLastPathSection : function(path) {
		if (path.slice(-1) == "/")
			path = path.substring(0, path.length - 1);
		return path.replace(/^.*(\\|\/|\:)/, '');
	},

	handleFile : function(file) {
		console.log(RemoteDirectoryActionCreator);
        switch (file.type) {
        	
            case FileTypes.DIRECTORY:
				RemoteDirectoryActionCreator.setDirectory(file);
                break;

            case FileTypes.FILE:
                ActiveAudioActionCreator.setActivePlaylist(file);
                break;

            default:
            	console.log("cannot handle file. type: " + file.type);
                break;
        }
	}
}

module.exports = FileUtils;