

const menuData = {
  Coffee: [
    {
        name: "Макијато",
        price: "80 mkd",
        image: "assets/makijato.jpg",
        description: "Еспресо со ванила и карамела.",
        details: {
            text: "Подготвено со еспресо и мал слој млечна пена.",
            features: [
                "🔥 Топол",
                "🧊 Ладен",
                "🍮 Со карамела"
            ]
        }
    },
    {
        name: "Американо",
        price: "120 mkd",
        image: "assets/amerikano.jpg",
        description: "Еспресо со топла вода.",
        details: {
            text: "Интензивен вкус на еспресо со дополнителна топла вода за полесно пиење.",
            features: [
                "🔥 Топол",
                "🧊 Ладен",
                "☕ Двојно еспресо"
            ]
        }
    },
    {
        name: "Капучино",
        price: "140 mkd",
        image: "assets/kapucino.jpg",
        description: "Еспресо, парено млеко и млечна пена.",
        details: {
            text: "Совршен баланс помеѓу еспресо, млеко и богата млечна пена.",
            features: [
                "🥛 Класично",
                "🍫 Со чоколадо",
                "🧊 Ладно"
            ]
        }
    },
    {
        name: "Лате",
        price: "120 mkd",
        image: "assets/late.jpg",
        description: "Кремасто парено млеко со еспресо.",
        details: {
            text: "Нежен и кремаст вкус со поголема количина парено млеко.",
            features: [
                "🥛 Класично",
                "🍦 Со ванила",
                "🧊 Ладно"
            ]
        }
    },
    {
        name: "Мока",
        price: "150 mkd",
        image: "assets/moka.jpg",
        description: "Еспресо напиток со вкус на чоколадо.",
        details: {
            text: "Комбинација од еспресо, чоколадо и кремасто млеко.",
            features: [
                "🍫 Темно чоколадо",
                "🤍 Бело чоколадо",
                "🧊 Ладна мока"
            ]
        }
    },
    {
        name: "Еспресо",
        price: "80 mkd",
        image: "assets/espreso.jpg",
        description: "Богато и интензивно еспресо.",
        details: {
            text: "Подготвено од свежо сомелени зрна за богат и интензивен вкус.",
            features: [
                "☕ Кратко",
                "☕ Долго",
                "☕ Двојно"
            ]
        }
    }
    ],

    Tea: [
        {
            name: "Зелен чај",
            price: "150 мкд",
            image: "assets/zelen caj.png",
            description: "Свеж и лесен зелен чај.",
            details: {
                text: "Подготвен од висококвалитетни листови зелен чај со свеж и природен вкус.",
                features: [
                    "🍃 Природен",
                    "🔥 Топол",
                    "🧊 Ладен"
                ]
            }
        },
        {
            name: "Црн чај",
            price: "150 мкд",
            image: "",
            description: "Класичен силен црн чај.",
            details: {
                text: "Богат чај со интензивен вкус и пријатна арома.",
                features: [
                    "☕ Јак вкус",
                    "🔥 Топол",
                    "🍋 Со лимон"
                ]
            }
        },
        {
            name: "Камилица",
            price: "180 мкд",
            image: "",
            description: "Опуштачки билен чај.",
            details: {
                text: "Нежен билен напиток од камилица погоден за моменти на релаксација.",
                features: [
                    "🌼 Билен",
                    "😌 Опуштачки",
                    "🔥 Топол"
                ]
            }
        },
        {
            name: "Мача лате",
            price: "270 мкд",
            image: "",
            description: "Јапонска мача со млеко.",
            details: {
                text: "Кремаст напиток направен со традиционална јапонска мача и свежо млеко.",
                features: [
                    "🍵 Јапонска мача",
                    "🥛 Со млеко",
                    "✨ Кремаст"
                ]
            }
        },
        {
            name: "Леден чај со праска",
            price: "210 мкд",
            image: "",
            description: "Освежителен чај со вкус на праска.",
            details: {
                text: "Ладен чај со сладок вкус на праска, идеален за топли денови.",
                features: [
                    "🧊 Ладен",
                    "🍑 Со праска",
                    "🌞 Освежителен"
                ]
            }
        }
    ],

    Smoothies: [
    {
        name: "Смути од јагода",
        price: "300 мкд",
        image: "assets/smutiJagodka.png",
        description: "Свежи јагоди и јогурт.",
        details: {
            text: "Кремасто смути направено со свежи јагоди и јогурт.",
            features: [
                "🍓 Со јагода",
                "🥛 Со јогурт",
                "❄️ Ладен"
            ]
        }
    },
    {
        name: "Смути од манго",
        price: "320 мкд",
        image: "",
        description: "Слатко тропско манго.",
        details: {
            text: "Тропско смути со богат вкус на зрело манго.",
            features: [
                "🥭 Со манго",
                "🌴 Тропски вкус",
                "🧊 Освежителен"
            ]
        }
    },
    {
        name: "Смути од банана",
        price: "290 мкд",
        image: "",
        description: "Кремасто смути од банана.",
        details: {
            text: "Густо и кремасто смути со природна сладост од банана.",
            features: [
                "🍌 Со банана",
                "🥛 Кремаст",
                "❄️ Ладен"
            ]
        }
    },
    {
        name: "Бери експлозија",
        price: "330 мкд",
        image: "",
        description: "Мешани бобинки со јогурт.",
        details: {
            text: "Освежително смути со комбинација од различни бобинки и јогурт.",
            features: [
                "🫐 Со бобинки",
                "🥛 Со јогурт",
                "🌿 Свеж"
            ]
        }
    },
    {
        name: "Тропски рај",
        price: "350 мкд",
        image: "",
        description: "Ананас, манго и кокос.",
        details: {
            text: "Егзотично смути со тропски овошја и кремаст вкус на кокос.",
            features: [
                "🍍 Со ананас",
                "🥭 Со манго",
                "🥥 Со кокос"
            ]
        }
    }
    ],

    Desserts: [
    {
        name: "Чизкејк",
        price: "270 мкд",
        image: "assets/Cizkejk.png",
        description: "Кремаст њујоршки чизкејк.",
        details: {
            text: "Богат десерт со кремаста текстура и традиционален вкус на сирење.",
            features: [
                "🍰 Кремаст",
                "✨ Сладок",
                "🧀 Со сирење"
            ]
        }
    },
    {
        name: "Чоколадна торта",
        price: "300 мкд",
        image: "",
        description: "Богати чоколадни слоеви.",
        details: {
            text: "Вкусна торта со интензивен чоколаден вкус и мека текстура.",
            features: [
                "🍫 Со чоколадо",
                "🍰 Сочна",
                "⭐ Популарна"
            ]
        }
    },
    {
        name: "Брауни",
        price: "210 мкд",
        image: "",
        description: "Сочен чоколаден брауни.",
        details: {
            text: "Мек и богат чоколаден десерт со интензивен вкус.",
            features: [
                "🍫 Чоколаден",
                "🔥 Свеж",
                "😋 Сочен"
            ]
        }
    },
    {
        name: "Кроасан",
        price: "180 мкд",
        image: "",
        description: "Свеж путер кроасан.",
        details: {
            text: "Крцкав однадвор и мек одвнатре, подготвен со путер.",
            features: [
                "🥐 Со путер",
                "🔥 Свеж",
                "☕ Совршен со кафе"
            ]
        }
    },
    {
        name: "Мафин со боровинки",
        price: "210 мкд",
        image: "",
        description: "Мек мафин со боровинки.",
        details: {
            text: "Мек и сладок мафин со свежи боровинки.",
            features: [
                "🫐 Со боровинки",
                "🍰 Мек",
                "✨ Сладок"
            ]
        }
    }
    ]
};

const carousel = document.getElementById("menuCarousel");
const buttons = document.querySelectorAll(".category-btn");

function displayCategory(category) {

    // Stop any ongoing scrolling immediately
    carousel.scrollLeft = 0;

    carousel.innerHTML = "";

    menuData[category].forEach(drink => {
        carousel.innerHTML += `
        <div class="menu-item">

            <div class="menu-item-image">
                <img src="${drink.image}" alt="${drink.name}">
                <span class="menu-item-price">${drink.price}</span>
            </div>

            <div class="menu-item-content">
                <h3>${drink.name}</h3>
                <p>${drink.description}</p>
            </div>

            ${
                drink.details
                ? `
                <div class="menu-item-details">
                    <p>${drink.details.text}</p>
                    <p>Видови:</p>
                    <ul>
                        ${drink.details.features.map(feature => `<li>${feature}</li>`).join("")}
                    </ul>
                </div>

                <div class="menu-item-arrow">
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                `
                : ""
            }

        </div>
        `;
    });

    requestAnimationFrame(() => {
        carousel.scrollLeft = 0;
    });

    document.querySelectorAll(".menu-item-arrow").forEach(arrow => {
      arrow.addEventListener("click", () => {
          const card = arrow.closest(".menu-item");

          document.querySelectorAll(".menu-item").forEach(item => {
              if (item !== card) {
                  item.classList.remove("expanded");
              }
          });

          card.classList.toggle("expanded");
      });
  });
}

buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        displayCategory(button.textContent.trim());
    });
});

// Default category
displayCategory("Coffee");