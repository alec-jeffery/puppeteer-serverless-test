const getRandomText = async () => {
  return "why did the chicken cross the road?";
};

const displayText = (text) => {
  const h1 = document.querySelector("h1");
  h1.textContent = text;
};

const refreshText = async () => {
  const text = await getRandomText();
  displayText(text);
};

// load text into h1
refreshText();
