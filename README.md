<div align="center">
<h1>Classnames-TS</h1>

<a>
  <img
    height="80"
    width="80"
    alt="bee"
    src="https://github.com/nok91/classnames-ts/blob/main/other/bee.png"
  />
</a>

<p>Simple utility for conditionally joining classNames together</p>

</div>

<br />
<hr />
<br />

![CI/CD](https://github.com/nok91/classnames-ts/workflows/CI/CD/badge.svg)
[![DeepScan grade](https://deepscan.io/api/teams/11630/projects/14533/branches/272975/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11630&pid=14533&bid=272975)
[![codecov](https://codecov.io/gh/nok91/classnames-ts/branch/main/graph/badge.svg?token=7YE3XV9YRP)](https://codecov.io/gh/nok91/classnames-ts)

This previously resided inside React as a utility, but is now pulled out and library-agnostic. 

Please note this is a rewritten version of [classname](https://github.com/JedWatson/classnames) library.


## The problem

So let's say you have to handle some dynamic question, a common scenario should be something like:

```js
var toggleClassName = 'toggle';
if (isLoading) {
  toggleClassName += ' toggle--loading';
}
if (isSelected) {
  className += ' toggle--active';
}
```

## The solution

Assigning class name strings can be hard to read and error-prone. This utility solves this problem:

```js
var toggleClassName = className({
  'toggle': true,
  'toggle--loading': isLoading,
  'toggle--active': isSelected
});
```

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save classnames-ts
```

or

for installation via [yarn][yarn]

```
yarn add classnames-ts
```

## Examples


The `classNames` function takes any number of arguments which can be a strings, objects or array or a mix of them.

```js
classNames('class1', 'class2'); // => 'class1 class2'
classNames('class1', { class2: true }); // => 'class1 class2'
classNames({ 'class-header': true }); // => 'class-header'
classNames({ 'class-footer': false }); // => ''
classNames({ footer: true }, { header: true }); // => 'footer header'
classNames({ footer: true, header: true }); // => 'footer header'
```

It's compatible with different types of arguments:

```js
classNames('footer', { header: true, wrapper: false }, 'icon', { bar: true }); // => 'footer header icon bar'
classNames(null, false, 'header', undefined, { bar: null }, ''); // => 'header'

var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'
```

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]



## License

[MIT](LICENSE)
