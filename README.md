# mn-code

A component to display code with syntax highlight

<!-- See the [demo](minimalist-components.github.io/mn-code/) -->

<!-- [![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-code/master/sources/example/mn-code.gif)](http://codepen.io/darlanmendonca/full/akgXQq)  -->

### Install

```sh
bower install --save mn-code
```

Or just download the main files, located in [dist/](https://github.com/minimalist-components/mn-code/tree/master/dist)


### Usage

Use the tag `mn-code` and put your code

```html
<mn-code class="js">
  // a hello world
  console.log('hello')
</mn-code>
```

the component automatically recognize the language, but if prefer, specify the language, using a css class.
the list available is:

- html
- css 
- js
- sh (shell script/bash)
