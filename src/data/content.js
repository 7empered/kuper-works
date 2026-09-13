import {
  Shield,
  Sparkles,
  SprayCan,
  Layers,
  Lightbulb,
} from "lucide-react";

export const SERVICES = [
  {
    icon: Shield,
    title: "Керамічне покриття 9H",
    text: "Захист лакофарбового покриття motorsport-рівня. До 5 років блиску та стійкості до хімії, УФ-випромінювання й дрібних сколів.",
    feature: true,
  },
  {
    icon: Sparkles,
    title: "Поліровка кузова",
    text: "Триетапна корекція лаку. Прибираємо павутинку подряпин та голограми, повертаємо глибину кольору.",
  },
  {
    icon: SprayCan,
    title: "Хімчистка салону",
    text: "Повна детейлінг-підготовка салону: шкіра, алькантара, пластик — без компромісів у деталях.",
  },
  {
    icon: Layers,
    title: "PPF захист",
    text: "Прозора поліуретанова плівка на капот, бампер і дзеркала — невидимий щит від каменів і піску.",
  },
  {
    icon: Lightbulb,
    title: "Відновлення оптики",
    text: "Полірування фар та ліхтарів до заводської прозорості й максимальної яскравості світла.",
  },
];

export const PROCESS = [
  { num: "01", title: "Діагностика ЛФП", text: "Оглядаємо кузов при направленому світлі, фіксуємо товщину лаку товщиноміром і узгоджуємо обсяг робіт." },
  { num: "02", title: "Деконтамінація", text: "Очищення бітумних плям та залізо-фази, обробка глиняним абсорбентом, повне знежирення перед поліровкою." },
  { num: "03", title: "Корекція лаку", text: "Багатоетапна поліровка кожної панелі окремо, з постійним контролем товщини покриття." },
  { num: "04", title: "Фінальний захист", text: "Нанесення кераміки або PPF, витримка часу полімеризації, контроль якості при денному світлі." },
];

export const COMPARISONS = [
  { model: "BMW M4 Competition", before: "матовий лак після трасового дня", after: "кераміка 9H, глибина кольору відновлена" },
  { model: "Porsche 911 Carrera", before: "голограми від миття щіткою", after: "триетапна поліровка без дефектів" },
  { model: "Mercedes-AMG C63", before: "пожовкла, каламутна оптика", after: "прозора оптика після відновлення" },
  { model: "Audi RS6 Avant", before: "незахищений бампер і капот", after: "PPF плівка, нульовий знос за сезон" },
];

export const PRICING = [
  {
    tier: "ENTRY",
    price: "4 900 ₴",
    items: ["Ручне безконтактне миття", "Очищення бітумних плям", "Полірування шин і пластику", "Захисний віск на 1–2 місяці"],
  },
  {
    tier: "PERFORMANCE",
    price: "16 900 ₴",
    highlight: true,
    items: ["Все з тарифу ENTRY", "Двоетапна абразивна поліровка", "Відновлення оптики", "Детейлінг салону — шкіра й алькантара", "Захисне покриття на 6 місяців"],
  },
  {
    tier: "KUPER PRO",
    price: "32 000 ₴",
    priceNote: "від",
    items: ["Все з тарифу PERFORMANCE", "Триетапна корекція лаку", "Кераміка 9H + PPF на ключові зони", "Обробка скла, дисків і супортів", "Гарантія 24 місяці"],
  },
];

export const TESTIMONIALS = [
  { initials: "ДК", name: "Дмитро К.", car: "BMW M4 Competition", quote: "Забирав М4 після треку — виглядає краще, ніж коли забирав з салону дилера. Кераміка тримає бруд, миється за хвилину." },
  { initials: "ОК", name: "Олена К.", car: "Skoda Octavia", quote: "Робили хімчистку салону після дитячих крісел і собаки — запах зник повністю, а не просто перебився ароматизатором." },
  { initials: "МС", name: "Максим С.", car: "Audi RS6 Avant", quote: "PPF поставили за добу, жодного скола за 10 000 км автобану. Записуюсь тільки сюди, іншим не довіряю." },
  { initials: "ІВ", name: "Ірина В.", car: "Toyota RAV4", quote: "Хотіла просто освіжити салон перед продажем — зробили так, що я передумала продавати. Виглядає як нове авто." },
  { initials: "АП", name: "Андрій П.", car: "Porsche Cayenne", quote: "Кераміку роблю у них вже другий раз на різних авто. Наносять акуратно, пояснюють кожен етап, без зайвого тиску на додаткові послуги." },
  { initials: "НТ", name: "Наталія Т.", car: "Volkswagen Golf", quote: "Не очікувала такого рівня уваги до звичайного гольфа — поліровка зняла всі дрібні подряпини після міста. Дуже задоволена." },
];

// Extra clones on each side so the carousel can show up to 3 cards
// at once and still loop seamlessly in both directions.
export const TESTI_CLONE_COUNT = 3;
export const TESTIMONIALS_LOOP = [
  ...TESTIMONIALS.slice(-TESTI_CLONE_COUNT),
  ...TESTIMONIALS,
  ...TESTIMONIALS.slice(0, TESTI_CLONE_COUNT),
];

export const NAV_ITEMS = [
  { href: "#services", label: "Послуги" },
  { href: "#process", label: "Процес" },
  { href: "#compare", label: "Результат" },
  { href: "#pricing", label: "Ціни" },
  { href: "#testimonials", label: "Відгуки" },
  { href: "#contact", label: "Контакти" },
];

export const STUDIO = {
  name: "KUPER WORKS",
  tagline: "Detailing Studio",
  address: "вул. Кирилівська, 160, Київ",
  addressShort: "вул. Кирилівська, 160",
  phoneDisplay: "+38 (099) 123-45-67",
  phoneHref: "tel:+380991234567",
  hours: "Пн–Сб, 9:00 – 19:00, за записом",
};

export const AUTO_ADVANCE_MS = 6000;
export const IDLE_RETURN_MS = 2200;
