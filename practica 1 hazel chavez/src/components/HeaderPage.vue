<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
	<header>
		<div class="container">
			<img
				alt="viajes literarios logo"
				class="logo"
				src="@/assets/logo.png"
			/>
			<nav class="nav">
				<RouterLink to="/">Inicio</RouterLink>
				<RouterLink to="/recomendations">Recomendaciones</RouterLink>
				<RouterLink to="/escritos">Escritos</RouterLink>
			</nav>
			<img
				alt="lupa"
				src="@/assets/lupa.png"
				class="lupa"
				width="16px"
				height="16px"
			/>
		</div>
	</header>
</template>
<style scoped>
header {
	 /* line-height: 1.5;
  max-height: 100vh; */
	height: 200px;
	background-color: rgb(129, 110, 110);
}
.logo {
	padding-top: 1rem;
}
.container {
	display: flex;
	justify-content: space-between;

	margin: 0 auto 2rem;
}
.container nav {
	display: flex;
	align-items: center;
}
.lupa {
	cursor: pointer;
	margin: 1rem 1.8rem 0 0;
}

nav {
	font-size: 20px;
	text-align: center;
	font-family: 'Karla', sans-serif;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}
</style>
