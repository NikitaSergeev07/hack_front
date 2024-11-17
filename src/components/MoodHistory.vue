<template>
  <div class="layout-container">
    <AppHeader></AppHeader>

    <h2 class="title">История эмоций семьи</h2>
    <div class="mood-bar-container">
      <div class="mood-bar">
        <div
            v-for="(mood, dayIndex) in history.moods"
            :key="dayIndex"
            class="mood-box"
            :style="{ backgroundColor: moodColor(mood) }">
          {{ moodEmoji(mood) }}
        </div>
      </div>
      <div class="mood-percentage">
        <p>Эмоциональное состояние семьи: {{ calculateMoodPercentage(history.moods) }}%</p>
      </div>
    </div>

    <p class="mood-message">{{ moodMessage }}</p>

    <div class="mood-image">
      <img v-if="calculateMoodPercentage(history.moods) >= 60" src="../assets/img/home.png" alt="Happy Image">
      <img v-else src="../assets/img/bad.jpg" alt="Supportive Image" width="620" height="536">
    </div>

    <p class="footer-text">Это полоса отображает эмоциональное состояние семьи за неделю. Каждый квадратик соответствует одному дню.</p>

    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: { AppFooter, AppHeader },
  data() {
    return {
      history: {
        moods: ['happy', 'sad', 'neutral', 'happy', 'angry', 'neutral', 'happy', 'sad', 'super-happy'], // История эмоций всей семьи
      },
    };
  },
  mounted() {
    // Подготовленная закомментированная строка для GET-запроса
    // this.fetchHistory();
  },
  methods: {
    async fetchHistory() {
      try {
        // Пример GET-запроса (можно будет раскомментировать и настроить)
        // const response = await fetch('http://localhost:8000/api/mood-history');
        // const data = await response.json();
        // this.history.moods = data.moods;
      } catch (error) {
        console.error('Ошибка при получении данных истории эмоций:', error);
      }
    },
    moodColor(mood) {
      switch (mood) {
        case 'super-happy':
          return '#A8D5BA'; // Пастельный зеленый
        case 'happy':
          return '#C2EABD'; // Светлый пастельный зеленый
        case 'neutral':
          return '#D3D3D3'; // Пастельный серый
        case 'sad':
          return '#A4C5E7'; // Пастельный голубой
        case 'super-sad':
          return '#D0B3C5'; // Пастельный розово-фиолетовый
        default:
          return '#F5E1A4'; // Белый (по умолчанию)
      }
    },
    moodEmoji(mood) {
      switch (mood) {
        case 'super-happy':
          return '😁';
        case 'happy':
          return '😊';
        case 'neutral':
          return '😐';
        case 'sad':
          return '🙁';
        case 'super-sad':
          return '😢';
        default:
          return '😭';
      }
    },
    calculateMoodPercentage(moods) {
      const moodCount = moods.length;
      const happyCount = moods.filter(mood => mood === 'happy').length;
      return Math.round((happyCount / moodCount) * 100); // Рассчитываем процент "счастливых" дней
    },
  },
  computed: {
    moodMessage() {
      const percentage = this.calculateMoodPercentage(this.history.moods);
      if (percentage < 60) {
        return "Эмоциональное состояние вашей семьи нуждается в поддержке. Проведите больше времени вместе и поддержите друг друга!";
      } else {
        return "У вашей семьи крепкие связи и хорошая атмосфера. Продолжайте поддерживать друг друга!";
      }
    },
  },
};
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}



.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.mood-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.mood-bar {
  display: flex;
  gap: 5px;  /* Увеличил промежуток между квадратиками */
  border: 2px solid #ccc; /* Обводка всей полоски */
  border-radius: 10px;
  padding: 10px;  /* Увеличил внутренние отступы для большего пространства */
  overflow: hidden;
  width: 90%;  /* Увеличена ширина полосы */
  justify-content: center;
}

.mood-box {
  width: 40px;  /* Увеличен размер квадратиков */
  height: 40px; /* Увеличен размер квадратиков */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem; /* Увеличен размер смайликов */
  transition: all 0.3s ease;
}

.mood-box:hover {
  transform: scale(1.2);  /* Увеличил эффект при наведении */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* Увеличен эффект тени */
}


.mood-percentage {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-left: 15px;
  margin-top: 10px;
}

.mood-message {
  font-size: 1.2rem;
  margin-top: 20px;
  color: #444;
  font-weight: bold;
}

.mood-image {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.footer-text {
  font-size: 1rem;
  color: #666;
  margin-top: 20px;
}
</style>
