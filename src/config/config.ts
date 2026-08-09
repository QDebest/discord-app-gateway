const translationURL = process.env.TRANSLATION_URL;

if (!translationURL) {
  throw new Error("TRANSLATION_URL environment variable is not defined");
}

export const config = {
  translationURL,
};
