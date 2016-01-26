var FileUtils = require('../utils/FileUtils');
var reqError  = require('./ReqError');

var handler = {
	handle : function(request, response, filePath) {
		var contentType = FileUtils.getMimeType(filePath);
		FileUtils.read(filePath, function(error, content) {
            if (error) {
                reqError.handle(request, response, error);
            } else {
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(content, 'utf-8');
            }
        });
	}
}

module.exports = handler;
