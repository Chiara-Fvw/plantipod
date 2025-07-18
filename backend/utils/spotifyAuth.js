import config from "./config.js";

export async function getSpotifyAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = config;
  const tokenUrl = "https://accounts.spotify.com/api/token";

  const credentials = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64");

  try {
    const response = await fetch(
      tokenUrl,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
        })
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Spotify token error: ${errorData.error_description || response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch(e) {
    console.error("Failed to get Spotify token:", e.message);
    throw error;
  }
}