<?php

	if (isset($_GET['page'])){
		
		switch($_GET['page']){
			
			case "home";
				//include("module/home/controller/".$_GET['page'].".php");
				include("module/home/view/home.php");
				break;
			case "controller_homes";
				include("module/homes/controller/".$_GET['page'].".php");
				$_SESSION['module']='homes';
				break;
			case "favorites";
				include("module/userfavorites/view/".$_GET['page'].".php");
				$_SESSION['module']='userfavorites';
				break;
			case "shop";
				// include("module/shop/controller/".$_GET['page'].".php");
				include("module/shop/view/shop.php");
				$_SESSION['module']='shop';
				break;
			case "controller-contact";
				include("module/contact/controller/".$_GET['page'].".php");
				$_SESSION['module']='contact';
				break;
			case "controller-cart";
				include("module/cart/controller/".$_GET['page'].".php");
				$_SESSION['module']='cart';
				break;
			case "profile";
				include("module/profile/view/profile.html");
				$_SESSION['module']='profile';
				break;
			case "404";
				include("view/include/error/error404.php");
				break;
			case "503";
				include("view/include/error/error503.php");
				break;
			default;
				include("module/home/view/home.php");
				$_SESSION['module']='home';
				break;
		}
	}else{
		$_GET['op']='list';
		include("module/home/controller/controllerhome.php");
	}
?>