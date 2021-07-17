module.exports = {
  title: 'Mana',
  description: 'The wiki or guide to using Mana, this is where we explain how some categories or commands of Mana works with a few image examples for most of the pages to help you get started in using Mana as quickly and smoothly as possible!',
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.manabot.fun/icon.ico' }],
    ['meta', { name: 'theme-color', content: '#5dade2'}],
    ['meta', { name: 'og:image', content: 'https://cdn.manabot.fun/images/Mana.png'}],
    ['meta', { name: 'og:description', content: 'The wiki or guide to using Mana, this is where we explain how some categories or commands of Mana works with a few image examples for most of the pages to help you get started in using Mana as quickly and smoothly as possible!'}],
    ['meta', { name: 'og:title', content: 'Mana - Wiki'}]
  ],
  theme: 'yuu',
  themeConfig: {
    yuu: {
        defaultDarkTheme: true,
    },
    smoothScroll: true,
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', 'link': '/guide/' },
        { text: 'Invite', 'link': 'https://manabot.fun/invite' },
        { text: 'Discord', 'link': 'https://discord.gg/9FefYq4p83' }
    ],
    sidebar: {
      '/': [
        {
          title: 'Introduction',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['guide/', 'Structure of the Guide'],
          ]
        },
        {
          title: 'Hourly Images',
          collapsable: false,
          children: [
            ['hourly-images/yuriverse', 'Yuri Universe'],
            ['hourly-images/waifuworld', 'Waifu World'],
          ]
        },
        {
          title: 'Starboard',
          collapsable: false,
          children: [['starboard/setup', 'Setup']]
        },
        {
          title: 'Welcome/Leave',
          collapsable: false,
          children: [
            ['greetings/welcome', 'Welcome Messages'],
            ['greetings/leave', 'Leave Messages'],
            ['greetings/image', 'Adding Images']
          ]
        },
        {
          title: 'Emoji',
          collapsable: false,
          children: [
            ['emoji/migrate', 'Migrate Emojis'],
            ['emoji/lookup', 'Lookup Emojis'],
            ['emoji/retrieve', 'Retrieve Emojis']
          ]
        }
      ]
    }
  }
}
