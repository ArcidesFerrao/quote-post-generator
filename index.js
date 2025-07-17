import fetch from "node-fetch";

const prompt = "Can you speak portuguese?";

const res = await fetch("http://localhost:11434/api/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "gemma:2b",
    prompt,
    stream: false,
  }),
});

const data = await res.json();
console.log("Post: ", data.response);
