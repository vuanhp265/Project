export function toSlug(text = "") {
return text
.toString()
.normalize("NFD") // bóc dấu tiếng Việt
.replace(/\p{Diacritic}/gu, "")
.toLowerCase()
.trim()
.replace(/[^a-z0-9\s-]/g, "")
.replace(/\s+/g, "-")
.replace(/-+/g, "-");
}