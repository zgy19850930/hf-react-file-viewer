// Copyright (c) 2017 PlanGrid, Inc.

// module.exports = require('./file-viewer');

import FileViewer from './file-viewer';

export default FileViewer;

// Support CommonJS export
if (module && module.exports) {
  module.exports = FileViewer;
}
