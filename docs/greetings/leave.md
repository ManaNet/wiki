## :wave: Leave Messages

If you have read the welcome message part, you do not have to read everything here. All you have to know is instead of `config welcome`, you are using `config leave` for this one.

## :wrench: How to setup?

To setup the leave function, there are several procedures into doing this.

1. Setup the channel where the bot will send the leave messages.
```
config leave channel #channel
```

2. Setup the leave message.
```
config leave set leave <mention> to <server>!
You are our special <userCount>th member!
```

## :book: Message Patterns

You may have seen a little while ago about those weird patterns being thrown at the leave messages, those are called `placeholders` and their purpose is obvious, to be a placeholder for the value they represent.

There are several of them, here is a list of them and their meaning:

- **\<mention\>** To mention the user who is the focus of the event.
- **\<server\>** To mention the name of the server.
- **\<userCount\>** To mention the amount of users in the server (including the user).

If you want to suggest more patterns, feel free to send them to me via the [Discord Server](https://manabot.fun/discord) or [GitHub](https://github.com/ManaNet/mana-issues)

## :o: Disable

There are two disable options for the function, one is for erasing the leave message *(which is used for when you want to use a leave image only)* and the other is disabling the entire function *(which will only remove the channel)*.

**To erase the leave message, set it to none**:
```
config leave set none
```

**To disable the feature, use the following command**:
```
config leave disable
```