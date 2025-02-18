require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ex",
    description: "Replies with Ex name!",
  },
  {
    name: "roomates",
    description: "Replies with roomates names",
  },
  {
    name: "owner",
    description: "Pic of Myself",
  },
];

const rest = new REST({ version: "10" }).setToken();

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("client id"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
