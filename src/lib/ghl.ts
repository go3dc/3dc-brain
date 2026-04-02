export async function createGHLContact(data: {
  name: string;
  email: string;
  phone: string;
}) {
  const API_KEY = process.env.GHL_API_KEY;
  const LOCATION_ID = process.env.GHL_LOCATION_ID;

  if (!API_KEY || !LOCATION_ID) {
    throw new Error('Missing GHL API credentials');
  }

  const response = await fetch(
    `https://rest.gohighlevel.com/v1/contacts/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.name,
        email: data.email,
        phone: data.phone,
        tags: ["3DC Brain Inquiry"],
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GHL API error: ${response.statusText} - ${errorText}`);
  }

  return response.json();
}
