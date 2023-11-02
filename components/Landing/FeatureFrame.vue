<template>
  <div class="feature-section">
    <div class="container">
      <h3 class="my-5 text-center">...and much more</h3>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-5 justify-content-center">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="data-aos-feature"
          :data-aos="feature.animation"
          :data-aos-duration="feature.animationDuration"
        >
          <div class="grid grid-cols-2 gap-2 mb-2 pl-3">
            <div  >
              <Icon :name="feature.iconName" aria-hidden="true" size="30px"></Icon>
            </div>
            <div class="mb-2 pl-3">
              <h5 class="feature-title font-bold mb-1">{{ feature.title }}</h5>
              <p class="grey-text mt-2">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        features: [
          {
            title: "Geolocation",
            description: "Resource tracking in real time.",
            iconName: "emojione-v1:ballot-box-bold-check",
            animation: "fade-right",
            animationDuration: "1500",
          },
          {
            title: "Time Control",
            description: "Know exactly when and where operations are carried out.",
            iconName: "emojione-v1:ballot-box-bold-check",
            animation: "fade-left",
            animationDuration: "1500",
          },
          {
            title: "Work Orders",
            description: "Online work orders assignment 24/7",
            iconName: "uil:github",
            animation: "fade-right",
            animationDuration: "1500",
          },
          {
            title: "Digital Signature",
            description: "Make sure that your orders have been completed throught the digital signature capture.",
            iconName: "emojione-v1:ballot-box-bold-check",
            animation: "fade-left",
            animationDuration: "1500",
          },
          {
            title: "Activity",
            description: "Know the current status and activities of your collaborators.",
            iconName: "emojione-v1:ballot-box-bold-check",
            animation: "fade-right",
            animationDuration: "1500",
          },
          {
            title: "Tools tracking report",
            description: "Avoid tools loss knowing to whom it has been assigned.",
            iconName: "emojione-v1:cat-face-with-tears-of-joy",
            animation: "fade-left",
            animationDuration: "1500",
          },
          {
            title: "Follow up materials and equipment",
            description: "Identify and track in real time electromechanical equipment and materials.",
            iconName: "emojione-v1:ballot-box-bold-check",
            animation: "fade-right",
            animationDuration: "1500",
          },
          {
            title: "Maintenance Alert",
            description: "Mainteinance automation for materials and equipments according to their nature.",
            iconName: "emojione-v1:ballot-box-bold-check",
            animation: "fade-left",
            animationDuration: "1500",
          },
        ],
      };
    },
  };
</script>
