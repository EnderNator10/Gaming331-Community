var PERM = require('../Perms');
//var Q = require('q');
var status = function () {
    var that = {
        LastStatus: undefined,
        Register: function (Add, AddCommand, ModuleHandler) {
            AddCommand("status", PERM.permissions.rolenames.Admin, function (command, args, message) {
                message.delete().catch(console.error);
                var stat = args.join(' ');
                if (stat && stat !== "" && stat !== "clear") {
                    that.LastStatus = stat;
                    ModuleHandler.StatusUpdate();
                }
                else {
                    that.LastStatus = undefined;
                    ModuleHandler.StatusUpdate();
                }
            });
            AddCommand("say", PERM.permissions.rolenames.Admin, function (command, args, message) {
                message.delete().catch(console.error);
                message.channel.send(args.join(' '));
            });
            return that;
        },
        UnRegister: function (Remove, RemoveCommand, ModuleHandler) {
            //ALWAYS clean up commands
            that.LastStatus = undefined;
            RemoveCommand("status", PERM.permissions.rolenames.Admin);
            RemoveCommand("say", PERM.permissions.rolenames.Admin);
            return that;
        },
        Status: function (add) {
            if (that.LastStatus) {
                add(that.LastStatus);
            }
            return add;
        }
    };
    return that;
};
module.exports = status;