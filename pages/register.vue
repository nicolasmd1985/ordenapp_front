<template>
  <div
    class="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <form>
      <div class="grid grid-cols-2 gap-4">
        <!--First name input-->
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput123"
            aria-describedby="emailHelp123"
            placeholder="First name" />
          <label
            for="emailHelp123"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >First name
          </label>
        </div>

        <!--Last name input-->
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput124"
            aria-describedby="emailHelp124"
            placeholder="Last name" />
          <label
            for="exampleInput124"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Last name
          </label>
        </div>
      </div>

      <!--Email input-->
      <div class="relative mb-6" data-te-input-wrapper-init>
        <input
          type="email"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput125"
          placeholder="Email address" />
        <label
          for="exampleInput125"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
          >Email address
        </label>
      </div>

      <!--Password input-->
      <div class="relative mb-6" data-te-input-wrapper-init>
        <input
          type="password"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput126"
          placeholder="Password" />
        <label
          for="exampleInput126"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
          >Password
        </label>
      </div>

      <!--Subscribe newsletter checkbox-->
      <div
        class="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
        <input
          class="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
          type="checkbox"
          value=""
          id="exampleCheck25" />
        <label
          class="inline-block pl-[0.15rem] hover:cursor-pointer"
          for="exampleCheck25">
          Subscribe to our newsletter
        </label>
      </div>

      <!--Submit button-->
      <button
        type="submit"
        class="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Sign up
      </button>
    </form>
  </div>
  <!-- <div class="container">
  <div class="row">
    <div class="col-sm-8 col-md-6 col-lg-6">
      <div class="card light-1 p-0 background_video">
      </div>
    </div>
    <div class="col-sm-8 col-md-6 col-lg-6">
      <div class="card light-1 p-0">
        <h3 class="card-header info-color white-text text-center py-4 mb-3">
          Sign up with:
        </h3>
        <div class="card-body px-lg-5 text-center">
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

            <form @submit.prevent="register" method="post" novalidate="true">  
              <div class="row">
                <div class="col-6">
                  <div class="form__field--input md-form field verify_name validate_field">
                    <label for="autocomplete-name" data-error="wrong" data-success="right">First Name</label>
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
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form__field--input md-form">
                    <label for="autocomplete-phone_number_1">Phone number</label>
                    <input  type="tel" name="phone_number_1" id="autocomplete-phone_number_1" maxlength="20" onkeypress="if (isNaN(String.fromCharCode(event.keyCode))) return false;" class="form-control" autocomplete="nope" style="margin-bottom: 0.5rem;">
                  </div>
                  <div class="form__field--input md-form field verify_corporation validate_field">
                    <label for="autocomplete-corporation">Corporation</label>
                    <input v-model="corporation_id" type="text" name="corporation_id" id="autocomplete-corporation" class="input-field autocomplete form-control validate" autocomplete="off" minlength="3" required="true" style="margin-bottom: 0.5rem;">
                    <div class="invalid-feedback">
                      Invelid Corporation
                    </div>
                  </div>
                  <div class="form__field--input md-form field verify_email validate_field">
                    <label for="email" data-error="wrong" data-success="right">Email</label>
                    <input v-model="email" type="email" name="email" id="email" placeholder="example@mail.com" autofocus="true" autocomplete="email" class="form-control validate" style="margin-bottom: 0.5rem;">
                  </div>
                  <div class="form__field--input md-form field verify_pass validate_field">
                    <label for="user_password">Password</label>
                    <input v-model="password" type="password" name="password" id="user_password" autocomplete="new-password" class="form-control">
                    <span toggle="#user_password" class="fa fa-fw fa-eye-slash field-icon toggle-password"></span>
                  </div>
                  <div class="form__field--input md-form field verify_pass_confirm validate_field">
                    <label for="user_password_confirmation">Password confirmation</label>
                    <input type="password" name="password_confirmation" id="user_password_confirmation" autocomplete="new-password" class="form-control">
                    <span toggle="#user_password_confirmation" class="fa fa-fw fa-eye-slash field-icon toggle-password"></span>
                  </div>
                  <div class="check-div">
                    <input id="acceptCheck" class="form-check-input validate_check" type="checkbox" required="true" checked="true" name="acceptCheck">
                    <label for="acceptCheck">
                      <a href="https://ordenapp.co/terminos-y-condiciones" target="_blank" title="<%= t('home.index.terms') %>">
                        You must agree before submitting
                      </a>
                    </label>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center flex-column align-items-center">
                <button type="submit" class="btn btn-outline-success btn-rounded btn-block form__submit my-4"  >
                  Register
                </button>
                <p>
                  Are you a member?
                    <nuxt-link to="/login" class="form-link">
                      Sign in
                    </nuxt-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div> -->


</template>


<script >
  import { useAuthStore } from '~/store/store'
  const store = useAuthStore();
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
          let token = result.data.value.signUp.token
          let user = result.data.value.signUp.user
          // console.log(result);
          if (token){
            store.token = token;
            store.user = user;
            store.userAuthentication = true;
            this.$router.push('/dashboard');
          }
          // const data = await GqlSignUp(user.)
        } catch(err) {
          console.log(err);
        }

      },
    },
  };
</script>
