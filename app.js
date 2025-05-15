const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const bodyParser = require("body-parser");

const token = "7557913257:AAE6C2g9oVMt5T-5ExyWkNsbqVArf990ios";
const bot = new TelegramBot(token, { polling: true });

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "👋 Відкрий WebApp", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "🛍 Відкрити магазин",
            web_app: { url: "https://z7whpcrb-3000.euw.devtunnels.ms/" },
          },
        ],
      ],
      resize_keyboard: true,
    },
  });
});

bot.on("message", (msg) => {
  if (msg.web_app_data) {
    const data = JSON.parse(msg.web_app_data.data);
    console.log("📩 Отримано з WebApp:", data);
    bot.sendMessage(msg.chat.id, `✅ Ти замовив: ${data.item}`);
  }
});

app.listen(3000, () => console.log("🌐 Server on http://localhost:3000"));
