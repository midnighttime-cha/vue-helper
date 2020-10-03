# vue-helper

## Project setup
```javascript
//main.js
...
import axios from "@/plugins/axios.js";
import * as hp from "@/helpers/index.js";
...
Vue.prototype.$http = axios;
Vue.prototype.$hp = hp;
...
```
