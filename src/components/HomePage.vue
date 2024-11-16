<template>
  <div class="layout-container">
    <header class="header">
      <nav class="navbar">
        <ul class="navbar__menu">
          <li class="navbar__item"><a href="/home" class="navbar__link">Главная</a></li>
          <li class="navbar__item"><a href="/selector" class="navbar__link">Настроение</a></li>
          <li class="navbar__item"><a href="/history" class="navbar__link">История</a></li>
        </ul>
      </nav>
    </header>

    <div class="home-page">
      <h1>Привет, {{ userName }}!</h1>

      <p class="welcome-text">
        Добро пожаловать в наш семейный дневник эмоций!<br><br>
        Здесь мы будем делиться нашими чувствами, переживаниями и радостями — большими и маленькими. Этот дневник — наше место для искренности, поддержки и взаимопонимания. Он помогает нам фиксировать моменты, которые придают жизни смысл, учиться понимать друг друга и ценить каждый день, проведенный вместе.<br><br>
        Каждый день — новая страница, на которой мы можем записать наши эмоции, впечатления и важные события. Пусть этот дневник станет хранителем наших воспоминаний и путеводителем на пути к гармонии и счастью.<br><br>
        Каким был твой сегодняшний день?
      </p>

      <div class="button-container">
        <button class="btn btn-bright">Детальный анализ</button>
        <button class="btn btn-light">Поверхностный анализ</button>
      </div>
    </div>

    <footer class="footer">
      <p>© 2024 FamiVibes. Все права защищены.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ''  // Имя пользователя будет установлено, если он авторизован
    };
  },
  mounted() {
    // Проверка наличия данных пользователя в localStorage
    const user = localStorage.getItem('user');

    if (!user) {
      // Если данных нет, перенаправляем на страницу логина
      this.$router.push('/sign-in');
    } else {
      // Если данные есть, парсим и устанавливаем имя пользователя
      const parsedUser = JSON.parse(user);
      this.userName = parsedUser.name;  // Здесь можно получить имя пользователя или другие данные
    }
  }
}
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header, .footer {
  width: 100%; /* Full width */
  margin: 0;
  padding: 10px; /* Adjust padding as needed */
  color: #ffffff; /* White text color */
}

.header {
  background-color: #a8d0e6; /* Soft pastel blue for the header */
}

.footer {
  background-color: #d3c0cd; /* Muted pastel lavender for the footer */
  text-align: center; /* Center text in footer */
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
  background-color: #f2a1d1; /* Slightly contrasting hover effect */
}

.home-page {
  padding: 20px;
  text-align: center;
  flex-grow: 1;
}

.welcome-text {
  font-size: 1.2rem;
  color: #666666; /* Soft gray text color */
  margin-bottom: 30px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  padding: 12px 24px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
}

.btn-bright {
  background-color: #a8d0e6; /* Bright pastel blue */
  color: white;
}

.btn-light {
  background-color: #f0e4d7; /* Calm pastel beige */
  color: #333;
}

.footer p {
  margin: 0;
}
</style>
