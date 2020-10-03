export default {
  inputmask: {
    mobile: "(###) ### ####",
    phone: "(##) ### ####",
    idcard: "#-####-#####-##-#"
  },
  rules: {
    textRule: [v => !!v || "is required"],
    textRuleLength: [v => `${v}`.length >= 8 || "At least 8 characters"],
    textRulePassword: [
      v => !!v || "is required",
      v => `${v}`.length >= 8 || "At least 8 characters"
    ],
    numberRule: v => {
      if (!`v`.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999999999) return true;
      return "Number has to be between 0 and 999999999";
    },
    emailRule: [
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ],
  },
}