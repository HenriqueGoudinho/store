<?php include_once("header.php");?>

	<link rel="icon" href="data:;base64,iVBORw0KGgo=">
	<link rel="stylesheet" href="https://cdn.plyr.io/3.5.6/plyr.css"/>
	<script src="https://cdn.plyr.io/3.5.6/plyr.js"></script>

	<section>
		<div id="call-to-action">
			
			<div class="container">

				<div clas="row text-center">
					<h2>Videos</h2>
					<hr>
				</div>

				<div class="row">
					<div class="player">
						<video playsinline  controls poster="img/highlights.jpg" class="js-player" ref="video">
							<source src="mp4/highlights.mp4" type="video/mp4">
						</video>		
					</div>
				</div>

			</div>
		</div>
		<div id="news" class="container" style="top:0">

			<div class="row text-center">
				<h2> Last News </h2>
				<hr>
			</div>

			<div class="row thumbnails owl-carousel owl-theme" >
				
				<div class="item" data-video="highlights">
					<div class="item-inner">
						<img src="img/highlights.jpg" alt="Noticia">
						<h3>Highlights</h3>
						</div>
					</div>

					<div class="item" data-video="Orlando_City_Foundation_2015">
					<div class="item-inner">
						<img src="img/Orlando_City_Foundation_2015.jpg" alt="Noticia">
						<h3>Orlando City Foundation 2022</h3>
						</div>
					</div>

					<div class="item" data-video="highlights">
						<div class="item-inner">
							<img src="img/highlights.jpg" alt="Noticia">
							<h3>Highlights</h3>
						</div>
					</div>

					<div class="item" data-video="Orlando_City_Foundation_2015">
						<div class="item-inner">
							<img src="img/Orlando_City_Foundation_2015.jpg" alt="Noticia">
							<h3>Orlando City Foundation 2022</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
<?php require_once("footer.php");?>