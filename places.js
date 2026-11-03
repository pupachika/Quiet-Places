// ============================================================
//  ЭТО ЕДИНСТВЕННЫЙ ФАЙЛ, КОТОРЫЙ НУЖНО РЕДАКТИРОВАТЬ.
//  Подробная инструкция лежит в README.md.
// ============================================================

// ---------- 1. Настройки сайта ----------
window.SITE = {
  title: "Quiet Places",                       // название сайта
  subtitle: "A hand-picked catalog of natural places worth the trip.",  // подзаголовок
  footer: "",                                  // строка внизу страницы (можно оставить пустой)

  // Подписи интерфейса. Можно перевести на любой язык или не трогать.
  ui: {
    search: "Search places",
    all: "All",
    close: "Close",
    location: "Location",
    best: "Best time",
    tip: "Tip",
    map: "Open on map",
    places: "places",
    empty: "Nothing found. Try another word or category."
  }
};

// ---------- 2. Места ----------
// Каждое место - это блок { ... }, между блоками стоит запятая.
// Новые места добавляйте В НАЧАЛО списка: они будут первыми на сайте.
// Обязательно только поле title. Все остальные поля можно удалить.
// Три места ниже - ПРИМЕРЫ. Удалите их, когда добавите свои.
window.PLACES = [

  {
    id: "KalemegdanFortressandPark",            // латиницей, без пробелов, уникальный. Можно не писать.
    title: "Kalemegdan Fortress and Park",
    category: "Park",                  // по категориям строятся кнопки-фильтры
    location: "Belgrade, Serbia",
    season: "Autumn",              // лучшее время (необязательно)
    image: "images/Kalemegdan2.jpg",      // главное фото из папки images
    images: ["images/Kalemegdan1.jpg", "images/Kalemegdan3.jpg", "images/Kalemegdan4.jpg"], // дополнительные фото (необязательно)
    description: `Kalemegdan is usually treated as the city’s main monument, but its aesthetic is much richer when you look at it as a layered, ruin-romantic landscape rather than a checklist of sights. The fortress is a palimpsest of medieval, Ottoman, Austrian, and modern layers: ivy-covered walls, old gates, stone passages, sudden openings onto the confluence, and quiet corners in the Lower Town that feel far removed from the main promenade. The most atmospheric moments are not at the Victor monument or the main viewpoints, but in the transitions — descending stairways, shaded paths along the ramparts, wet stone after rain, and the contrast between heavy fortification and the softness of the park. At golden hour, the views over the Sava and Danube become almost painterly, but the real aesthetic strength of Kalemegdan is its sense of time: weathered surfaces, hidden courtyards, and the feeling that the city’s history is built directly into the stone.


`,
    tags: ["park", "Kalemegdan", "fortress"],
    map: "https://maps.app.goo.gl/DeiKyETtNzPQ5vBM9"                             // ссылка на карту вида https://... (необязательно)
  },

  {
    id: "UšćePark",            // латиницей, без пробелов, уникальный. Можно не писать.
    title: "Ušće Park",
    category: "Park",                  // по категориям строятся кнопки-фильтры
    location: "Belgrade, Serbia",
    season: "Autumn",              // лучшее время (необязательно)
    image: "images/UšćePark1.jpg",      // главное фото из папки images
    images: ["images/UšćePark2.jpg", "images/UšćePark3.jpg", "images/UšćePark4.jpg"], // дополнительные фото (необязательно)
    description: `Ušće Park is not niche in location, but its aesthetic is often under-read. It is a vast modernist riverside landscape where long poplar-lined avenues, open lawns, and low vegetation meet the monumental brutalist skyline of New Belgrade. The real beauty here is in the openness and scale: the wind moving through the trees, the wide views toward the Sava–Danube confluence, and the way the park frames the river and the city as a minimalist, almost cinematic backdrop. At dusk, the water becomes a mirror for the sky and the concrete towers, giving the place a calm, slightly melancholic atmosphere. It is best experienced as a slow walk along the confluence, away from the main paths, when the light turns soft and the park feels more like a quiet edge of the city than a central recreation area.


`,
    tags: ["park", "forest", "quiet"],
    map: "https://maps.app.goo.gl/W3m5rogVyZnVLiVb7"                             // ссылка на карту вида https://... (необязательно)
  },

  {
    id: "BelgradeDesignDistrict",            // латиницей, без пробелов, уникальный. Можно не писать.
    title: "Belgrade Design District",
    category: "Gallery",                  // по категориям строятся кнопки-фильтры
    location: "Belgrade, Serbia",
    season: "Every season",              // лучшее время (необязательно)
    image: "images/BelgradeDesignDistrict1.jpg",      // главное фото из папки images
    images: ["images/BelgradeDesignDistrict2.jpg", "images/BelgradeDesignDistrict3.jpg", "images/BelgradeDesignDistrict4.jpg"], // дополнительные фото (необязательно)
    description: `This place is often called a “hidden treasure” in the very center. A former shopping center built in 1991 fell into decline, but starting in 2010 it began to be taken over by young designers and artists. Today it is a narrow pedestrian alley-gallery where storefronts of local brands sit alongside workshops, galleries, and tiny cafés. The aesthetic here is built on contrast: urban graffiti, vintage architecture, and the smell of freshly brewed coffee create a very photogenic and relaxed atmosphere.

`,
    tags: ["Design", "Alley", "Gallery"],
    map: "https://maps.app.goo.gl/eDvL6YqLmya1FhQT7"                             // ссылка на карту вида https://... (необязательно)
  },

  {
    id: "Jevremovac",            // латиницей, без пробелов, уникальный. Можно не писать.
    title: "Botanical Garden “Jevremovac“",
    category: "Garden",                  // по категориям строятся кнопки-фильтры
    location: "Belgrade, Serbia",
    season: "Spring, Autumn",              // лучшее время (необязательно)
    image: "images/Jevremovac1.jpg",      // главное фото из папки images
    images: ["images/Jevremovac2.jpg", "images/Jevremovac3.jpg", "images/Jevremovac4.jpg"], // дополнительные фото (необязательно)
    description: `If you need a break from city noise with beautiful aesthetics, this place is ideal. Founded in 1874, the garden is only a 10–15 minute walk from Republic Square, yet it has remarkable quiet. The main aesthetic jewels are the Victorian greenhouse built in 1892 (glass and iron) and a small Japanese garden. This place often remains in the shadow of more popular parks, so here you can enjoy beauty in almost complete solitude.
`,
    tags: ["Garden", "Botanical", "Park"],
    map: "https://maps.app.goo.gl/4qCRArd7EhyJuQUNA"                             // ссылка на карту вида https://... (необязательно)
  },

];
