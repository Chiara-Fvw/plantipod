import express from "express";
import { searchSpotifyEpisodes } from "../utils/spotify.js";

const spotifyRouter = express.Router();

spotifyRouter.get("/", async (req, res) => {
  try {
    const episodes = await searchSpotifyEpisodes();
    res.json(episodes);
  } catch (err) {
    console.error("Spotify error:", err);
    res
      .status(err.status || 500)
      .json({ error: err.message || "Internal server error" });
  }
});

export default spotifyRouter;
