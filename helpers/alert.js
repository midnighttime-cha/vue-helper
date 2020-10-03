import swal from 'sweetalert';
export default {
  confirm: (confirmCallback = null, cancelCallback = null, text = null, title = null) => {
    let options = {
      title: title ? title : "Are you sure?",
      icon: "info",
      buttons: true,
      infoMode: true
    };
    if (text) options.text = text;

    swal(options).then(willConfirm => {
      if (willConfirm) {
        if (confirmCallback) {
          confirmCallback();
        }
      } else {
        if (cancelCallback) {
          cancelCallback();
        }
      }
    })
  },

  success: (confirmCallback = null, cancelCallback = null, text = null, title = null) => {
    let options = {
      title: title ? title : "Are you sure?",
      icon: "info",
      buttons: true,
      infoMode: true
    };
    if (text) options.text = text;

    swal(options).then(willConfirm => {
      if (willConfirm) {
        if (confirmCallback) {
          confirmCallback();
        }
      } else {
        if (cancelCallback) {
          cancelCallback();
        }
      }
    })
  }
}