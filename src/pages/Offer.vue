<template>
  <div class="q-pa-md">
    <q-card class=" card full-width text-center">
      <q-img src="/images/netiva-icon.png" style="width:8rem;height:auto">
        <template v-slot:loading>
          <div class="text-subtitle1 text-white">
            Yükleniyor...
          </div>
        </template>
      </q-img>
      <div>
        <text-h4 class="col ">Netiva Software</text-h4>
      </div>

      <div class="text-subtitle1">
        Proje Oluşturma Formu
      </div>
      <div class="text-caption text-grey">
        Mutlu müşteriler için özenle çalışıyoruz
      </div>
    </q-card>
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
      done-color="green"
      active-color="purple"
      inactive-color="secondary"
      :vertical="isVertical"
    >
      <q-step
        :name="1"
        title="İletişim Bilgileri"
        icon="settings"
        :done="step > 1"
      >
        Bu grup proje için gerekli iletişim bilgilerinizi içerir
        <q-input
          v-model="clientName"
          filled
          clearable
          label="Adınız *"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Lütfen Adınızı Yazınız']"
        />
        <q-input
          v-model="clientMail"
          filled
          clearable
          label="Mail Adresiniz *"
          :rules="[
            val => (val && val.length > 0) || 'Lütfen Mail Adresinizi Yazınız'
          ]"
        />
      </q-step>

      <q-step
        :name="2"
        title="Teknik Özellikler"
        icon="create_new_folder"
        :done="step > 2"
      >
        Bu grup proje için belirlenen platform seçimlerini ve teknoloji
        paketlerini içerir
        <div class="q-mt-sm text-subtitle2">Hedef Platformlar:</div>
        <q-list class="">
          <div class="q-pa-md">
            <div class="q-gutter-md">
              <q-checkbox
                dense
                v-model="selectedPlatforms"
                val="mobile"
                label="iOS & Android"
              />
              <q-checkbox
                dense
                v-model="selectedPlatforms"
                val="web"
                label="Web"
              />
              <q-checkbox
                dense
                v-model="selectedPlatforms"
                val="desktop"
                label="Masaüstü"
              />
            </div>
          </div>
        </q-list>
        <div class="q-mt-sm text-subtitle2">
          Kullanılacak Özellikler ve Teknolojiler:
        </div>
        <q-list class="">
          <div class="q-pa-md">
            <div class="q-gutter-md">
              <q-checkbox
                dense
                v-model="selectedTechnologies"
                val="photo"
                label="Fotoğraf/Video"
              />
              <q-checkbox
                dense
                v-model="selectedTechnologies"
                val="gps"
                label="GPS"
              />
              <q-checkbox
                dense
                v-model="selectedTechnologies"
                val="fileTransfer"
                label="Dosya Aktarım"
              />
              <q-checkbox
                dense
                v-model="selectedTechnologies"
                val="auth"
                label="Kullanıcı ve Yetkilendirme"
              />
              <q-checkbox
                dense
                v-model="selectedTechnologies"
                val="pushNotifications"
                label="Push Notifications(Android, iOS, chrome ve firefox için)"
              />
              <q-checkbox
                dense
                v-model="selectedTechnologies"
                val="specialNotifications"
                label="Özel Bilgilendirme Sistemi"
              />
              <q-checkbox
                dense
                v-model="selectedTechnologies"
                val="restApi"
                label="Web Servis(Rest API)"
              />
              <q-checkbox
                dense
                v-model="selectedTechnologies"
                val="arVr"
                label="Arttırılmış Gerçeklik & Sanal Gerçeklik"
              />
              <q-checkbox
                dense
                v-model="selectedTechnologies"
                val="machineLearning"
                label="Makine Öğrenmesi(tensorflow, pytorch, scikit-learn, spark, keras)"
              />
            </div>
          </div>
        </q-list>
      </q-step>

      <q-step :name="3" title="Proje Detayları" icon="add_comment">
        Bu grup proje başlığı ve proje açıklamalarını içerir
        <q-input v-model="projectName" filled clearable label="Proje Başlığı" />
        <q-input
          v-model="projectDetails"
          filled
          clearable
          class="q-pt-md"
          type="textarea"
          label="Proje İçeriği *"
          :rules="[
            val => (val && val.length > 3) || 'Lütfen Proje İçeriğini Yazınız'
          ]"
        />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="validateAndNext()"
            color="primary"
            :label="step === 3 ? 'Tamamla' : 'İlerİ'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Önceki Adım"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
      <template v-slot:message>
        <q-banner v-if="step === 1" class="bg-purple-8 text-white q-px-lg">
          Kişisel bilgileriniz..
        </q-banner>
        <q-banner v-else-if="step === 2" class="bg-orange-8 text-white q-px-lg">
          Projede kullanılacak teknolojiler..
        </q-banner>
        <q-banner v-else-if="step === 3" class="bg-green-8 text-white q-px-lg">
          Proje içeriği ve detayları..
        </q-banner>
      </template>
    </q-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientName: null,
      clientMail: null,
      clientPhone: null,
      clientMessage: null,
      inputFillCancelled: false,
      textareaFillCancelled: false,
      imageUrl: "/images/netiva-logo.png",
      step: 1,
      selectedPlatforms: ["mobile"],
      selectedTechnologies: [],
      projectName: null,
      projectDetails: null,
      pageWidth: 0,
      sent: false
    };
  },
  computed: {
    isVertical() {
      if (this.pageWidth > 992) return false;
      return true;
    }
  },
  methods: {
    showSuccess() {
      this.$q.notify({
        color: "green-8",
        textColor: "white",
        icon: "done",
        message: "Projeniz iletilmiştir, teşekkürler"
      });
    },
    showErrorMessage() {
      this.$q.notify({
        style: "opacity:.6",
        color: "red-6",
        textColor: "white",
        icon: "warning",
        message: "Lütfen zorunlu alanları doldurunuz"
      });
    },
    completteStepper() {
      console.log("stepper complette!");
      this.sent = true;
      this.$q.loading.show();
      const obj = {
        name: this.clientName,
        mail: this.clientMail,
        platform: this.selectedPlatforms,
        features: this.selectedTechnologies,
        projectName: this.projectName,
        projectDetail: this.projectDetails
      };

      this.$axios.post(`${process.env.API}/create-project`, obj);

      this.$q.loading.hide();
      this.showSuccess();
    },
    validateAndNext() {
      let valid = false;
      if (this.step === 1) {
        valid = this.validateFirstStep();
      } else if (this.step === 2) {
        valid = true;
      } else {
        valid = this.validateLastStep();
      }
      if (valid) {
        if (this.step === 3) {
          this.completteStepper();
        } else this.$refs.stepper.next();
      } else {
        this.showErrorMessage();
      }
    },
    validateFirstStep() {
      return this.clientName !== null && this.clientMail !== null;
    },
    validateLastStep() {
      return this.projectDetails !== null;
    }
  },
  created() {
    this.pageWidth = window.innerWidth;
    window.addEventListener("resize", this.isVertical);
  },
  destroyed() {
    window.removeEventListener("resize", this.isVertical);
  }
};
</script>
<style lang="scss"></style>
