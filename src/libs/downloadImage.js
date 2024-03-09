const downloadImage = (result) => {
  if (result) {
    const base64String = result.replace(/^data:image\/(png|jpeg);base64,/, "");

    const binaryString = atob(base64String);

    const arrayBuffer = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      arrayBuffer[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer], { type: "image/jpeg" });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `image_refiner_${Date.now()}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
};

export default downloadImage;
