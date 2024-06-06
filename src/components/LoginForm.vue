<template>
  <form @submit.prevent="handleLogin" class="login-form">
    <input type="email" required placeholder="Your email" v-model="email" class="input-field">
    <input type="password" required placeholder="Your password" v-model="password" class="input-field">
    <input type="submit" value="Login" class="submit-button">
    <div class="error">{{ error }}</div>
  </form>
</template>

<script setup>
import { defineEmits } from 'vue';
import useLogin from '@/firebase/useLogin';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const { error, login } = useLogin();
const router = useRouter();

const emit = defineEmits(['login']);

const handleLogin = async () => {
  try {
    await login(email.value, password.value);
    console.log("USER LOGGED SUCCESSFULLY");
    router.push('/homeview');
    emit('login'); // Emitting 'login' event if needed for parent component
  } catch (err) {
    console.error("USER LOGIN FAILED:", err.message);
  }
};
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-field {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
