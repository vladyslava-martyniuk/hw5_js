let cost;
const subscription = prompt(
  "Оберіть напій: кава, чай чи сік. Обраний напій введіть в поле нижче"
);

switch (subscription.toLowerCase()) {
  case "кава":
    alert("Ви обрали напій: кава");
    cost = 5;
    break;
  case "чай":
    alert("Ви обрали напій: чай");
    cost = 3;
    break;
  case "сік":
    alert("Ви обрали напій: сік");
    cost = 7;
    break;
  default:
    alert("Будь ласка, оберіть напій: кава, чай чи сік.");
    break;
}

console.log("Ціна напою: " + cost);
