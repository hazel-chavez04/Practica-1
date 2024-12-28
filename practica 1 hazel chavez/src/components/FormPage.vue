<template>
	<div class="container-form">
		<form>
			<div class="form">
				<h1>Formulario</h1>
				<div class="group-input">
          <label for="name">Nombre:</label>
					<input
						type="text"
						id="name"
						name="Nombre"
					/>

				</div>
				<div class="group-input">
          <label for="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
					/>

				</div>
				<div class="group-input">
					<label for="Comentario">Comentario</label>
					<textarea
						name="Mensaje"
						id=""
						cols="30"
						rows="10"
						placeholder="Escribe tu Mensaje"
					></textarea>
				</div>

				<button type="submit">Enviar</button>
			</div>
		</form>
		<div class="container-img">
			<img
				src="@/assets/literaturas/imagen-jane.png"
				alt="jane-img"
			/>
		</div>
	</div>
</template>

<style scoped>
.container-form {
	display: flex;
	justify-content: space-around;
	margin: 8rem 0 8rem 0;
}
form {
	height: auto;
	padding: 40px 0;
	background-color: rgb(247, 247, 226);
	border-radius: 10px;
	width: 35%;
	-webkit-box-shadow: 1px 2px 19px 5px rgba(128, 126, 128, 1);
	-moz-box-shadow: 1px 2px 19px 5px rgba(128, 126, 128, 1);
	box-shadow: 1px 2px 19px 5px rgba(128, 126, 128, 1);
}
.form h1 {
	font-family: 'Faculty Glyphic', serif;
	color: #373e40;
	padding-bottom: 2rem;
}
.form {
	/* width: 100%; */
	margin: auto;
	font-family: 'Bebas Neue', serif;
	margin: 45px;
}
.form .group-input {
	position: relative;
}
label {
	color: black;
	font-family: 'Bebas Neue', serif;
	font-size: 20px;
}
input[type='text'],
input[type='email'] {
	background: none;
	width: 100%;
	display: flex;
	padding: 10px;
	margin-bottom: 10px;
	border-radius: 5px;
	border: none;
	background-color: rgb(243, 228, 210);
}
textarea {
	background: none;

	width: 100%;
	display: flex;
	padding: 10px;
	border-radius: 5px;
	border: none;
  background-color: rgb(243, 228, 210);
}
input:focus {
	outline: 0 none;
	border-color: #006992;
	box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset, 0 0 8px #006992;
}
textarea {
	outline: 0 none;
	border-color: #006992;
	box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset, 0 0 8px #006992;
}
button {
	padding: 15px;
	width: 80%;
	display: block; /*el elemento ocupe el espacio disponible y el siguiente elemento se coloque debajo*/
	margin: 10px auto; /*centrar*/
	font-family: 'Noto Sans', sans-serif;
	font-size: 18px;
	border: none;
	background-color: #eca400;
	cursor: pointer;
	margin-top: 1rem;
}
button:hover{
  cursor: pointer;
  background-color: #f1bf48;
  transition: ease-in 1s;
}
.container-img {
	display: flex;
	align-items: center;
}
</style>
