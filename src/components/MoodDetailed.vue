<template>
  <div class="layout-container">
    <AppHeader></AppHeader>

    <h1 class="headline">Как ты?</h1>

    <div class="input-container">
      <textarea
          v-model="userInput"
          class="input-text"
          placeholder="Расскажи, что с тобой происходит..."
          @input="validateInput"
      ></textarea>
      <p v-if="error" class="error-message">Введите текст для анализа.</p>
    </div>

    <!-- Кнопка для отправки -->
    <div class="button-container">
      <button class="btn btn-bright" :disabled="isButtonDisabled" @click="getBotResponse">
        Отправить
      </button>
    </div>

    <!-- Ответ бота -->
    <div v-if="botResponse" class="bot-response">
      <h2>Ответ бота:</h2>
      <p>{{ botResponse }}</p>
    </div>

    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {AppFooter, AppHeader},
  data() {
    return {
      userInput: '',       // Текст, введенный пользователем
      botResponse: '',     // Ответ от бота
      error: false,        // Статус ошибки (не заполнено поле ввода)
      isButtonDisabled: true // Кнопка "Отправить" не активна, пока нет ввода
    };
  },
  methods: {
    // Метод для валидации ввода
    validateInput() {
      this.error = !this.userInput.trim(); // Если нет текста, показываем ошибку
      this.isButtonDisabled = this.error;  // Кнопка становится неактивной, если нет ввода
    },
    // Метод для получения ответа от бота
    async getBotResponse() {
      try {
        const response = await this.getResponseFromBot(this.userInput);
        this.botResponse = response;
      } catch (error) {
        console.error('Ошибка при получении ответа от бота:', error);
        this.botResponse = 'Произошла ошибка при получении ответа.';
      }
    },
    // Метод для отправки текста и получения ответа
    async getResponseFromBot(input) {
      try {
        const response = await fetch('https://nicolas0708.app.n8n.cloud/webhook-test/58b1c704-a8e6-4436-bab5-9ded84edc590', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: input
          })
        });

        if (!response.ok) {
          throw new Error('Ошибка при получении ответа от сервера');
        }

        const responseData = await response.json();
        // Используем JSON.stringify, чтобы отобразить ответ так, как требуется n8n
        return JSON.stringify(responseData.output);
      } catch (error) {
        console.error('Ошибка при запросе:', error);
        throw error;
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
}

.headline {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center; /* Центрируем заголовок */
}

.input-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center; /* Центрируем блок с текстом */
}

.input-text {
  width: 80%;
  height: 370px;  /* Увеличена высота поля ввода */
  padding: 10px;
  font-size: 1.1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: center; /* Центрируем кнопку */
  margin-top: 20px;
}

.btn {
  padding: 12px 24px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 40px; /* Добавленный отступ */
}

.btn-bright {
  background-color: #C56F2A; /* Bright pastel blue */
  color: white;
  transition: background-color 0.3s ease;
}

.btn-bright:hover {
  background-color: #C56F2A;
}

.bot-response {
  margin-top: 20px;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
  max-width: 900px; /* Ограничивает ширину блока */
  margin-left: auto; /* Центрирует блок */
  margin-right: auto; /* Центрирует блок */
  word-wrap: break-word; /* Перенос длинных слов */
  white-space: pre-wrap; /* Сохраняет форматирование и позволяет перенесение */
}
</style>
