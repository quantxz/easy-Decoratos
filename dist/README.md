<h1 align="center">Welcome to speeed Decorators 👋</h1>
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

> decorators for speed your express application

## Install

```sh
npm i starter-decorator
```

## Codes 

  # @serverStarter
```sh
  import { ServerStarter } from 'starter-decorator';

  class App {
      your Application configs
    }

  @ServerStarter(App, 5665)
  class Server {}
```

  # @Route
```sh
  class Controller {

    @Route("/routePath", "get")
    public index() {
        //Your Controller logic 
      }
  } 

  export default Controller

    --- Application Class ---

  import { Controller } from './path/to/Controller';

  class App {
    //others Application configs;
  
    private routes() {
        this.server.use(new Controller)
    }
  
  }


```

## Author

👤 **Anderson**

* Twitter: [@caraaleatoriu](https://twitter.com/caraaleatoriu)
* Github: [@quantxz](https://github.com/quantxz)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_