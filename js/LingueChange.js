import { to_en } from "../lang/en"
import { to_zh_s } from "../lang/zh_s"

var lingua = localStorage.getItem("lang")
if (lingua = "en") {
    console.log ("It's English.")
    to_en()
} else if (lingua = "zh_s") {
    to_zh_s()
}