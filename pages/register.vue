<template>
  <div class="container">
  <div class="row">
    <div class="col-sm-8 col-md-6 col-lg-6">
      <div class="card light-1 p-0 background_video">
        <!-- <%= video_tag "https://#{ENV['S3_BUCKET_NAME']}.s3.amazonaws.com/ordenapp_main_page+liviano.mp4", playsinline: true, controls: false, autoplay: true, width: "100%", id: "video_presentation", preload: "auto", muted: true, loop: false %> -->
      </div>
    </div>
    <div class="col-sm-8 col-md-6 col-lg-6">
      <div class="card light-1 p-0">
        <h3 class="card-header info-color white-text text-center py-4 mb-3">
          <!-- <%= t("session.index.sign_up") %> -->
          Sign up with:
        </h3>
        <div class="card-body px-lg-5 text-center">
          <!-- <%= link_to user_facebook_omniauth_authorize_path, class: "btn btn-primary", style: "background-color: #3b5998 !important" do %> -->
          <a href="/users/auth/facebook" class="btn btn-primary" style="background-color: #3b5998 !important">
            <i class="fab fa-facebook-f"></i>
          </a>  
          <a href="/users/auth/google_oauth2" class="btn btn-primary" style="background-color: #dd4b39 !important">
            <i class="fab fa-google"></i>
          </a>
          <br>
          <br>
          or
          <button class="btn btn-primary" id="email_register" type="button">
            Email Register
          </button>
          <div id="form_new_email">
            <!-- <%= form_for(resource, as: resource_name, url: registration_path(resource_name), html: { autocomplete: "off" }) do |f| %> -->
            <!-- <Notification :message="error" v-if="error"/> -->
            <form @submit.prevent="register" method="post" novalidate="true">  
            <!-- <%= render "devise/shared/error_messages", resource: resource %> -->
              <div class="row">
                <div class="col-6">
                  <div class="form__field--input md-form field verify_name validate_field">
                    <!-- <%= f.label t("users.index.name"), "data-error" => "wrong", "data-success" => "right" %> -->
                    <label for="autocomplete-name" data-error="wrong" data-success="right">First Name</label>
                    <!-- <%= f.text_field :first_name, autofocus: true, required: true, minlength: 3, class: "form-control validate", id: "autocomplete-name", autocomplete: "nope", style: "margin-bottom: 0.5rem;" %> -->
                    <input v-model="first_name" type="text" name="first_name" id="autocomplete-name" autofocus required minlength=3 class="form-control validate" autocomplete="nope" style="margin-bottom: 0.5rem;">
                    <div class="invalid-feedback">
                      This field is required!
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form__field--input md-form field verify_lastname validate_field">
                    <label for="autocomplete-name" data-error="wrong" data-success="right">Last Name</label>
                    <input v-model="last_name" type="text" name="last_name" id="autocomplete-name" autofocus required minlength=3 class="form-control validate" autocomplete="nope" style="margin-bottom: 0.5rem;">
                    <div class="invalid-feedback">
                      This field is required!
                      <!-- <%= t("base.forms.err_2") %> -->
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form__field--input md-form">
                    <!-- <%= f.label t("users.index.phone_1") %>
                    <%= f.number_field :phone_number_1, type: "tel", maxlength: 20, onkeypress: "if (isNaN(String.fromCharCode(event.keyCode))) return false;", class: "form-control", id: "autocomplete-phone_number_1", autocomplete: "nope", style: "margin-bottom: 0.5rem;" %> -->
                    <label for="autocomplete-phone_number_1">Phone number</label>
                    <input  type="tel" name="phone_number_1" id="autocomplete-phone_number_1" maxlength="20" onkeypress="if (isNaN(String.fromCharCode(event.keyCode))) return false;" class="form-control" autocomplete="nope" style="margin-bottom: 0.5rem;">
                    <!-- <div class="invalid-feedback">
                      <%= t("profile.invalid_tel") %>
                    </div> -->
                  </div>
                  <div class="form__field--input md-form field verify_corporation validate_field">
                    <!-- <%= f.label t("corporation.index.name") %>
                    <%= f.text_field :corporation_id, class: "input-field autocomplete form-control validate", id: "autocomplete-corporation", autocomplete: "off", minlength: 3, required: "true", style: "margin-bottom: 0.5rem;" %> -->
                    <label for="autocomplete-corporation">Corporation</label>
                    <input v-model="corporation_id" type="text" name="corporation_id" id="autocomplete-corporation" class="input-field autocomplete form-control validate" autocomplete="off" minlength="3" required="true" style="margin-bottom: 0.5rem;">
                    <div class="invalid-feedback">
                      Invelid Corporation
                    </div>
                  </div>
                  <div class="form__field--input md-form field verify_email validate_field">
                    <!-- <%= f.label t("users.index.email"), "data-error" => "wrong", "data-success" => "right" %>
                    <%= f.email_field :email, autofocus: true, autocomplete: "email", placeholder: 'example@mail.com', class: "form-control validate", style: "margin-bottom: 0.5rem;" %> -->
                    <label for="email" data-error="wrong" data-success="right">Email</label>
                    <input v-model="email" type="email" name="email" id="email" placeholder="example@mail.com" autofocus="true" autocomplete="email" class="form-control validate" style="margin-bottom: 0.5rem;">
                    <!-- <div class="invalid-feedback">
                      <%= t("profile.invalid_email") %>
                    </div> -->
                  </div>
                  <div class="form__field--input md-form field verify_pass validate_field">
                    <!-- <%= f.label t("profile.password") %>
                    <%= f.password_field :password, autocomplete: "new-password", class: "form-control" %> -->
                    <label for="user_password">Password</label>
                    <input v-model="password" type="password" name="password" id="user_password" autocomplete="new-password" class="form-control">
                    <span toggle="#user_password" class="fa fa-fw fa-eye-slash field-icon toggle-password"></span>
                    <!-- <% if @minimum_password_length %>
                      <small class="form-text text-muted">
                        <%= t("profile.password_length") %>
                      </small>
                    <% end %>
                    <div class="invalid-feedback">
                      <%= t("profile.invalid_pattern_password") %>
                    </div> -->
                  </div>
                  <div class="form__field--input md-form field verify_pass_confirm validate_field">
                    <label for="user_password_confirmation">Password confirmation</label>
                    <input type="password" name="password_confirmation" id="user_password_confirmation" autocomplete="new-password" class="form-control">
                    <span toggle="#user_password_confirmation" class="fa fa-fw fa-eye-slash field-icon toggle-password"></span>
                    <!-- <div class="invalid-feedback">
                      <%= t("profile.mismatched_password") %>
                    </div> -->
                  </div>
                  <div class="check-div">
                    <input id="acceptCheck" class="form-check-input validate_check" type="checkbox" required="true" checked="true" name="acceptCheck">
                    <label for="acceptCheck">
                      <a href="https://ordenapp.co/terminos-y-condiciones" target="_blank" title="<%= t('home.index.terms') %>">
                        You must agree before submitting
                      </a>
                    </label>
                    <!-- <div class="invalid-feedback">
                      <%= t("session.index.terms_service") %>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="row justify-content-center flex-column align-items-center">
                <button type="submit" class="btn btn-outline-success btn-rounded btn-block form__submit my-4"  >
                  <!-- <%= t("session.index.register") %> -->
                  Register
                </button>
                <p>
                  <!-- <%= t("session.index.member") %> -->
                  Are you a member?
                  <!-- <a href="/en/users/sign_in" class="form-link"> -->
                    <nuxt-link to="/login" class="form-link">
                      <!-- <%= t("session.index.sign_in") %> -->
                      Sign in
                    </nuxt-link>
                  <!-- </a> -->
                </p>
              </div>
            <!-- <% end %> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</template>


<script >
  export default {
    name: "RegisterForm",
    data() {
      return {
        first_name: "",
        last_name: "",
        email: "",
        corporation_id: "",
        password: "",
      };
    },
    methods: {
      async register() {
        try{
          const result = await useAsyncGql({
            variables: {
              user: {
                email: this.email,
                corporationId: this.corporation_id,
                firstName: this.first_name,
                lastName: this.last_name

              }, 
              password: this.password
            },
              operation: 'SignUp'
          });
          console.log("token:"+result.data.value.signUp.token+"errors:"+result.data.value.signUp.errors);
          console.log(result);
          // const data = await GqlSignUp(user.)
        } catch(err) {
          console.log(err);
        }

      },
    },
  };
</script>
