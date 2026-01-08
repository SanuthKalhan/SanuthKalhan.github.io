export async function getPointsFromImage(
  imageSrc: string, 
  count: number = 60000
): Promise<Float32Array> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;

    img.onerror = () => {
      console.error(`Failed to load image at: ${imageSrc}`);
      // Return random points so the app doesn't crash/stay blank
      const fallback = new Float32Array(count * 3).map(() => (Math.random() - 0.5) * 10);
      resolve(fallback);
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const size = 256; 
      canvas.width = size;
      canvas.height = size;

      ctx.drawImage(img, 0, 0, size, size);
      const imageData = ctx.getImageData(0, 0, size, size).data;
      const points: number[] = [];

      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const index = (y * size + x) * 4;
          const r = imageData[index];
          const g = imageData[index + 1];
          const b = imageData[index + 2];
          const a = imageData[index + 3];

          // Threshold check: Is it dark AND not transparent?
          if (r < 128 && a > 128) { 
            const pX = (x / size - 0.5) * 10;
            const pY = (0.5 - y / size) * 10;
            points.push(pX, pY, 0);
          }
        }
      }

      const finalPoints = new Float32Array(count * 3);
      if (points.length === 0) {
        console.warn("No dark pixels found in image. Check contrast.");
        for (let i = 0; i < count * 3; i++) finalPoints[i] = (Math.random() - 0.5) * 10;
      } else {
        for (let i = 0; i < count * 3; i++) {
          const ptIdx = (i % (points.length / 3)) * 3;
          finalPoints[i * 3] = points[ptIdx];
          finalPoints[i * 3 + 1] = points[ptIdx + 1];
          finalPoints[i * 3 + 2] = points[ptIdx + 2];
        }
      }
      resolve(finalPoints);
    };
  });
}