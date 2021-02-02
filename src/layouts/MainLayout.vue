<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="pr-0">
        <q-toolbar-title class="center-on-mobile ">
          <q-btn no-caps flat label="Netiva" class="center-on-small" to="/">
          </q-btn>
        </q-toolbar-title>

        <MenuLinks />
        <MobileNavigator class="small-screen-only" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="bg-primary text-white footer-bottom">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle2"
          >Copyright © Netiva Software</q-toolbar-title
        >
      </q-toolbar>
    </div>
  </q-layout>
</template>

<script>
import MenuLinks from "components/Menu.vue";
import MobileNavigator from "components/MobileNav.vue";

export default {
  name: "MainLayout",
  components: { MenuLinks, MobileNavigator }
  // data () {
  //   return {
  //     essentialLinks: linksData
  //   }
  //  }
};
</script>
