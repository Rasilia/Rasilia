import { lang_home_en } from "../lang/home/en.js"
import { lang_home_ja } from "../lang/home/ja.js"
import { lang_home_ml } from "../lang/home/ml.js"
import { lang_home_zh_s } from "../lang/home/zh_s.js"
import { lang_home_zh_t } from "../lang/home/zh_t.js"
import { lang_home_it } from "../lang/home/it.js"


var lingua = localStorage.getItem("lang")
if (lingua == "en") {
    lang_home_en()
} else if (lingua == "zh_s") {
    lang_home_zh_s()
} else if (lingua == "it") {
    lang_home_it()
} else if (lingua == "zh_t") {
    lang_home_zh_t()
} else if (lingua == "ml") {
    lang_home_ml()
} else if (lingua == "ja") {
    lang_home_ja()
}