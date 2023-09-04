<h1 align="center">Welcome to easy Decorators 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/server-starter-decorator" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/server-starter-decorator.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/caraaleatoriu" target="_blank">
    <img alt="Twitter: caraaleatoriu" src="https://img.shields.io/twitter/follow/caraaleatoriu.svg?style=social" />
  </a>
</p>

> decorator for start a express application direct from the class itself

## Install

```sh
npm i easy-decorators
```

## Code 

```sh
  import { ServerStarter } from 'starter-decorator';

  class App {
      your Application configs
    }

  @ServerStarter(App, 5665)
  class Server {}
```

## Author

👤 **Anderson**

* Twitter: [@caraaleatoriu](https://twitter.com/caraaleatoriu)
* Github: [@quantxz](https://github.com/quantxz)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_