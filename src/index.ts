const useFaviconBadgeNotify = ({
  src,
  backgroundColor = "red",
  textColor = "white",
}: {
  src: string;
  backgroundColor?: string;
  textColor?: string;
}) => {
  let faviconSize = 96;
  const canvas = document?.createElement("canvas") || {};
  canvas.width = faviconSize;
  canvas.height = faviconSize;

  const context = canvas?.getContext("2d");
  const img = document?.createElement("img");
  
  let imageLoadHandler = () => {};

  const createCanvasContext = (value: any) => {
    context!.drawImage(img, 0, 0, faviconSize, faviconSize);

    // Draw Badge Circle
    context!.beginPath();
    context!.arc(
      canvas.width - faviconSize / 3,
      faviconSize / 3,
      faviconSize / 3,
      0,
      2 * Math.PI
    );
    context!.fillStyle = backgroundColor;
    context!.fill();

    // Draw Badge Value
    context!.font = '55px "helvetica", sans-serif';
    context!.textAlign = "center";
    context!.textBaseline = "middle";
    context!.fillStyle = textColor;
    context!.fillText(value, canvas.width - faviconSize / 3, faviconSize / 3);
  }

  const drawBadge: (value: any) => Promise<string> = (badgeValue) => {
    img?.setAttribute("src", src);

    return new Promise((resolve) => {
      imageLoadHandler = () => {
        if (badgeValue && context) {
          createCanvasContext(badgeValue);
          resolve(canvas.toDataURL("image/png"))
        } else {
          resolve(src);
        }
      }

      img?.addEventListener('load', imageLoadHandler)
    });
  };

  const destroyBadge = () => {
    img?.removeEventListener('load', imageLoadHandler);
  }

  return {
    drawBadge,
    destroyBadge,
  };
}

export default useFaviconBadgeNotify;