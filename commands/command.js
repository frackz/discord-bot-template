module.exports = {
    command: {
        builder: null //Insert either SlashCommandBuilder(with .toJSON() at last) or json format
    },
    executors: {
        subs: {
            "kick": (interaction, bot) => {},  // For example, if you run sub "kick" it will run this code
        },
        standard: (interaction, bot) => {} // This will be ran if no subs was provided
    }
}