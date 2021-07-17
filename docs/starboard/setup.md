## :stars: What is Starboard

Starboard is a feature that is pretty well-known among many users, to simplify, it is a feature that allows users to get their messages pinned/sent on a certain specific channel either because it was too funny or cool.

## :wrench: How to setup?

To setup Starboard, all you need is to set the channel where all the messages will be sent and it can be done with a simple command.

```
config starboard channel #channel
```

> Please ensure Mana can write on the channel otherwise she will throw an error message to notify you that she cannot write on the channel.

> #channel means mentioning the channel where she will send the message.

## :moon: How to disable?

To disable the starboard, it is as easy as saying one, two and three!

```
config starboard disable
```

## :newspaper: Configuration

There is only one configuration setting for the Starboard feature and that is setting the minimum stars required for a message before it can be pinned on the starboard channel, this is by default 2.

```
config starboard min [amount]
```

> Please note that you need to setup the channel first before you can run this command.