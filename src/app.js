(function (window) {
  if (typeof window.Thumpress === "undefined") {
    window.Thumpress = (filesUrls, sizeThumb, callback) => {
      const shuffle = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
        }
        return a;
      };

      var canvas = document.createElement("CANVAS");

      canvas.width = sizeThumb;
      canvas.height = sizeThumb;
      //document.body.append(canvas);
      var ctx = canvas.getContext("2d");
      var numImage = 0;
      var images = [];

      const drawImageToCtx = (img_, dX, dY, scale_) => {
        let scale = scale_ ? scale_ : 1;

        let w = img_.width;
        let h = img_.height;

        let sX = 0;
        let sY = 0;

        if (w > h) {
          sX = w * 0.5 - h * 0.5;
          w = h;
        } else {
          sY = h * 0.5 - w * 0.5;
          h = w;
        }
        ctx.drawImage(
          img_,
          sX,
          sY,
          w,
          h,
          dX,
          dY,
          sizeThumb * 0.5 * scale,
          sizeThumb * 0.5 * scale
        );
      };

      const generateThumb = () => {
        if (images.length == 1) {
          drawImageToCtx(images[0], 0, 0, 2);
        } else if (images.length == 2) {
          drawImageToCtx(images[0], -sizeThumb * 0.5, 0, 2);
          drawImageToCtx(images[1], sizeThumb * 0.5, 0, 2);
        } else if (images.length == 3) {
          drawImageToCtx(images[0], 0, 0);
          drawImageToCtx(images[1], sizeThumb * 0.5, 0);
          drawImageToCtx(images[2], 0, sizeThumb * 0.5, 2);
        } else {
          drawImageToCtx(images[0], 0, 0);
          drawImageToCtx(images[1], sizeThumb * 0.5, 0);
          drawImageToCtx(images[2], 0, sizeThumb * 0.5);
          drawImageToCtx(images[3], sizeThumb * 0.5, sizeThumb * 0.5);
        }

        callback(canvas.toDataURL());
      };

      filesUrls = shuffle(filesUrls);
      filesUrls.forEach((imgUrl) => {
        var lower = imgUrl.toLowerCase();
        if (
          lower.indexOf("jpg") > -1 ||
          lower.indexOf("jpeg") > -1 ||
          lower.indexOf("gif") > -1 ||
          lower.indexOf("png") > -1
        ) {
          //If file is image
          numImage++;
          //Put image loading
          var image = new Image();
          image.setAttribute("crossorigin", "anonymous");
          image.onload = (e_) => {
            images.push(image);
            numImage--;
            if (numImage < 1) generateThumb();
          };
          image.src = imgUrl;
          if (numImage > 3) return;
        }
      });

      if (numImage == 0 && callback) return callback();
    };
  }
})(window);
