<template>
  <div class="row flex-box-center">
    <div class="col s12 m10 force_margin">
      <div class="card card-cascade narrower pt-0 light-1">
        <div class="view view-cascade gradient-card-header gradient-blue narrower py-3 mx-4 d-flex justify-content-between align-items-center">
          <a role="button" class="btn btn-outline-white btn-rounded btn-sm px-2" title="Back" href="#">
            <i class="fas fa-chevron-left"></i>
          </a>
          <h3 class="center mt-2">
            <strong>{{ user }}</strong>
          </h3>
          <a role="button" class="btn btn-outline-white btn-rounded btn-sm px-2" title="Details" href="#">
            <i class="fas fa-info"></i>
          </a>
        </div>
        <div class="card py-0">
          <div class="card-body">
            </div>
        </div>
      </div>
    </div>
  </div>


  <div class="row">
    <!-- <input type="hidden" name="user[role]" value="">
    <div class="col-12 col-md-4 d-flex">
      <div class="view overlay ovf-visible mb-4 mb-md-auto">
        <div>
          <img src="servicio-tecnico.png" id="user-image" class="img-thumbnail z-depth-1 avatar-pic" alt="Default image">
          <div class="mask flex-center flex-column rgba-grey-strong clic-file">
            <p class="file-name font-weight-bolder">Image</p>
            <p>
              <i class="fas fa-image mr-2 white-text"></i>
              <span class="white-text">Upload avatar</span>
            </p>
          </div>
        </div>
          <img id="user-image" src="avatar.png" class="img-thumbnail z-depth-1 avatar-pic" alt="User image">
          <div class="mask flex-center flex-column rgba-grey-strong clic-file">
            <p class="file-name font-weight-bolder">Image</p>
            <p>
              <i class="fas fa-image mr-2 white-text"></i>
              <span class="white-text">Upload avatar</span>
            </p>
          </div>
      </div> -->
      <!-- <div class="d-none justify-content-center">
        <input type="file" name="user[urlavatar]" accept="image/png,image/jpeg" class="btn btn-mdb-color btn-rounded btn-sm">
      </div> -->
    <!-- </div> -->
    <div class="col-12 col-sm-6 col-md-4">
    <div class="form-group">
      <label for="first_name" data-error="wrong" data-success="right">Name</label>
      <input type="text" name="user[first_name]" autofocus required minlength="3" class="form-control validate" autocomplete="nope" style="margin-bottom: 0.5rem;">
      <span class="invalid-feedback">Please enter a valid name.</span>
    </div>

    <div class="form-group">
      <label for="last_name" data-error="wrong" data-success="right">Last name</label>
      <input type="text" name="user[last_name]" required minlength="3" class="form-control validate" autocomplete="nope" style="margin-bottom: 0.5rem;">
      <span class="invalid-feedback">Please enter a valid last name.</span>
    </div>

    <div class="form-group">
      <label for="document_type" data-error="wrong" data-success="right" class="active">Document type</label>
      <select name="user[document_type]" class="form-control validate">
        <option value="DNI">DNI</option>
        <option value="CE">CE</option>
      </select>
      <span class="invalid-feedback">Please select a document type.</span>
    </div>

    <div class="form-group">
      <label for="document_number" data-error="wrong" data-success="right">Document number</label>
      <input type="text" name="user[document_number]" required minlength="8" maxlength="11" class="form-control validate" style="margin-bottom: 0.5rem;">
      <span class="invalid-feedback">Please enter a valid document number.</span>
    </div>

    <div class="form-group input-field city-field">
      <label for="city_value" data-error="wrong" data-success="right">City</label>
      <input type="search" name="user[city_value]" id="autocompleteCityInput" class="form-control validate mdb-autocomplete autocompleteCity" autocomplete="nope" value="<%= @city_name %>" required style="margin-bottom: 0.5rem;">
      <span class="invalid-feedback">Please enter a valid city.</span>
      <button class="mdb-autocomplete-clear">
      </button>
    </div>
    </div>
</div>



</template>

<script>
  import { useAuthStore } from '~/store/store'

  export default{
    name: 'profile',
    setup(){
      const store = useAuthStore();
      const user = store.user
      return{
        user
      }
    }
  }


</script>