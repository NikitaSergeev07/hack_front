<template>
  <header class="header">
    <nav class="navbar">
      <ul class="navbar__menu">
        <li class="navbar__item"><router-link to="/home" class="navbar__link">Главная</router-link></li>
        <li class="navbar__item"><router-link to="/detailed" class="navbar__link">Настроение</router-link></li>
        <li class="navbar__item"><router-link to="/selector" class="navbar__link">Настроение(быстро)</router-link></li>
        <li class="navbar__item"><router-link to="/history" class="navbar__link">Настроение семьи</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #977E73;
  padding: 10px;
  color: #ffffff;
  position: relative;
  z-index: 1;
}
.navbar {
  display: flex;
  justify-content: center;
}
.navbar__menu {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
}
.navbar__item {
  font-size: 1.2rem;
}
.navbar__link {
  color: #ffffff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background 0.3s;
}
.navbar__link:hover {
  background-color: #f2a1d1;
}
</style>
