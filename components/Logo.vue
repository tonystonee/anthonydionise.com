<template>
  <img
    class="AnthonyLogo"
    alt="Anthony Logo"
    src="img/logo.png"
  >
</template>

<style>
.AnthonyLogo {
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
