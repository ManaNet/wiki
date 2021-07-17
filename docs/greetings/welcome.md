## :wave: Welcome Messages

All of us already know what all of these greeting messages are, chances of you having been greeted by a Discord bot before is already high which is why I won't explain this.

## :wrench: How to setup?

To setup the welcome function, there are several procedures into doing this.

1. Setup the channel where the bot will send the welcome messages.
```
config welcome channel #channel
```

2. Setup the welcome message.
```
config welcome set Welcome <mention> to <server>!
You are our special <userCount>th member!
```

## :book: Message Patterns

You may have seen a little while ago about those weird patterns being thrown at the welcome messages, those are called `placeholders` and their purpose is obvious, to be a placeholder for the value they represent.

There are several of them, here is a list of them and their meaning:

- **\<mention\>** To mention the user who is the focus of the event.
- **\<server\>** To mention the name of the server.
- **\<userCount\>** To mention the amount of users in the server (including the user).

If you want to suggest more patterns, feel free to send them to me via the [Discord Server](https://manabot.fun/discord) or [GitHub](https://github.com/ManaNet/mana-issues)

## :o: Disable

There are two disable options for the function, one is for erasing the welcome message *(which is used for when you want to use a welcome image only)* and the other is disabling the entire function *(which will only remove the channel)*.

**To erase the welcome message, set it to none**:
```
config welcome set none
```

**To disable the feature, use the following command**:
```
config welcome disable
```