<?php
if(isset($SubPage) && $SubPage){
  $LinkPrefix = 'https://ai4dev2020.com/';
}else{
  $LinkPrefix = null;
}
?>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNG4G2L" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<!--PreLoader-->
<div class="loader">
  <div class="loader-inner">
    <div class="cssload-loader"></div>
  </div>
</div>
<!--PreLoader Ends-->
<!-- header -->
<header class="site-header" id="header">
  <nav class="navbar navbar-expand-lg transparent-bg static-nav">
    <div class="container">
      <a class="navbar-brand" href="/"><img src="images/ai4dev-logo-light.png" alt="AI4DEV Logo"/></a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto ml-xl-auto mr-xl-0">
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?> desktop-nav-link" data-target="#hero-section" href="<?php echo $LinkPrefix; ?>#hero-section" title="Home">Home</a></li>
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?> desktop-nav-link" data-target="#about" href="<?php echo $LinkPrefix; ?>#about" title="About">About</a></li>
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?> desktop-nav-link" data-target="#challange" href="<?php echo $LinkPrefix; ?>#challenge" title="Challenge">Challenge</a></li>
          <li class="nav-item"><a class="nav-link" href="/teams" title="Winners">Winners</a></li>
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?> desktop-nav-link" data-target="#our-testimonial" href="<?php echo $LinkPrefix; ?>#our-testimonial" title="Testimonials">Testimonials</a></li>
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?> desktop-nav-link" data-target="#partners" href="<?php echo $LinkPrefix; ?>#partners" title="Partners">Partners</a></li>
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?> desktop-nav-link" data-target="#faqs" href="<?php echo $LinkPrefix; ?>#faqs" title="FAQs">FAQs</a></li>
        </ul>
      </div>
    </div>
    <!--side menu open button-->
    <a href="javascript:void(0)" class="d-inline-block d-lg-none sidemenu_btn" id="sidemenu_toggle" title="Toggle Menu">
      <!-- The Tree Spans For the Hambuger Icon Drawing -->
      <span></span>
      <span></span>
      <span></span>
    </a>
  </nav>
  <!-- side menu -->
  <div class="side-menu opacity-0 gradient-bg">
    <div class="overlay"></div>
    <div class="inner-wrapper">
      <span class="btn-close btn-close-no-padding" id="btn_sideNavClose"></span>
      <nav class="side-nav w-100">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?>" href="<?php echo $LinkPrefix; ?>#hero-section" title="Home">Home</a></li>
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?>" href="<?php echo $LinkPrefix; ?>#about" title="About">About</a></li>
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?>" href="<?php echo $LinkPrefix; ?>#challenge" title="Challenge">Challenge</a></li>
          <li class="nav-item"><a class="nav-link" href="/teams" title="Winners">Winners</a></li>
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?>" href="<?php echo $LinkPrefix; ?>#our-testimonial" title="Testimonials">Testimonials</a></li>
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?>" href="<?php echo $LinkPrefix; ?>#partners" title="Partners">Partners</a></li>
          <li class="nav-item"><a class="nav-link <?php if(!isset($SubPage)){ echo 'pagescroll';} ?>" href="<?php echo $LinkPrefix; ?>#faqs" title="FAqs">FAQs</a></li>
        </ul>
      </nav>
      <div class="side-footer w-100">
        <ul class="social-icons-simple white top40">
          <li><a href="https://www.facebook.com/AI4Dev2020-106015401298529" target="_blank" title="AI4DEV On Facebook"><i class="fab fa-facebook-f"></i> </a> </li>
          <li><a href="https://www.linkedin.com/company/ai4dev2020/" target="_blank" title="AI4DEV On LinkedIn"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div id="close_side_menu" class="tooltip"></div>
  <!-- End side menu -->
</header>
<!-- header -->
