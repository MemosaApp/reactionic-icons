# reactionic-icons

[![CircleCI](https://circleci.com/gh/MemosaApp/reactionic-icons.svg?style=svg)](https://circleci.com/gh/MemosaApp/reactionic-icons)

Icon React helper components for Reactionic.

This will take care of adding `aria-label` and `aria-hidden` for you.

## Installing

```
yarn add reactionic-icons
```

## Usage

```
<Icon
  onClick={() => {}}
  defaultIcon="fa-icon"
  icons: shape({
    android: "fa-android",
    ios: "fa-ios",
    web: "fa-internet",
  }),
  hidden={false}
  label="text"
/>
```

If an icon is `hidden={false}`, then it must have a `label`.

By default icons are `hidden={true}` for screenreaders.

You can pass any event callbacks and additional props. They will be applied to the `<i>` that is created.
