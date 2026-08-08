const Translation_URL = "http://localhost:3001";

interface TranslationResponse {
  translation: string;
}
export async function getTranslationHealth() {
  const response = await fetch(
    `${Translation_URL}/health`
  );

  return await response.json();
}

export async function translate(text: string): Promise<TranslationResponse> {
  const response = await fetch(
    `${Translation_URL}/translation/translate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(
      `Translation service returned ${response.status}`,
    );
  }
  return await response.json();
}
