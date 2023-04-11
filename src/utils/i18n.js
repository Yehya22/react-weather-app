import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      error_1006: "invaild search term please try again",
    },
  },
  ar: {
    translation: {
      Success: "نجاح",
      "get Weather by location": " معرفة الطقس حسب موقعك الحالي",
      "Feels like": "الشعور الفعلي",
      Info: "الحالة",
      Humidity: "الرطوبة",
      "Enter your location...": "أدخل موقعك الحالي",
      "Enter a city or use location button to get the weather data.":
        " ابحث عن أي  مدينة أو استخدم زر تحديد الموقع للحصول على بيانات الطقس",
      error_1006: "لا توجد نتائج رجاء المحاولة مجددا",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
