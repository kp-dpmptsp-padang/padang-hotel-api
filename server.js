const express = require("express");
const cors = require("cors");
const path = require("path");
const hotels = require("./data/hotels.json");
const app = express();

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Serve API documentation at root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Get all hotels with optional filtering
app.get("/hotels", (req, res) => {
  try {
    let filteredHotels = [...hotels.hotels];
    const { search, star_rating } = req.query;

    // Filter by search query
    if (search) {
      filteredHotels = filteredHotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by star rating
    if (star_rating) {
      filteredHotels = filteredHotels.filter(
        (hotel) => hotel.star_rating === parseInt(star_rating)
      );
    }

    res.json({
      hotels: filteredHotels,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

// Get hotel by ID
app.get("/hotels/:id", (req, res) => {
  try {
    const hotel = hotels.hotels.find((h) => h.id === parseInt(req.params.id));

    if (hotel) {
      res.json({
        hotel,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "Hotel not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something broke!",
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
