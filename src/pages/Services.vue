<template>
  <q-page>
    <div class="q-pa-md  ">
      <q-card class="text-center center-on-upper-mobile">
        <q-card-section>
          <div class="text-h5 fw-600">
            İşimiz, Gelişen Teknolojileri Takip Etmek
          </div>
          <div class="text-subtitle2">
            Aktif Hizmetlerimiz
          </div>
        </q-card-section>

        <q-tabs
          v-model="tab"
          class="primary-text-color"
          mobile-arrows
          outside-arrows
          :vertical="vertical"
          active-bg-color="pink-7"
          active-color="white"
          :indicator-color="getColor"
        >
          <q-tab
            no-caps
            label="Arttırılmış Gerçeklik Çözümleri"
            name="ARSolutions"
          />
          <q-tab no-caps label="Büyük Veri & Veri Analizi" name="bigData" />
          <q-tab
            no-caps
            label="Makine Öğrenmesi Çözümleri"
            name="machineLearning"
          />
          <q-tab no-caps label="Mobil & Web Uygulamaları" name="mobileAndWeb" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated swipeable>
          <q-tab-panel name="ARSolutions">
            <div class="row">
              <div class="col-12 col-md-6 ">
                <img class="max-heigth-30" src="/svg/vr_solutions.svg" />
              </div>
              <div class="col-12 col-md-6  align-self-center text-justify">
                Arttırılmış gerçeklik, gerçek dünyadaki çevrenin ve
                içindekilerin, bilgisayar tarafından üretilen; ses, görüntü,
                grafik ve GPS verileriyle zenginleştirilerek meydana getirilen
                canlı veya dolaylı fiziksel görünümüdür. Bu kavram kısaca
                gerçekliğin bilgisayar tarafından değiştirilmesi ve
                artırılmasıdır. Teknoloji kişinin gerçekliğini zenginleştirme
                işlevini görür. Buna karşın sanal gerçeklikte ise gerçek dünya
                yerine tasarlanıp canlandırılmış bir dünya vardır. Eğitim
                sistemimizi geliştirmek, öğrencilerimizin daha iyi eğitim
                alabilmesini sağlamak için, kimya laboratuvar dersleri başta
                olmak üzere, biyoloji, fizik, coğrafya, yabancı dil, teknik
                çizim gibi somutlaştırılma ihtiyacı olan dersler için
                materyaller geliştirmekteyiz.
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="bigData">
            <div class="row">
              <div class="col-12 col-md-6 ">
                <img class="max-heigth-30" src="/svg/bigData.svg" />
              </div>
              <div class="col-12 col-md-6  align-self-center text-justify">
                İlişkisel veritabanları gigabyte seviyesinde veri tutabilirken,
                büyük data ile petabyte seviyelerinde veriler saklayabiliriz.
                Ancak büyük data sadece yığın işleme(Batch) işlemleri için
                uygundur. Transactions gibi gelişmiş veritabanlarında kritik
                öneme sahip özellikler yoktur. Veritabanları okuma, yazma
                güncelleme gibi işlemleri transactionlar aracılığı ile
                yapabildiği için bu işlemler atomik olarak kabul edilir ve
                çeşitli kilitleme mekanizmaları ile verinin birden fazla işlem
                tarafından değiştirilerek tutarsızlaşması engellenir. Büyük veri
                bir kere yazılıp defalarca okuma işlemi yapıldığı duruımlarda
                kullanılması gerekir. Çünkü veriler birden fazla yerde paralel
                olarak işlenir.Bu büyüklükte veri RFID sensörlerinden, sosyal
                medyaya, hastanelere kadar birçok alanda üretilmektedir. DNA
                dizilişlerinin analizi, hava durumu sensörlerinden gelen veriler
                başta olmak üzere verileme işlemlerinin yapıldığı birçok alanda
                büyük veri bir ihtiyaç olarak karşımıza çıkmaktadır.
                Kuruluşların her geçen gün artan verilerine karşın, bu verileri
                kuruluş için anlamlı hale getirmek amacıyla işlenip, şirket için
                anlamlı grafikler haline çevirmekteyiz. İşlenemeyen veya
                işlenmesi güç verilerin, kuruluş için faydalı hale getirilmesi
                için önemlidir. Sizde kurumunuzdaki büyük verileri anlamlı hale
                getirmek istiyorsanız, iletişime geçiniz.
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="machineLearning">
            <div class="row">
              <div class="col-12 col-md-6 ">
                <img class="max-heigth-30" src="/svg/machineLearning.svg" />
              </div>
              <div class="col-12 col-md-6  align-self-center text-justify">
                Makine öğrenimi sistemlerinin bir bölümü insan sezgisine olan
                gereksinimi tümüyle ortadan kaldırmaya çalışırken bazıları insan
                ve makine arasında işbirliğine dayalı bir yaklaşım
                benimsemektedir. Ne var ki, sistemi tasarlayan kişinin verinin
                kodlanma biçimi üzerinde tümüyle egemen oluşu insan sezgisinin
                tümüyle ortadan kaldırılmasını olanaksızlaştırmaktadır. Makine
                öğrenimi deneysel yöntemin otomatikleştirilmesi çabası olarak
                görülmektedir. Makine öğrenimi algoritmaları ve bunların
                başarımına ilişkin berimsel çözümleme berimsel öğrenme kuramı
                olarak adlandırılan bir kuramsal bilgisayar bilimi dalıdır.
                Deney kümelerinin sonlu oluşu ve geleceğin tam olarak
                kestirilememesi nedeniyle öğrenme kuramı söz konusu
                algoritmaların başarımına ilişkin mutlak güvence verememektedir.
                Bunun yerine, başarımın olasılıksal sınırları öngörülmeye
                çalışılmaktadır.Buna bağlı olarak ticarette, tahminleme her
                geçen gün rekabet açısından önem kazanmaktadır. Pazar alanı
                tahmini, satış tahmini gibi konuları modelleyerek
                ihtiyaçlarınıza yönelik çözümler sunmaktayız.
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="mobileAndWeb">
            <div class="row">
              <div class="col-12 col-md-6 ">
                <img class="max-heigth-30" src="/svg/mobileApp.svg" />
              </div>
              <div class="col-12 col-md-6  align-self-center text-justify">
                Güncel teknolojileri kullanarak mobile-first yaklaşımımız ile,
                hızlı, güvenli, güvenilir ve kolay kullanılabilir uygulamalar
                geliştiriyoruz. Mobile-first yaklaşımında uygulamalar yapıyoruz.
                Amacımız tüm cihazlardan responsive görünüm sağlamak.Bu konuda
                basit tasarımlarla ve kullanılması kolay arayüzlerin
                tasarlanmasında bizden destek alabilirsiniz.
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
    <div class="col-12 ">
      <q-card-section>
        <div class="text-subtitle1 text-center">
          Aktif Kullandığımız Teknolojiler
        </div>
      </q-card-section>
    </div>
    <div class="q-pa-md row  q-gutter-md margin-0-auto">
      <q-card class="usedTechs">
        <q-img src="https://cdn.worldvectorlogo.com/logos/c--4.svg" basic>
          <!-- <div class="absolute-bottom text-subtitle2 text-center"></div> -->
        </q-img> </q-card
      ><q-card class="usedTechs">
        <q-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/768px-.NET_Core_Logo.svg.png"
          basic
        >
          <!-- <div class="absolute-bottom text-subtitle2 text-center">
            .Net Core
          </div> -->
        </q-img> </q-card
      ><q-card class="usedTechs">
        <q-img
          src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"
          basic
        >
          <!-- <div class="absolute-bottom text-subtitle2 text-center">
            Blazor
          </div> -->
        </q-img> </q-card
      ><q-card class="usedTechs">
        <q-img
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-512.png"
          basic
        >
          <!-- <div class="absolute-bottom text-subtitle2 text-center">
            Vue.js
          </div> -->
        </q-img> </q-card
      ><q-card class="usedTechs">
        <q-img
          src="https://cdn.iconscout.com/icon/free/png-256/flutter-2752187-2285004.png"
          basic
        >
          <!-- <div class="absolute-bottom text-subtitle2 text-center">
            Flutter
          </div> -->
        </q-img> </q-card
      ><q-card class="usedTechs">
        <q-img
          src="https://v0-17.quasar-framework.org/images/quasar-logo-big.png"
          basic
        >
          <!-- <div class="absolute-bottom text-subtitle2 text-center">
            Quasar
          </div> -->
        </q-img> </q-card
      ><q-card class="usedTechs">
        <q-img
          src="https://img.stackshare.io/service/6422/react-navigation.png"
          basic
        >
          <!-- <div class="absolute-bottom text-subtitle2 text-center">
            React
          </div> -->
        </q-img>
      </q-card>
      <q-card class="usedTechs">
        <q-img
          src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unity-512.png"
          basic
        >
          <!-- <div class="fixed-bottom text-subtitle2 text-center">
            Unity
          </div> -->
        </q-img>
      </q-card>
    </div>

    <!-- <div class="q-pa-md flex center-card">
      <q-card class="parallax-card">
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax1.jpg"
          :height="150"
        />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
      </q-card>
    </div> -->
  </q-page>
</template>

<script>
export default {
  name: "PageServices",

  data() {
    return {
      tab: "ARSolutions",
      size: 0
    };
  },
  computed: {
    getColor() {
      return this.size > 992 ? "$pink-7" : "$primary";
    },
    vertical() {
      if (this.size > 992) return false;
      return true;
    }
  },
  created() {
    this.size = window.innerWidth;
    window.addEventListener("resize", this.vertical);
  },
  destroyed() {
    window.removeEventListener("resize", this.vertical);
  }
};
</script>
<style lang="scss">
.parallax-card {
  width: 100%;
  // max-width: 70vw;
}
.fw-600 {
  font-weight: 600;
}
.primary-text-color {
  color: $primary;
}
.max-heigth-30 {
  max-height: 30vh;
}
.align-self-center {
  align-self: center;
}
.usedTechs {
  //width: 100%;
  width: 150px;
  height: 150px;
  background: transparent !important;
}
.margin-0-auto {
  margin: 0 auto;
}
.activeItem {
  background-color: $pink-7 !important;
}
</style>
