import axios from "axios";

export const getSummary = async (transcript) => {
  console.log("TRANS " + transcript);
  const prompt = `Give me a summarized version of this in numerical points that we need to remember -   ${transcript}`;
  const data = {
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 4000,
    temperature: 0.4,
  };
  return await axios
    .post("https://api.openai.com/v1/completions", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
    })
    .then((res) => {
      console.log(`RES IS ${res.data.choices[0].text}`);
      return res.data.choices[0].text;
    });
};
