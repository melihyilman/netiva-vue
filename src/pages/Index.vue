<template>
  <q-page class="q-pa-md ">
    <LoadingScreen :isLoading="isLoading" />
    <div v-if="!isLoading">
      <div class="row  text-center heigth-100vh" style="align-items: center;">
        <div class="col-12 col-md-6 center-align">
          <div className="col-12">
            <div class="text-h3 q-mb-md fw-300">
              Efektif, Pratik, Yazılım Çözümleri
            </div>
            <div class="text-h5 q-pt-md">
              En hızlı çözümler için iletişime geçin
            </div>
            <div class="text-body1 q-pa-md">
              Krizi fırsata çevirmek için proje sunalım
            </div>
          </div>
          <div class="row"></div>
          <div class="q-pa-md q-gutter-sm q-mt-md q-mb-md">
            <transition appear="true" enter-to-class="dec">
              <q-btn to="/getOffer" label="PROJE OLUŞTUR" color="primary" />
            </transition>
            <transition appear enter-to-class="animated bounce ">
              style="transition-duration: 5.3s !important;"
              <q-btn to="/contact" label="TEKLİF AL" outline color="primary" />
            </transition>
          </div>
        </div>

        <div class="col-12 col-md-6 ">
          <div>
            <img class="responsive playground" src="/svg/playground.svg" />
          </div>
        </div>
        <div class="col-12">
          <div class="text-center text-h5 fw-400 q-mb-xl">
            <span>Problemlerinizi</span>

            <vue-typer
              class="text-primary"
              :text="[
                ' Fırsata ',
                ' Verimliliğe ',
                ' Kaliteli Ürünlere ',
                ' Rekabet Üstünlüğüne '
              ]"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="3000"
              :erase-delay="150"
              erase-style="backspace"
              :erase-on-complete="false"
              caret-animation="smooth"
            ></vue-typer>
            <span> Dönüştürüyoruz</span>
          </div>
        </div>
      </div>
      <div>
        <template>
          <div class="q-px-lg q-pt-xl">
            <q-timeline :layout="layout" color="pink-7">
              <q-timeline-entry heading class="text-center">
                Proje Süreçlerimiz
                <br />
              </q-timeline-entry>

              <q-timeline-entry
                title="İhtiyaç Analizleri Yapılması"
                side="left"
                icon="search"
              >
                <div class="row ">
                  <div class="col-12 col-md-6">
                    <q-img
                      src="/svg/01-analyze.svg"
                      style="width:10rem;height:auto"
                    />
                  </div>
                  <div class="col-12 col-md-6 text-justify q-pl-md">
                    Problemin belirlenmesi, ihtiyaçların listelenmesi ve çözüm
                    önerileri analiz edilir. Kurumun ihtiyacına yönelik optimum
                    çözüm önerileri ve fiyat teklifleri iletilir. Kabul edilen
                    öneri için bir sonraki aşamaya hazırlanılır.
                  </div>
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                title="Uygulamanın Prototipi Oluşturulması"
                side="right"
                icon="bookmarks"
              >
                <div class="row">
                  <div class="col-12 col-md-4 ">
                    <q-img
                      src="/svg/02-proto.svg"
                      style="width:10rem;height:auto"
                    />
                  </div>
                  <div class="col-12 col-md-6 text-justify ">
                    Optimum olarak seçilen çözüm önerisi ile ilgili prototip
                    oluşturulur. Arayüz tasarımları yapılır. İhtiyaca yönelik
                    web veya mobil uygulaması için demo hazırlanır.
                  </div>
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                title="Uygulamanın Hazırlanması"
                side="left"
                icon="code"
              >
                <div class="row">
                  <div class="col-12 col-md-6">
                    <q-img
                      src="/svg/03-build.svg"
                      style="width:10rem;height:auto"
                    />
                  </div>
                  <div class="col-12 col-md-6 text-justify q-pl-md">
                    Prototipi hazırlanan uygulama için ihtiyaçlara yönelik arka
                    plan işlemleri, performans düzenlemeleri, gerekli
                    entegrasyonlar, hedeflenen işlemlerin yapılması ve
                    prototipte düzenleme ihtiyaçları tekrar incelenir. Kullanım
                    kolaylığı sağlayacak özellikler bu aşamada dahil edilebilir.
                    Uygulama tanıtımı yine bu aşamada yapılır.
                  </div>
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                title="Projenin Tamamlanması"
                side="right"
                icon="done_all"
              >
                <div class="row">
                  <div class="col-12 col-md-4">
                    <q-img
                      src="/svg/04-live-test.svg"
                      style="width:10rem;height:auto"
                    />
                  </div>
                  <div class="col-12 col-md-6 text-justify">
                    Uygulamananın canlı testleri, eğitimleri tamamlanır. Eğer ek
                    geliştirme istenirse lisans bakımları kapsamında gereği
                    yapılır. Müşteri uygulamaya hakim olması sağlanır, proje
                    tamamlanır.
                  </div>
                </div>
              </q-timeline-entry>
            </q-timeline>
          </div>
        </template>
        <div class="row justify-end">
          <q-btn
            to="/contact"
            icon="more"
            color="primary"
            class="q-ma-xs"
            outline
            label="Daha Fazlası İçİn"
          ></q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import LoadingScreen from "../components/LoadingScreen";

export default {
  name: "PageIndex",
  components: {
    LoadingScreen
  },
  data() {
    return { isLoading: true };
  },
  computed: {
    layout() {
      return this.$q.screen.lt.sm
        ? "dense"
        : this.$q.screen.lt.md
        ? "comfortable"
        : "loose";
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
};
</script>

<style lang="scss">
.dec {
  animation: bounce 3s 0.5s infinite;
}
.bounce {
  --animate-repeat: 30 !important;
}
.playground {
  max-height: 70vh;
}
.heigth-100vh {
  height: 100vh !important;
}
.fw-300 {
  font-weight: 300 !important;
}
.fw-400 {
  font-weight: 400 !important;
}
.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */

  .custom.char {
    color: $primary;
  }
}
</style>
