<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card class="full-width">
      <q-card-section class="full-width text-center">
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
          İletişim Formu
        </div>
        <div class="text-caption text-grey">
          Mutlu müşteriler için özenle çalışıyoruz
        </div>
      </q-card-section>

      <q-form @submit="onSubmit" class="q-ma-md q-pa-md">
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
        <q-input
          filled
          v-model="clientPhone"
          label="Telefon Numaranız"
          mask="(###) ### - ####"
          hint="Format: (555) 555 - 5555"
        />

        <q-input
          v-model="clientMessage"
          filled
          clearable
          class="q-pt-md"
          type="textarea"
          label="Mesajınız *"
          :rules="[
            val => (val && val.length > 3) || 'Lütfen Mesajınızı Yazınız'
          ]"
        />

        <q-card-actions class="justify-center full-width fit block-on-mobile">
          <div>
            <q-btn label="Gönder" class=" fit" type="submit" color="primary" />
          </div>
        </q-card-actions>
        <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
      </q-form>
    </q-card>
  </q-page>
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
      imageUrl: "/images/netiva-logo.png"
    };
  },

  computed: {
    inputShadowText() {
      if (this.inputFillCancelled === true) {
        return "";
      }

      const t = "Text filled when you press TAB";
      const empty =
        typeof this.inputModel !== "string" || this.inputModel.length === 0;

      if (empty === true) {
        return t;
      } else if (t.indexOf(this.inputModel) !== 0) {
        return "";
      }

      return t
        .split(this.inputModel)
        .slice(1)
        .join(this.inputModel);
    },

    textareaShadowText() {
      if (this.textareaFillCancelled === true) {
        return "";
      }

      const t =
          "This text\nwill be filled\non multiple lines\nwhen you press TAB",
        empty =
          typeof this.textareaModel !== "string" ||
          this.textareaModel.length === 0;

      if (empty === true) {
        return t.split("\n")[0];
      } else if (t.indexOf(this.textareaModel) !== 0) {
        return "";
      }

      return t
        .split(this.textareaModel)
        .slice(1)
        .join(this.textareaModel)
        .split("\n")[0];
    }
  },
  methods: {
    showSuccess() {
      this.$q.notify({
        color: "green-8",
        textColor: "white",
        icon: "done",
        message: "Mesajınız iletilmiştir, teşekkürler"
      });
    },
    onSubmit(e) {
      e.preventDefault();
      this.$q.loading.show();
      const obj = {
        name: this.clientName,
        mail: this.clientMail,
        phone: this.clientPhone,
        message: this.message
      };
      this.$axios.post(`${process.env.API}/contact`, obj);

      this.$q.loading.hide();
      this.showSuccess();
    }
  }
};
</script>
<style lang="scss">
.constrain {
  max-width: 80vw;
}
</style>
