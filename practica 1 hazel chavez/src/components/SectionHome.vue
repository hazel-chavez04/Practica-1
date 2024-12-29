<script setup>

</script>
<template>
  <section>
		<img
			alt="banner"
			src="@/assets/banner-d.webp"
			width="auto"
			height="350px"
		/>
	</section>
	<h1>Un Universo en cada libro</h1>
	<div class="container-text">
		<p>
			Los libros, como cualquier gran pasatiempo, tienen el poder de
			transportarnos a otros mundos a través de sus palabras. Nos invitan a
			vivir aventuras, descubrir nuevas perspectivas y explorar nuestras
			emociones. Son una herramienta invaluable para el aprendizaje y nuestra
			imaginación. En este espacio, recomendaciones y escritos sobre lo que
			encierra cada página y letra.
		</p>
		<img
			alt="img1"
			src="@/assets/img1.png"
		/>
	</div>
	<section class="content-novedades">
		<img
			alt="novedades"
			src="@/assets/img2.png"
		/>
		 <p>
			SUMERGETE EN LA LITERATURA CON LAS ULTIMAS NOTICIAS Y
			ACTUALIZACION.HISTORIAS SOBRE TUS AUTORES FAVORITOS
		</p>
	</section>

	 <h2>NOVEDADES RECIENTES</h2>
	<div class="container-event">
		<div>
			<img
				alt="evento1"
				src="@/assets/evento1.png"
			/>
		</div>

		<div>
			<img
				alt="evento1"
				src="@/assets/evento-2.png"
			/>
		</div>
		<div>
			<a><p>Fiesta Nacional de la Lectura Costarricense</p></a>
		</div>
		<div>
			<a><p>FestiLbro Evento Nacional</p></a>
		</div>
	</div>
</template>
<style scoped>

/* banner */
section {
	display: flex;
	justify-content: center;
	margin-top: 4rem;
}


.container-text {
	display: flex;

	justify-content: space-evenly;
}
.container-text p {
	font-family: 'Faculty Glyphic', sans-serif;
	color: #000;
	max-width: 50%;
	display: flex;
	align-self: center;
	text-align: justify;
}
h1 {
	font-family: 'Tangerine', serif;
	font-size: 2.5rem;
	color: #000;
	text-align: center;
	margin-top: 6rem;
}

.content-novedades {
	display: flex;
	justify-content: space-around;


}
.content-novedades p {
	display: flex;
	padding: 1rem;
	align-items: center;
	max-width: 25%;
	font-family: 'Faculty Glyphic', sans-serif;
	color: #0a5664;
	background-color: #eca400;
}
h2 {
	font-family: 'Karla', sans-serif;
	font-weight: bold;
	color: #006992;
	margin-top: 4rem;

	position: relative;
	left: 2rem;
}

.container-event {
	display: grid;
	justify-content: flex-start;
	grid-template-columns: 300px 300px;
	gap: 10px;

	padding: 10px;
	margin-left: 2rem;
}

.container-event > div {
	background-color: rgba(255, 255, 255, 0.8);
	text-align: center;
	padding: 20px 0;
}
.container-event p {
	font-family: 'Faculty Glyphic', sans-serif;
	color: #000;
	font-size: clamp(1rem, 1vw, 1rem);
}
.container-event p:hover {
	color: #eca400;
	cursor: pointer;
}


</style>
