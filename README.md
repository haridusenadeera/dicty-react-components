[![Build Status](https://travis-ci.org/dictyBase/dicty-react-components.svg?branch=develop)](https://travis-ci.org/dictyBase/dicty-react-components)

# dicty-react-components
Collection of [react](http://facebook.github.io/react/index.html) components
for developing frontpage application at [dictyBase](http://dictybase.org)

# Install
The components are available through npm package installation.

```js
npm install dictyBase/dicty-react-components
```

Since the component uses [bootstrap3](http://getbootstrap.com) for UI, 
the default installation also brings in [bootstrap3](http://getbootstrap.com) and [jquery](http://jquery.com)
through npm installation.

# Usage
Some of components that requires ```bootstrap3``` could use the one that comes with default install. To use them put the following ```require```
lines in your module.

```js
require('bootstrap/dist/css/bootstrap');
var jQuery = require('jquery');
require('bootstrap/dist/js/bootstrap');
```

The third ``require``` might not be needed for bootstrap components that does
not any javascript to function. However, ```jQuery``` seemed to be needed
irrespective of the bootstrap component need javascript or not.

To use ```jquery``` globally with [webpack](http://webpack.github.io) add the
following in the webpack config file.

```js
plugins: [
    new webpack.ProvidePlugin(
        {
            jQuery: "jquery"
        }
    )
]
```

## Try out
Go to the
[examples](https://github.com/dictyBase/dicty-react-components/tree/master/examples)
folder to try out the components.

## Components
* [Tab](docs/Tab.md) - Generates markup for bootstrap tab integrated with [react-router](https://github.com/rackt/react-router).
* [Panel](docs/Panel.md) - Generates markup for bootstrap panel and accordion.
