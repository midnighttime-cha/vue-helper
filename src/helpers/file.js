export default {
  checkFileSize: (elem, sizes) => {
    var file_size = elem[0].files[0].size;
    if (file_size > sizes) return false;
    else return true;
  },

  CheckFileType: (type) => {
    let filetype = {};//'Unknown';
    switch (type) {
      case 'doc': case 'docx':
        filetype.type = 'MSDOC';
        filetype.desc = 'Microsoft Word Application File.';
        break;
      case 'xls': case 'xlsx':
        filetype.type = 'MSXLS';
        filetype.desc = 'Microsoft Excel Application File.';
        break;
      case 'ppt': case 'pptx':
        filetype.type = 'MSPPT';
        filetype.desc = 'Microsoft Power Ponit Application File.';
        break;
      case 'pdf':
        filetype.type = 'PDF';
        filetype.desc = 'PDF Application File.';
        break;
      case 'txt': case 'csv':
        filetype.type = 'TEXT';
        filetype.desc = 'Text Application File.';
        break;
      case 'php': case 'html': case 'asp': case 'aspx': case 'js': case 'css': case 'jsp':
        filetype.type = 'SCRIPT';
        filetype.desc = 'Script Application File.';
        break;
      case 'jpg': case 'jpeg': case 'png': case 'bmp': case 'svg': case 'ico': case 'gif': case 'psd':
        filetype.type = 'IMAGE';
        filetype.desc = 'Image File.';
        break;
      case 'webm': case 'mkv': case 'flv': case 'vob': case 'avi': case 'mov': case 'wmv':
      case 'rm': case 'rmvb': case 'mp4': case 'm4v': case 'mpeg': case '3gp': case 'f4v': case 'acc':
        filetype.type = 'VIDEO';
        filetype.desc = 'Video Multimedia File.';
        break;
      case 'flac': case 'm4a': case 'mp3': case 'ogg': case 'raw': case 'wav': case 'wma':
        filetype.type = 'AUDIO';
        filetype.desc = 'Audio Multimedia File.';
        break;
      case 'zip':
        filetype.type = 'COMPRESS';
        filetype.desc = 'Compress Files';
        break;
    }
    return filetype;
  },
}