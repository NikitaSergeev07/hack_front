<template>
  <div class="layout-container">
    <AppHeader></AppHeader>

    <div class="mood-selector">
      <h2>Как ты себя чувствуешь?</h2>
      <div class="emojis">
        <button @click="selectMood('super-happy')" :class="{'selected': mood === 'super-happy'}">🤩</button>
        <button @click="selectMood('happy')" :class="{'selected': mood === 'happy'}">😊</button>
        <button @click="selectMood('neutral')" :class="{'selected': mood === 'neutral'}">😐</button>
        <button @click="selectMood('sad')" :class="{'selected': mood === 'sad'}">🙁</button>
        <button @click="selectMood('super-sad')" :class="{'selected': mood === 'super-sad'}">😭</button>
      </div>
      <button @click="submitMood" :disabled="!mood" class="submit-btn" style="background: #C56F2A">Отправить</button>
    </div>

    <AppFooter></AppFooter>/
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import axios from "axios"; // Импорт axios для отправки HTTP-запросов

export default {
  components: { AppFooter, AppHeader },
  data() {
    return {
      mood: null
    };
  },
  methods: {
    selectMood(selectedMood) {
      this.mood = selectedMood;
    },
    async submitMood() {
      if (this.mood) {
        const moodMap = {
          'super-happy': 5,
          'happy': 4,
          'neutral': 3,
          'sad': 2,
          'super-sad': 1
        };

        const moodValue = moodMap[this.mood];

        try {
          await axios.post("https://nicolas0708.app.n8n.cloud/webhook-test/8453f6e0-66af-494f-8790-8fbc951fe491", {
            body: {
              message: moodValue
            }
          });

          console.log('Отправленное настроение:', moodValue);

          this.$router.push('/home');
        } catch (error) {
          console.error('Ошибка при отправке запроса:', error);
        }
      }
    }
  }
};
</script>


<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}



.mood-selector {
  text-align: center;
  padding: 20px;
  flex-grow: 1;
}



.emojis {
  display: flex;
  justify-content: center;
  gap: 15px;
}

button {
  font-size: 30px;
  background: none;
  border: 2px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

button.selected {
  border-color: #4CAF50;
}

button:hover {
  background-color: #f0f0f0;
}

.submit-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
