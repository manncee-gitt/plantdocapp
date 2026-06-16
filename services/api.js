// services/api.js
export const analyzePlantImage = async (imageUri) => {
  return new Promise((resolve) => {
    // Simulate a 2-second delay for the AI analyzing the image
    setTimeout(() => {
      
      // List of your specific target crops
      const possibleResults = [
        {
          plantType: "Potato",
          disease: "Late Blight",
          confidence: "96.5%",
          treatment: "Apply a fungicide containing chlorothalonil. Ensure good drainage and avoid overhead watering."
        },
        {
          plantType: "Wheat",
          disease: "Leaf Rust",
          confidence: "92.1%",
          treatment: "Use resistant wheat varieties. Apply foliar fungicides at the first sign of rust pustules."
        },
        {
          plantType: "Maize",
          disease: "Northern Corn Leaf Blight",
          confidence: "89.4%",
          treatment: "Rotate crops annually. Apply appropriate fungicides if lesions spread before the silking stage."
        }
      ];

      // Pick a random result from the list above to simulate different scans
      const randomResult = possibleResults[Math.floor(Math.random() * possibleResults.length)];

      resolve({
        success: true,
        data: randomResult
      });
    }, 2000);
  });
};