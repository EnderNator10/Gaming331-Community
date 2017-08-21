var PERM = require('../Perms');
var Fun = function () {
    var funpicImages = ["WoW for cats: https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif",
        "Bert is gonna be pissed: https://i.pinimg.com/736x/da/76/e8/da76e8f92ffa7561bc99be733a714c57--funny-shit-funny-pics.jpg",
        "The cat burned the charger: https://i.pinimg.com/736x/c1/65/02/c16502e626ed0f8c3537beec610e7ac6--funny-pets-funny-animals.jpg",
        "https://s-media-cache-ak0.pinimg.com/736x/f7/14/a3/f714a35f92de708f56d2aa3bd7a5edbe--evil-cats-candles.jpg",
        "Keemstar has been deleted: http://www.maneki-neko.nl/memes/Keemstar%20deleted.jpg",
        "Luckly i dont see This goat's hands :facepalm: : http://cdn.playbuzz.com/cdn/c1ffedc1-2f64-4503-8c91-689bb8c48218/8325ab64-99f2-4ce1-9da3-c98b8ae7e395.jpg",
        "When u ry killing a admin in a MMORPG: https://lh3.googleusercontent.com/-ZTy0vB70kuM/UwwQwBMmEoI/AAAAAAAAAU8/Xgo2TJlLVwY/w426-h240/angel_beats_gif_animation_4_by_black_wolf_90-d4ifmsj.gif",
    "When u just jumped form a boat and the water gets drained: http://vignette4.wikia.nocookie.net/filthy-frank/images/a/a5/Pink_guy.gif","when u find out ur dog had the shits: http://i0.kym-cdn.com/photos/images/facebook/000/000/578/1234931504682.jpg"];
    var eightBallAnswers = [
        "You may rely on it",
        "As I see it, yes",
        "i wuld be",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don’t count on it",
        "It is certain",
        "It is decidedly so",
        "Most likely",
        "My reply is no",
        "My sources say no",
        "Outlook good",
        "Outlook not so good",
        "Reply hazy, try again",
        "Signs point to yes",
        "Very doubtful",
        "Without a doubt",
        "Yes",
        "Yes, definitely",
        "No!",
        "Are you kidding me?",
        "LMAO",
        ":100:",
        "Signs point to no",
        "Not sure about that one :eyes:"
    ];
    var that = {
        Register: function (Add, AddCommand, ModuleHandler) {
            AddCommand("pet", PERM.permissions.rolenames.everyone, that.pet);
            AddCommand("C#", PERM.permissions.rolenames.everyone, that.cs);
            AddCommand("funpic", PERM.permissions.rolenames.everyone, that.funpic);
            AddCommand("pantsu", PERM.permissions.rolenames.everyone, that.pantsu);
            AddCommand("ping", PERM.permissions.rolenames.everyone, that.ping);
            AddCommand("hug", PERM.permissions.rolenames.everyone, that.hug);
            AddCommand("theclaw", PERM.permissions.rolenames.everyone, that.theclaw);
            AddCommand("agree", PERM.permissions.rolenames.everyone, that.agree);
            AddCommand("8ball", PERM.permissions.rolenames.everyone, that.eightball);
            return that;
        },
        UnRegister: function (Remove, RemoveCommand, ModuleHandler) {
            RemoveCommand("pet", PERM.permissions.everyone, that.pet);
            RemoveCommand("C#", PERM.permissions.everyone, that.cs);
            RemoveCommand("funpic", PERM.permissions.rolenames.everyone, that.funpic);
            RemoveCommand("pantsu", PERM.permissions.rolenames.everyone, that.pantsu);
            RemoveCommand("ping", PERM.permissions.rolenames.everyone, that.ping);
            RemoveCommand("hug", PERM.permissions.rolenames.everyone, that.hug);
            RemoveCommand("theclaw", PERM.permissions.rolenames.everyone, that.theclaw);
            RemoveCommand("agree", PERM.permissions.rolenames.everyone, that.agree);
            RemoveCommand("8ball", PERM.permissions.rolenames.everyone, that.eightball);
            return that;
        },
        pet: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send(message.member + " pets " + args.join(' ') + ' ' + PERM.channels.GetEmoji("petme"));
        },
        cs: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send("Why do Java developers wear glasses? Because they don't C# " + PERM.channels.GetEmoji("lul"));
        },
        funpic: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send(funpicImages[Math.round(Math.random() * funpicImages.length)]);
        },
        pantsu: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send(PERM.channels.GetEmoji("forsenpuke") + "  " + message.author + "\n" + PERM.channels.GetEmoji("pantsu"));
        },
        ping: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send('Pong');
        },
        hug: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send(message.member + " hugs " + args.join(' ') + " " + PERM.channels.GetEmoji("bingHeart"));
        },
        theclaw: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send(message.member + ": http://i.imgur.com/XpowyN2.jpg");
        },
        agree: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send(message.member + " agrees to " + args.join(' ') + " :thumbsup:");
        },
        eightball: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send({
                embed: {
                    color: 3447003,
                    author: {
                        name: message.author.username,
                        icon_url: message.author.avatarURL
                    },
                    fields: [{
                        name: args.join(' '),
                        value: eightBallAnswers[Math.round(Math.random() * eightBallAnswers.length)]
                    }],
                }
            });
        },
    };
    return that;
};
module.exports = Fun;
