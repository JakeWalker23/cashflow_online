<template>
    <div class="container">
        <div class="login">
            <input class="login__email" placeholder="email" v-bind:email="email"  v-on:input="$emit('email', $event.target.value)"/>
            <input class="login__password" placeholder="password" v-bind:password="password"  v-on:input="$emit('password', $event.target.value)"/>
            <div>
                <button class="login__submit" type="Submit">Log in</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['email', 'password']    
}
</script>