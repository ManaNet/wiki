## 💙 Greetings Image

This is a feature of Mana that compliments the Welcome or Leave messages. Both features have their own independent images that you can use.

![Preview](https://media.discordapp.net/attachments/775601335931240459/865828303615950848/unknown.png)

## :wrench: Setup

To setup, the only thing that you need to do is send the command message along with the image.

```
config [welcome/leave] image
```

For example, to get the image like the preview above to show up, all you have to do is do something similar to below:

![Example](https://media.discordapp.net/attachments/775601335931240459/865827660671221760/unknown.png?width=401&height=444)

## :o: Disable

To disable the feature, all you need to do is use the following command:

```
config [welcome/leave] image disable
```

## :newspaper: Important Notice

There are several important things you have to take note when using this command:
1. **YOU SHOULD NOT DELETE THE IMAGE/MESSAGE THAT HAS THE IMAGE ATTACHED OR ELSE IT WILL NOT SEND AN IMAGE**, this is because we do not store any of the images and freeload on Discord's CDN which saves us costs and also saves us the trouble to check for malware.

2. *[welcome/leave]* means either welcome or leave, for example, `config welcome image` or `config leave image`. It does not mean `config [welcome/leave] image`.