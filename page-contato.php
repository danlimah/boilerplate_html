<?php include 'header.php' ?>
<ol class="breadcrumb">

	<div class="container">
		<ul class="list-inline">
			<li><a href="index.php">Homepage</a></li>
			<li class="active">Contato</li>
		</ul>	  
	</div>
  
</ol>

<div class="container">
	<h1>Página Contato</h1>
	<hr>

	<div class="row">
		<div class="col-lg-6">
			<form>

				<div class="form-group">
					<label>Queremos saber o seu nome (:</label>
					<input type="text" class="form-control" placeholder="Digite seu nome">
				</div>

				<div class="form-group">
					<label>Qual é o seu e-mail?</label>
					<input type="email" class="form-control" placeholder="Digite seu E-mail">
				</div>	

				<div class="form-group">
					<label>O que você quer falar com a gente?</label>
					<textarea class="form-control" placeholder="Digite aqui sua mensagem" rows="5"></textarea>
				</div>				

				<div class="checkbox">
					<label>
					  <input type="checkbox" checked> Aceito receber promoções e ofertas do site.
					</label>
				</div>

				<button type="submit" class="btn btn-primary">Enviar Mensagem</button>
			</form>
		</div>	
	</div>
	
</div>

<?php include 'footer.php' ?>