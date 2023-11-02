<template>
  <div class="content-section section-padding first">
    <div class="container">
      <div class="flex items-center">
        <div class="md:col-span-7">
          <div class="content-img content-img-group-1">
            <img
              data-aos="fade-left"
              data-aos-duration="1500"
              src="~/assets/images/pantalla1.png"
              style="height: 250px"
              class="hidden md:block h-72 valign-wrapper"
              alt="Orders List"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="1500"
              src="~/assets/images/pantalla2.png"
              style="height: 250px"
              class="hidden md:block h-72 valign-wrapper"
              alt="Order details"
            />
            <img
              data-aos="fade-left"
              data-aos-duration="1500"
              src="~/assets/images/pantalla1.png"
              class="md:hidden w-full valign-wrapper"
              alt="Orders List"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="1500"
              src="~/assets/images/pantalla2.png"
              class="md:hidden w-full valign-wrapper"
              alt="Order details"
            />
          </div>
        </div>
        <div class="md:col-span-5">
          <div
            class="content-section-text"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <h1 class="title">
              Manage work orders
              <br class="d-none d-xs-block" />
              with your collaborators no matter where they are!
            </h1>
            <p>
              Reasign orders from clients to your collaborators easily, increasing effectiveness and improving times of service.
              <!-- {{ render "button_request" }} -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="content-section section-padding first">
    <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="content-img content-img-group-1">
              <div class="image-1 d-none d-md-block" data-aos="fade-left" data-aos-duration="1500">
                  <img src="~/assets/images/pantalla1.png" style: height= "250px" class="valign-wrapper" alt="p1" />
               </div> -->
              <!-- <div class="image-1 d-none d-md-block" data-aos="fade-right" data-aos-duration="1500"> -->
                  <!-- <img src="~/assets/images/pantalla2.png" style: height= "250px" class="valign-wrapper" alt="p2" /> -->
              <!-- </div> -->
            <!-- </div>
          </div>
          <div class="col-md-6">
                <div class="content-section-text" data-aos= "zoom-in" data-aos-duration= '1500'>
                  <h2 class="title">Manage work orders</h2>
                  <p>Reasign orders from clients to your collaborators easily, increasing effectiveness and improving times of service.</p>
                </div>
                
            </div>
        </div>
    </div>
  </div>  -->
</template>