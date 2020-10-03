import axios from "axios";
const users = JSON.parse(localStorage.getItem('users'));
import { commonLabel, selectOption } from "@/data";

export default {
  async itemsName(url, filters = null, showCode = false) {
    const lang = users.systems.lang;
    let elem = [];
    let filter = "";
    if (filters) {
      for (var key in filters) {
        if (filter == "") filter += "?";
        else filter += "&";
        filter += `${key}=${filters[key]}`;
      }
    }

    await axios
      .get(`${process.env.VUE_APP_API_HOST}/${url}${filter}`, { headers: { lang } })
      .then(response => {
        response.data.items.map(item => {
          elem.push({
            ...item,
            text: `${(showCode ? `${item.code}-` : "")}${item.name}`,
            value: item.id
          });
        });
      });
    return elem;
  },

  async itemsTitle(url, filters = null, showCode = false) {
    const lang = users.systems.lang;
    let elem = [];
    let filter = "";
    if (filters) {
      for (var key in filters) {
        if (filter == "") filter += "?";
        else filter += "&";
        filter += `${key}=${filters[key]}`;
      }
    }

    await axios
      .get(`${process.env.VUE_APP_API_HOST}/${url}${filter}`, { headers: { lang } })
      .then(response => {
        response.data.items.map(item => {
          elem.push({
            ...item,
            text: `${(showCode ? `${item.code}-` : "")}${item.title}`,
            value: item.id
          });
        });
      });
    return elem;
  },

  async selectUsers(filters = null, code = false) {
    const lang = users.systems.lang;
    let elem = [];
    let filter = "";
    if (filters) {
      for (var key in filters) {
        if (filter == "") filter += "?";
        else filter += "&";
        filter += `${key}=${filters[key]}`;
      }
    }

    await axios
      .get(`${process.env.VUE_APP_API_HOST}/user${filter}`,
        { headers: { lang } })
      .then(response => {
        response.data.items.map(item => {
          elem.push({
            ...item,
            text: `${(code ? `${item.code}-` : "")}${item.firstname} ${item.lastname}`,
            value: item.id
          });
        });
      });
    return elem;
  },

  async selectAddressType() {
    const lang = users.systems.lang;
    let elem = [];
    const items = await commonLabel.addressType;

    await items.forEach(item => {
      elem.push({
        value: item.value,
        text: item[`text${lang}`]
      });
    });

    return await elem;
  },

  async selectUnitType() {
    const lang = users.systems.lang;
    let elem = [];
    const items = await commonLabel.unitType;

    await items.forEach(item => {
      elem.push({
        value: item.value,
        text: item[`text${lang}`],
      });
    });

    return await elem;
  },

  async selectUserType() {
    const lang = users.systems.lang;
    let elem = [];
    const items = await commonLabel.user.userType;

    await items.forEach(item => {
      elem.push({
        ...item,
        value: item.value,
        text: `${item.value} - ${item[`text${lang}`]}`,
      });
    });

    return await elem;
  },

  selectYear(type, down) {
    let obj = {
      type,
      down
    };
    const dn = new Date();
    let years = [];
    let yearnow = parseInt(dn.getFullYear());
    let year = parseInt(dn.getFullYear());
    let y_balance = 0;

    for (let index = 0; index <= parseInt(yearnow); index++) {
      if (obj.down) y_balance = parseInt(year) - index;
      else y_balance = parseInt(year) + index;

      years.push({
        value: y_balance,
        text: y_balance + (obj.type == "TH" ? 543 : 0)
      });
    }

    return years;
  },

  selectMonth(lang) {
    let months = [], month = [];
    month = commonLabel.date[`monthFull${lang}`];

    for (let index = 0; index < month.length; index++) {
      let val = index + 1;
      months.push({
        value: `${val}`.length == 1 ? `0${val}` : val,
        text: month[index]
      });
    }

    return months;
  },

  selectDay() {
    let days = [];
    for (let index = 0; index < 31; index++) {
      let val = index + 1;
      days.push({
        value: `${val}`.length == 1 ? `0${val}` : val,
        text: index + 1
      });
    }

    return days;
  },
}