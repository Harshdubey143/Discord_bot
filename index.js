require("dotenv").config();
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  AttachmentBuilder,
} = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const name = ["Harsh", "Omyaa", "Adyaa", "Second Harsh"];
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "Hey, I’m Harsh's Bot 🤖",
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ex") await interaction.reply("Miss Mohini");
  else if (interaction.commandName === "roomates")
    await interaction.reply(name.join("\n"));
  else if (interaction.commandName === "owner") {
    const file = new AttachmentBuilder("harsh.jpg");
    const embed = new EmbedBuilder()
      .setTitle("Harsh Photo")
      .setImage("attachment://harsh.jpg") // Reference the local file
      .setColor("Blue");
    await interaction.reply({ embeds: [embed], files: [file] });
  }
});
client.login();
