const GPT_URL = "https://your-gpt-api/generatePrompt";

export const api = {
  getPrompt: (yearGroup, subject, topic) => {
    return fetch(`${GPT_URL}?yearGroup=${yearGroup}&subject=${subject}&topic=${topic}`)
      .then(res => res.text());
  }
}