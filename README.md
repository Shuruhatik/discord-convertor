Discord Convertor [![NPM version](https://img.shields.io/npm/v/discord-convertor.svg?style=flat-square&color=informational)](https://npmjs.com/package/discord-convertor)
====
- To convert code from one version to another in discord.js
- `v13`,  `v12`, `v11`
- You can put a transfer from it or to it. You have the freedom to move between these versions, whether transferring from the new to the old or from the old to the new.


Installing
----------
You can start install the package on your project:
```sh-session
npm install discord-convertor
yarn add discord-convertor
```
-   CommonJS
```js
const convertor = require('discord-convertor')
```
-   ESM
```js
import convertor from 'discord-convertor';
```

 Method
-----------------
### convertor
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `options`  |Object| options |
|  `options.fromVersion`  |String|The version to convert from v11, v12 and 13|
|  `options.toVersion`  |String|  The version to convert to v11, v12 and 13|
|  `options.code`  |String| your code |

Versions available in the package
-----------------
- `v13`,  `v12`, `v11`

Examples
-----------------
- [File system](https://nodejs.org/api/fs.html)
```js
const convertor = require('discord-convertor')
const fs = require("fs")
const code = fs.readFileSync('./index.js',{ encoding: 'utf8', flag: 'r' });

console.log(convertor({ code, fromVersion: "v11", toVersion: "v13" }))
```

- [Discord.js v13](https://discord.js.org/)
```js
const convertor = require('discord-convertor')

// <prefix>convert <fromVersion> <toVersion> <code>
client.on('messageCreate', message => {
  if(!message.guild)return 
  let args = message.content.split(' ').slice(1)
  if(message.content.startsWith(prefix + "convert")){
    let fromVersion = args[0]
    let toVersion =  args[1]
    let code = args.slice(2).join(" ")
    message.author.send(`\`\`\`js\n${convertor({code,fromVersion ,toVersion}).code}\`\`\``)
  }
})
```

Useful Links
------------
- [ST Studio](https://dsc.gg/shuruhatik) is the best place to get support.
- [The NPM package webpage](https://npmjs.com/package/discord-convertor) is, well, the webpage for the NPM package.
<a  href="https://dsc.gg/shuruhatik"><img  src="https://discord.com/api/guilds/766364402763956254/widget.png?style=banner3"></a>

If you have a problem or have a suggestion,
------------
- Contact With Me Discord: [`Shuruhatik#0001`](https://github.com/shuruhatik)
- [Github](https://github.com/shuruhatik) | [Youtube](https://www.youtube.com/channel/UCXSrBk2f9wzB-fugmRR4wsg)

License
-------
Refer to the [LICENSE](LICENSE) file.