## :innocent: Grabbing the emojis from a message.

As a frequent user of the mobile client of Discord, it is hard for me to collect an emoji's image from a message since the option to copy the link of the emoji is only available through desktop but this command changes everything as it will help you collect the emojis from a messaage.

## :satisfied: How to retrieve the emojis from a message?

There are several methods, we will go through each method step by step.

• The first method is by sending us the message id along with the channel where the message is located.

```
emoji retrieve [message-id] [#channel]
```

> To use this step, you need to enable Discord Developer mode which is harmless, finding the setting is simple, head to your `User Settings` then inside, find `Behavior` and once you are inside, there should be an option called `Developer Mode` that is no checked yet.

> `Message ID` can be retrieved long-pressing a message with emojis and scrolling deep down and pressing the `Copy ID` button.

> `#channel` refers to the channel where the message was sent, this is a required option since we cannot find the message without the channel.

• The second method is by sending the `message link` instead.

```
emoji retrieve [discord link to message]
```

## :gear: Referencing messages to get emojis
You can reference messages to grab the emojis from there as seen on the photo below, this also applies for steal command.

![Reference](https://images-ext-1.discordapp.net/external/6z3DdNWaki3nZnNBQIjFcEI9TI4j-eldyI9_lMV7LXE/https/cdn.mihou.pw/emoji-lookup-reference-example.png)