export default function useFaviconBadgeNotify ({
  src,
  badgeValue,
  backgroundColor = "red",
  textColor = "white",
}: {
  src: string;
  badgeValue: any;
  backgroundColor?: string;
  textColor?: string;
}) {
  let faviconSize = 96;
  const canvas = document?.createElement("canvas") || {};
  canvas.width = faviconSize;
  canvas.height = faviconSize;

  const context = canvas?.getContext("2d");
  const img = document?.createElement("img");
  img?.setAttribute("src", src);

  const createCanvasContext = () => {
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
    context!.fillText(badgeValue, canvas.width - faviconSize / 3, faviconSize / 3);
  }

  const drawBadge: () => Promise<string> = () => {    
    return new Promise((resolve) => {
      img?.addEventListener('load', () => {
        if (badgeValue && context) {
          createCanvasContext();
          resolve(canvas.toDataURL("image/png"))
        } else {
          resolve(src);
        }
      })
    })
  }

  const destroyBadge = () => {
    img?.removeEventListener('load', createCanvasContext);
  }

  return {
    drawBadge,
    destroyBadge,
  };
}