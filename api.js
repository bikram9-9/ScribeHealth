import axios from "axios";

export const getSummary = async (transcript) => {
  console.log("TRANS " + transcript);
  const prompt = `Give me a summarized version of this in numerical points. It must only contain the important points from the conversation -  ${transcript}`;
  const data = {
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 4000,
    temperature: 0.6,
  };
  return await axios
    .post("https://api.openai.com/v1/completions", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer  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",
      },
    })
    .then((res) => {
      console.log(`RES IS ${res.data.choices[0].text}`);
      return res.data.choices[0].text;
    });
};
