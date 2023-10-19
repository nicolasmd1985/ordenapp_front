<template>
    <!-- Footer -->
<footer class="page-footer font-small bg-warning">
  <!-- Footer Links -->
  <div class="container text-center text-md-left mt-5">
    <!-- Grid row -->
    <div class="row mt-3 justify-content-around">
      <!-- Grid column -->
      <div class="col-md-4">
        <h6 class="text-uppercase font-weight-bold">Legal</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <ul class="list-group">
          <li class="list-group-item">
            <i class="fa fa-file mr-3" aria-hidden="true"></i>
            <p>
              <a href="https://ordenapp.co/terminos-y-condiciones" target="_blank">
                Terms and Conditions
              </a>
            </p>
          </li>
          <li class="list-group-item">
            <i class="fa fa-file mr-3" aria-hidden="true"></i>
            <p>
              <a href="https://ordenapp.co/habeas_data" target="_blank">
                Habeas Data
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div class="col-md-4 mb-5">
        <!-- Content -->
        <h6 class="text-uppercase font-weight-bold">
            Sponsors
        </h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <div class="view overlay h-auto">
          <img src="~/assets/images/logo-fondo-emprender.png" class="d-inline" alt="Fondo Emprender SENA">
          <!-- <a href="http://www.fondoemprender.com/SitePages/Home.aspx" target="_blank" class="mask rgba-white-slight"></a> -->
        </div>
        <div class="view overlay h-auto mt-4">
          <img src="~/assets/images/logo-presidencia-republica.png" class="d-inline logo-presi" alt="Presidencia de la República de Colombia">
          <!-- <a href="https://id.presidencia.gov.co/Paginas/presidenciaco.aspx" target="_blank" class="mask rgba-white-slight"></a> -->
        </div>
      </div>
      <div class="col-md-4">
        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">
          Contact
        </h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <ul class="list-group">
          <li class="list-group-item">
            <i class="fa fa-home mr-3" aria-hidden="true"></i>
            <p>
              Cll 106 N 56 - 62 Of. 304, Bogotá, Colombia
            </p>
          </li>
          <li class="list-group-item">
            <i class="fa fa-envelope mr-3" aria-hidden="true"></i>
            <p>
              nicolasmelectronic@gmail.com
            </p>
          </li>
          <li class="list-group-item">
            <i class="fa fa-phone mr-3"></i>
            <p>
              +1 6892490957
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">
    © 2023 Copyright:
    <a href="https://ordenapp.co/">OrdenApp.co</a>
  </div>
</footer>

<!-- Full Height Modal Right -->
<div class="modal fade bottom" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <!-- Add class .modal-full-height and then add class .modal-right (or other classes from the list above) to set a position for the modal -->
  <div class="modal-dialog modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <!-- Body -->
      <div class="modal-body mb-0 p-0">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0" src="https://www.youtube.com/embed/UuJgdjkiMOY?rel=0&controls=0" autoplay="true" id="youtube_video"></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Central Modal Medium Success -->
<div class="modal fade" id="emailSuccessModal" tabindex="-1" role="dialog" aria-labelledby="emailSuccessModal" aria-hidden="true">
  <div class="modal-dialog modal-notify modal-success modal-side modal-top-right" role="document">
    <!-- Content -->
    <div class="modal-content">
      <!-- Header -->
      <div class="modal-header">
        <p class="heading lead">Solicitud enviada con éxito</p>
        <button type="button" data-dismiss="modal" aria-label="Close" class="close">
          <span class="white-text" aria-hidden="true">&times;</span>
        </button>
      </div>
      <!-- Body -->
      <div class="modal-body text-center">
        <i class="fas fa-check fa-4x mb-3 animated rotateIn"></i>
        <p>Uno de nuestros agentes se comunicará contigo en el menor tiempo posible al correo que nos compartiste y atenderá todas tus dudas e inquietudes.</p>
      </div>
    </div>
  </div>
</div>



</template>