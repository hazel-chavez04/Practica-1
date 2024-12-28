<script setup>
import FormPage from './FormPage.vue';

</script>

<template>
	<h1>Ecos de Jane:Obras</h1>
	<div class="container">
		<img
			src="@/assets/literaturas/Jane_Austen.png"
			alt=""
		/>
		<div class="container_about">
			<h2>Conociendo Jane Austen</h2>
			<p>
				Jane Austen(1775-1817) Fue una novelista británica que vivió durante la
				época georgiana,cuyas obras se siguen vendiendo en nuestros días. Inició
				en la escritura siendo una niña escribiendo poemas e historias.Es
				conocida por obras con personajes fuertes y su escritura es
				caracterizada por su atención al detalle y su habilidad para retratar la
				vida cotidiana de su época, también ofrecen una mirada profunda sobre la
				forma en que las personas se relacionan entre sí.Su obra incluye títulos
				emblemáticos como Orgullo y prejuicio, Emma, Sentido y sensibilidad, y
				Persuasión, cada uno con personajes inolvidables y una narrativa que
				combina ironía, crítica social y romance. Austen nos invita a
				reflexionar sobre nuestras propias decisiones y el impacto de nuestras
				relaciones, ofreciendo una mirada profunda y crítica de la sociedad de
				su tiempo. Jane Austen es mucho más que una novelista romántica: es una
				observadora aguda de la naturaleza humana, que nos recuerda la
				importancia de la autenticidad, la inteligencia y el valor.
			</p>
		</div>
	</div>
	<section class="galeria-escritos">
		<div class="container-card">
			<img
				src="@/assets/literaturas/obra1.png"
				alt="la-abatia-de-northanger"
			/>
			<div class="title">La Abatia de Northanger</div>
			<div class="year">1871</div>
		</div>
		<div class="container-card">
			<img
				src="@/assets/literaturas/obra2.png"
				alt="orgullo-y-prejuicio"
			/>
			<div class="title">Orgullo y prejuicio</div>
			<div class="year">1813</div>
		</div>

		<div class="container-card">
			<img
				src="@/assets/literaturas/obra3.png"
				alt="sense-sensibility"
			/>
			<div class="title">Sentido y Sensibilidad</div>
			<div class="year">1811</div>
		</div>
		<div class="container-card">
			<img
				src="@/assets/literaturas/obra4.png"
				alt="emma"
			/>
			<div class="title">Emma</div>
			<div class="year">1815</div>
		</div>
	</section>

	<section class="galeria-escritos">
		<div class="container-card">
			<img
				src="@/assets/literaturas/obra5.png"
				alt="persuacion"
			/>
			<div class="title">Persuacion</div>
			<div class="year">1817</div>
		</div>
		<div class="container-card">
			<img
				src="@/assets/literaturas/obra6.png"
				alt="Lady-susan"
			/>
			<div class="title">Lady Susan</div>
			<div class="year">1871</div>
		</div>
		<div class="container-card">
			<img
				src="@/assets/literaturas/obra7.png"
				alt="sandition"
			/>
			<div class="title">Sandition</div>
			<div class="year">1817</div>
		</div>

		<div class="container-card">
			<img
				src="@/assets/literaturas/obra8.png"
				alt="Amor-y-amistad"
			/>
			<div class="title">Amor y Amistad</div>
			<div class="year">1790</div>
		</div>
	</section>

	<h3>Lugares Donde Comprar tus Libros Favoritos</h3>
	<section>
		<div class="section-librerias">
			<img
				src="@/assets/literaturas/libreria-el-erial.png"
				alt="libreria-erial"
			/>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31439.1668297505!2d-84.09081736637685!3d9.942622815203698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8fa0e364266926fb%3A0xcbac4bfcb029cd89!2zV1dKRyszUFgsIEF2LiA4LCBTYW4gSm9zw6ksIEdvbnrDoWxleiBMYWhtYW5u!3m2!1d9.93024!2d-84.0731323!5e0!3m2!1ses!2scr!4v1731771940757!5m2!1ses!2scr"
				width="600"
				height="510"
				style="border: 0"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>

			<p>
				Librería El Erial San José · 2222 8097 Abierto ⋅ Cierra a las 12p.m
				"Excelente atención, y gran variedad de libros."
			</p>
		</div>
		<div class="section-librerias">
			<img
				src="@/assets/literaturas/libreria-leman.png"
				alt="libreria-erial"
			/>

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125759.83676310774!2d-84.15983860543012!3d9.934381730658242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8fa0e36127190cd7%3A0x9a6b51655633645e!2sCostado%20oeste%20del%20edificio%20Omni%2C%20077607%2C%20Calle%203%2010101%2C%20San%20Jos%C3%A9!3m2!1d9.9343918!2d-84.07743669999999!5e0!3m2!1ses!2scr!4v1731772759759!5m2!1ses!2scr"
				width="600"
				height="510"
				style="border: 0"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<p>
				 Librería Lehmann San José· 2522 4848 Abierto.  Cierra a las 6p.m
				"Con una excelente colección de libros de autores nacionales"
			</p>
		</div>
	</section>
  <formPage />

</template>

<style scoped>
h1 {
	color: #555;
	font-family: 'Faculty Glyphic', serif;
	font-size: 20px;
	padding-top: 7rem;
}
div.container {
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 2fr;

	padding: 12px;
}
div.container_about h2 {
	color: #555;
	font-family: 'Faculty Glyphic', serif;
	font-size: 20px;
	padding-bottom: 5px;
}
div.container_about p {
	font-family: 'Karla', sans-serif;
	color: #000;
	text-align: justify;
	font-size: 16px;
}
.galeria-escritos {
	display: flex;
	justify-content: center;
}
div.container-card {
	padding: 2rem;
	margin: 8px;
	border: 1px solid #ccc;
	display: inline-grid;
	border-radius: 15px;
}
div.galeria-escritos img {
	width: 100%;
	height: auto;
}
div.title {
	color: #074449;
	font-family: 'Faculty Glyphic', serif;
	font-weight: 300;
	text-align: center;
	font-weight: bold;
	text-transform: uppercase;
	padding-top: 1rem;
}
div.year {
	font-family: 'Lato', sans-serif;
	color: #080808;
	text-align: center;
	font-size: 16px;
}
/* section de librerias */
h3 {
	color: #555;
	font-family: 'Faculty Glyphic', serif;
	font-size: 20px;
	padding: 3rem 0 3rem 0;
	text-align: center;
}
.section-librerias {
	display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 2rem;
}
.section-librerias p {
	font-family: 'Lato', sans-serif;
	color: #080808;
	display: flex;
	align-items: center;
  margin-left: 3rem;
  font-size: 18px;
}
</style>
