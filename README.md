[![npm version](https://badge.fury.io/js/mn-code.svg)](https://badge.fury.io/js/mn-code)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-code.svg)](https://gemnasium.com/github.com/minimalist-components/mn-code)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   

# mn-code

A component to display code with syntax highlight

See the [demo](https://minimalist-components.github.io/mn-code/)

<a href="https://minimalist-components.github.io/mn-code/">
<img src="https://raw.githubusercontent.com/minimalist-components/mn-code/master/preview.gif">
</a>

<!-- [![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-code/master/sources/example/mn-code.gif)](http://codepen.io/darlanmendonca/full/akgXQq)  -->

### Install

```sh
npm install --save mn-code
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-code/tree/master/dist) with your preferred tool.

### Usage

Use the tag `mn-code` and put your code

```html
<mn-code class="js">
  // a hello world
  console.log('hello')
</mn-code>
```

the component automatically recognize the language, but if you want specify the language, using a css class. The following classes be available `html`, `css`, `js`, and `sh` (shell script).
