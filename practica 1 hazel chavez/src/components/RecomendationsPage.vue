<template>
	<div class="wrapper-title">
		<h1>Recomendaciones de Lectura para ti</h1>
	</div>
	<section>
      <!-- sectiones para las imagenes de libros -->
      <h2>LIBROS DE CRECIMIENTO PERSONAL</h2>
		<div class="section-books">
			<img
				src="@/assets/section/section-1.png"
				alt=""
			/>

			<img
				src="@/assets/section/section-2.png"
				alt=""
			/>
			<img
				src="@/assets/section/section-3.png"
				alt=""
			/>
		</div>
    <!-- sectiones para los textos -->
		<div class="section-texts">
			<p>
				En este libro descubrirá cómo: Cambiar las creencias negativas; Mejorar
				tu autoestima y la confianza en ti mismo; Crear una autoconversión.
				positiva.Una guía para las adolescentes: Cómo entender y controlar tus
				pensamientos y sentimientos.
			</p>
			<p>
				El poder del pensamiento positivo es un best-seller de autoayuda con más
				de cinco millones de ejemplares vendidos.Escrito por Norman Vincent
				Peale.Contiene las herramientas esenciales para superar los desafíos que
				frenan tu vida.
			</p>
			<p>
				Este libro que nos da las herramientas para fortalecer nuestra salud
				mental, gestionar el miedo y alcanzar la verdadera seguridad. Hondaremos
				en la seguridad como la verdadera solución para combatir el miedo, y nos
				sumergirnos en una de las bases esenciales de esta: el apego.
			</p>
		</div>
	</section>
	<section>
      <!-- sectiones para las imagenes de libros -->
		<div class="section-books">

			<img
				src="@/assets/section/section-4.png"
				alt=""
			/>

			<img
				src="@/assets/section/section-5.png"
				alt=""
			/>
			<img
				src="@/assets/section/section-6.png"
				alt=""
			/>
		</div>
    <!-- sectiones para los textos -->
		<div class="section-texts">
			<p>
				Es un libro que te guía a través de un viaje espiritual y emocional.Este
				libro te invita a explorar los desafíos de la vida y te proporciona las
				herramientas necesarias para superarlos.Te anima a tomar decisiones que
				te acerquen a la paz y la felicidad.
			</p>
			<p>
				La Doctora Marian Rojas nos señala que su libro Encuentra tu persona
				vitamina “trata de la relación entre las personas”. Somos seres
				sociales, necesitamos vivir agrupados y relacionarnos, por lo que cuando
				fallan estas relaciones tenemos que construir la capacidad de gestionar
				el sufrimiento.
			</p>
			<p>
				Un libro que nos animará a superar nuestros miedos, a enfrentarnos a
				todo aquello que nos atormenta para salir victoriosos valorando que lo
				más importante que tenemos es nuestro presente. Y no estamos solos, no,
				nos tenemos a nosotros mismos para saltar todos los obstáculos que se
				nos presenten.
			</p>
		</div>
	</section>
	<section>
    <!-- sectiones para las imagenes de libros -->
    <h2>LIBROS INFANTILES</h2>
		<div class="section-books">
			<img
				src="@/assets/section/section-7.png"
				alt=""
			/>

			<img
				src="@/assets/section/section-8.png"
				alt=""
			/>
			<img
				src="@/assets/section/section-9.png"
				alt=""
			/>
		</div>
    <!-- sectiones para los textos -->
		<div class="section-texts">
			<p>
				Un cuento sobre la autoestima. Tener las orejas grandes, el pelo
				rebelde, ser alto o bajo, flaco o gordo... Cualquier cosa puede ser
				causa de burla entre los niños. Eso es lo que le sucedió a Mara, que
				tendrá que aprender a hacerse fuerte para ser ella misma.
			</p>
			<p>
				El inolvidable Fray Perico y su borrico ha sido la primera lectura para
				un montón de niños desde hace décadas. El personaje creado por Juan
				Muñoz Martín y ganador del premio El Barco de Vapor sigue imbatible en
				ventas y en elogios por parte de los lectores..
			</p>
			<p>
				Matilda Matilda es una novela infantil escrita por el escritor galés
				Roald Dahl. La novela se publicó por primera vez en Londres en 1998.
				Cuenta la historia de una chica muy inteligente que hablaba con fluidez
				en la escuela poco después de cumplir cinco años..
			</p>
		</div>
	</section>
</template>

<style scoped>
div.section-books {
	display: grid;
	grid-template-columns: 150px 150px 150px;
	justify-content: space-around;
  margin-bottom: 1rem;
}
h1{
  color: #001d4a;
	font-family: 'Karla', sans-serif;
	font-size: 24px;
	margin: 5rem 0 5rem 0;

}

.section-texts {
	display: grid;
	justify-content: center;
	grid-template-columns: 150px 150px 150px;
	justify-content: space-around;
	padding: 12px;

}
.section-texts p {
	color: #001d4a;
	font-size: 11px;
	font-family: 'Faculty Glyphic', serif;
  margin-bottom: 8rem;
	text-align: justify;
}
.section-texts img {
	display: flex;
	align-items: center;
}
h2 {
	color: #001d4a;
	font-family: 'Karla', sans-serif;
	font-size: 22px;
	margin: 1.5rem 0 1.5rem 0;
  text-align: center;
}
</style>
