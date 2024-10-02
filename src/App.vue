<template>
  <nav></nav>
  <router-view />
</template>

<style>
:root {
  touch-action: none;
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --color-primary: rgb(244, 216, 8);
  --color-black: #333;
  --color-gray: #ddd;
  --color-white: #fff;

  text-align: center;
  color: var(--color-black);
}
</style>
