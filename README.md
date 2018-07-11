<head>
		<title>Curriculo Vitae</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	
	<body>
		<h1>Curriculo Vitae</h1>
		
		<ul id="menu">
			<li class="ativo">Resumido</li>
			<li><a href="cv-completo.html">Completo</a></li>
		</ul>
		
		<div class="secao">
			<h2>Dados Pessoais</h2>
				<div id="hcard-Ademir-Mazer-Jr" class="vcard">
				 <a class="url fn n" href="http://ademir.winponta.com.br">  <span class="given-name">Ademir</span>
				  <span class="additional-name">Mazer</span>
				  <span class="family-name">Jr</span>
				 </a>
				</div>
		</div>

		<div class="secao">
			<h2>Dados Profissionais</h2>
			
			<p><label>Empresa</label>UTFPR</p>
			<p><label>Empresa</label>Copel</p>
			<p><label>Empresa</label>Winponta</p>
		</div>
	</body>
</html>
 style.css
body {
	font: 14px "Lucida Grande", "Trebuchet MS", Verdana, sans-serif;
	color: #3b3b3b;
}

h1,h2 {
	font-family: Georgia;
}

h1 {
	border-bottom: 3px solid #aaa;
	background-color: #3b3b3b;
	color: #ddd;
	padding: 5px;	
}

h2 {
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	background-color: #DDD;
	padding-left: 5px;
	margin: 0 0 0 -15px;
	font-weight: normal;
}

.secao {
	background-color: #eee;
	padding-left: 15px;
}

label {
	font-weight: bold;
	margin-right: 10px;
}

label:after {
	content: ":";
}

a {
	text-decoration:none;
	color: #f33;
}

a:visited {
	text-decoration:none;
	color: #700;
}

a:hover {
	text-decoration:none;
	color: #fa0;
}

#menu {
	margin: 0;
}

#menu ul, #menu li {
	display: inline;
	list-style-type: none;
	margin: 0;
	padding: 0;
}

#menu .ativo {
	background-color: #ddd;
}

.vcard {
	padding: 5px;
}

.url, .email {
	display: block;
}

.photo {
	float: right;
	margin-right: 20%;
}

#footnote {
	border-top: 1px dashed #aaa;
	padding: 5px;
	font: 75% "Lucida Grande", "Trebuchet MS", Verdana, sans-serif;
	
}

#footnote li {
	list-style-type: none;
	margin-top: 3px;
}
