<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email as emailValidator } from '@vuelidate/validators'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const v$ = useVuelidate({
      email: { required, emailValidator },
      password: { required, minLength: minLength(6) }
    }, { email, password })
    const router = useRouter();

    const emailErrors = () => {
      const errs = []
      if (v$.value.email.$invalid) {
        errs.push('Email must be valid')
      }

      console.log(errs);

      return errs
    };

    const passwordErrors = () => {
      const errs = [];
      if (v$.value.password.$invalid) {
        errs.push('Password must be at least 6 characters');
      }
      return errs;
    };

    const submit = () => {
      console.log(v$.value.email.$invalid);
      console.log(v$.value.password.$invalid);
      if (v$.value.$invalid) {
        return;
      }
      router.push('/game')
    }

    const clearError = (field, value) => {
      if (field === 'email') {
        email.value = value;
      } else if (field === 'password') {
        password.value = value;
      }
    }

    return {
      email, password, submit, clearError, v$, emailErrors, passwordErrors,
    }
  }
}
</script>

<template>
  <v-container class="flex-container">
    <v-card class="card">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submit">
          <v-text-field :v-model="email.value" label="Email" :error-messages="emailErrors()"
            @input="clearError('email', $event.target.value)" />
          <v-text-field :v-model="password.value" label="Password" type="password" :error-messages="passwordErrors()"
            @input="clearError('password', $event.target.value)" />
          <v-btn type="submit" color="primary">Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style>
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.card {
  width: 100%;
}
</style>
