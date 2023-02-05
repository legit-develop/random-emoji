const btnEl = document.getElementById("btn");
console.log(btnEl);
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=c44ac40176e6740bfbf8050368ff840be56c64f9"
  );
  data = await response.json();
  //console.log(data);
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", (e) => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  //console.log(randomNum);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
});
