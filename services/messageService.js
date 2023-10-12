const Message = require("../models/messageModel");

const messageService = {
    postMessage: async ({ user, message }) => {
        const createdAt = new Date();
        const newMessage = new Message({ user, message, createdAt });
        try {
            await newMessage.save()
        } catch (err) {
            throw new Error(err)
        }
    },
    getMessages: async () => {
        const messages = await Message.find();
        return messages;
    }
}

module.exports = messageService;
