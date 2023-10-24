<template>
  <div class="row flex-box-center">
    <div class="col-sm-8 col-md-6 col-lg-5 force_margin">
      <div class="card light-1 p-0">
        <h3 class="card-header info-color white-text text-center py-4 mb-3">
          Sign In
        </h3>
        <div class="card-body px-lg-5 text-center">
          <!-- <%= link_to user_facebook_omniauth_authorize_path, class: "btn btn-primary", style: "background-color: #3b5998 !important" do %> -->
          <a href="/" class="btn btn-primary" style="background-color: #3b5998 !important">  
            <i class="fab fa-facebook-f"></i>
          </a>>
          <a href="/" class="btn btn-primary" style="background-color: #3b5998 !important">  
            <i class="fab fa-google"></i>
          </a>
          <br>
          <br>
          <h3>
            or
          </h3>
          <form @submit.prevent="submit" method="post" novalidate="true">
            <div class="row">
              <div class="col">
                <div class="form__field--input md-form">
                  <label for="user_email" data-error="wrong" data-success="right">
                    Email
                  </label>
                  <input v-model="email" type="email" id="user_email" name="user[email]" autocomplete="email" class="form-control validate" style="margin-bottom: 0.5rem;" placeholder="example@mail.com" required>
                  <div class="invalid-feedback">
                    Email Invalido
                  </div>
                </div>
                <div class="form__field--input md-form">
                  <label for="user_email" data-error="wrong" data-success="right">
                    Email
                  </label>
                  <input v-model="password" type="password" id="user_email" name="user[password]" autocomplete="email" class="form-control validate" style="margin-bottom: 0.5rem;" placeholder="example@mail.com" required>
                  <span data-toggle="password" class="fa fa-fw fa-eye-slash field-icon toggle-password"></span>
                  <div class="invalid-feedback">
                    field required
                  </div>
                </div>
                <!-- <% if devise_mapping.rememberable? %> -->
                  <div class="d-flex justify-content-around">
                    <!-- <div class="field form-check">
                      <%= f.check_box :remember_me, class: "form-check-input" %>
                      <%= f.label :remember_me, class: "form-check-label" %>
                    </div> -->
                    <div>
                      <a href="<%= new_user_password_path %>" class="mdb-main-label">Forgot the password?</a>
                    </div>
                  </div>
                <!-- <% end %> -->
                <div class="row justify-content-center flex-column align-items-center">
                  <button type="submit" class="btn btn-outline-success btn-rounded btn-block form__submit my-4">
                    Login
                  </button>
                  <p>
                    Not a member?
                    <NextLink href="/register" class="form-link">Register</NextLink>

                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>


<script >
  export default {
    name: "LoginForm",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async submit() {
        try{
          const result = await useAsyncGql({
            variables: {email: this.email, pass: this.password},
            operation: 'SignIn'
          });
          
          console.log("token:"+result.data.value.signIn.token+"errors:"+result.data.value.signIn.errors);
        } catch(err) {
          console.error(err);
        }

      },
    },
  };
</script>
