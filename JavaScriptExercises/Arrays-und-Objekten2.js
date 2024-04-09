const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

(async () => {
    const favoriteVehicle = {
        type: "Car",
        brand: "Tesla",
        model: "Model 3",
        electric: true,
        year: 2022,
        features: ["Autopilot", "Electric", "Zero Emissions"]
    };

    console.log(`Vehicle Type: ${favoriteVehicle.type}
Brand: ${favoriteVehicle.brand}
Model: ${favoriteVehicle.model}
Electric: ${favoriteVehicle.electric ? "Yes" : "No"}
Year: ${favoriteVehicle.year}
Features: ${favoriteVehicle.features.join(", ")}`);

    rl.close();
})();
