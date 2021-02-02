<template>
  <q-footer>
    <q-tabs
      no-caps
      class="full-width row inline no-wrap justify-center items-stretch content-stretch q-mx-sm"
    >
      <q-route-tab to="/" exact-active-class="activeItem">
        <q-icon class="bigger-icon" name="home" /><span
          >Anasayfa</span
        ></q-route-tab
      >
      <q-route-tab to="/services" exact-active-class="activeItem">
        <q-icon class="bigger-icon" name="design_services" /><span
          >Hizmetler</span
        ></q-route-tab
      >
      <q-route-tab to="/contact" exact-active-class="activeItem">
        <q-icon class="bigger-icon" name="contact_page" /><span
          >İletişim</span
        ></q-route-tab
      >
      <q-route-tab to="/getOffer" exact-active-class="activeItem">
        <q-icon class="bigger-icon" name="local_offer" /><span
          >Teklif</span
        ></q-route-tab
      >
    </q-tabs>
  </q-footer>
</template>
<script>
export default {
  name: "MobileNavigator"
};
</script>
<style lang="scss">
.activeItem {
  background-color: $pink-7 !important;
}
.bigger-icon {
  font-size: 1.5rem;
}
.q-footer {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
