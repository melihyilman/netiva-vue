<template>
  <div class="gt-xs">
    <div class="q-gutter-y-md">
      <q-tabs inline-label no-caps class="shadow-1 text-center">
        <q-route-tab
          active-color="red"
          exact-active-class="activeItem"
          to="/"
          class="text-center col"
          label="Anasayfa"
        />

        <q-route-tab
          to="/services"
          exact-active-class="activeItem"
          name="services"
          label="Hizmetlerimiz"
        />

        <q-route-tab
          to="/contact"
          exact-active-class="activeItem"
          name="contact"
          label="İletişim"
        />
        <q-route-tab
          to="/getOffer"
          exact-active-class="activeItem"
          name="alarms"
          label="Proje Oluştur"
        />
      </q-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>
<style lang="scss">
.activeItem {
  background-color: $pink-7 !important;
}
</style>
