import { getSpotifyAccessToken } from "./spotifyAuth.js";

export async function searchSpotifyEpisodes() {
  const token = await getSpotifyAccessToken();
  const query = "The Houseplant Coach"
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=episode&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw { status: response.status, message: errorData };
  }

  const data = await response.json();

  return data.episodes.items.map((ep) => ({
    id: ep.id,
    title: ep.name,
    description: ep.description,
    duration_ms: ep.duration_ms,
    image: ep.images[0]?.url || null,
    spotifyUrl: ep.external_urls.spotify,
    releaseDate: ep.release_date,
    showName: ep.show?.name || null,
  }));
}
