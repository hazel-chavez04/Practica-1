<template>
  <footer>
		<div class="btn-social-wrapper">
			<a href="https://www.facebook.com/hchavezalvarado" target="_blank"
				><img
					src="@/assets/iconos/facebook.png"
					alt=""
			/></a>
			<a href="https://www.instagram.com/hazelchavez_04" target="_blank"
				><img
					src="@/assets/iconos/social.png"
					alt=""
			/></a>
			<a href="https://github.com/hazel-chavez04" target="_blank"
				><img
					src="@/assets/iconos/github.png"
					alt=""
			/></a>
			<a href="mailto:hazelchavez@gmail.com" target="_blank"
				><img
					src="@/assets/iconos/gmail.png"
					alt=""
			/></a>
		</div>

		<div class="footer-wrapper">
			<p>&copy;Hazel Chavez Alvarado</p>
			<p>&nbsp;2024&nbsp;</p>
		</div>

		<div class="btn-wrapper">
			<p>Recibe las ultimas Novedades en tu email</p>
			<button>Suscribirse</button>
		</div>
	</footer>
</template>
<style scoped>
footer {
	display: grid;
	grid-template-columns: 2fr 2fr 1fr;
	justify-content: space-around;
	background-color: blanchedalmond;
	height: 220px;
	padding: 1rem;
	color: #000;
	font-family: 'Karla', sans-serif;
}

.btn-wrapper {
	display: flex;
	justify-content: end;
	align-items: center;
}
.btn-wrapper button {
	background-color: #006992;
	border: none;
	border-radius: 5px;
	width: 125px;
	padding: 1rem;
}
.footer-wrapper {
	display: flex;
	align-items: flex-end;

}
.footer-wrapper p{
  color: #000;
	font-family: 'Karla', sans-serif;
	font-size: 18px;
	font-weight: 500;
}
.footer-wrapper p:nth-child(2) {
	border-left: 1px solid #eca400;

}


</style>
