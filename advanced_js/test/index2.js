
let userLogin = "";
let userPs = "";
let userToken = "";
let cardsArr = [];
let sortedCardsArr = [];

class Login {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  request() {
    return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password,
      }),
    })
      .then((response) => response.text())
      .then((token) => {
        userToken = token;
        userLogin = this.email;
        userPs = this.password;
        return token;
      });
  }
}
class AuthorizationModal {
  apear() {
    let formBox = document.createElement("div");
    formBox.classList.add("form-box");
    formBox.id = "form-box";
    document.body.prepend(formBox);
    formBox.innerHTML = document.querySelector("#login-templ").innerHTML;
    formBox.addEventListener("click", (e) => {
      if (e.target.id === "form-box") {
        this.disapear();
      } else if (e.target.id === "modalLoginBtn") {
        let user = {};
        user.email = document.querySelector("#userEmailInput").value;
        user.password = document.querySelector("#userPasswordInput").value;
        let requestLogin = new Login(user.email, user.password).request();
        requestLogin.then((data) => {
          if (
            data === "Incorrect username or password" ||
            user.email === "" ||
            user.password === ""
          ) {
          } else {
            localStorage.setItem("token", data);
            this.disapear();
            this.login();
          }
        });
      }
    });
  }
  login() {
    this.changeBtn();
    new Filter().apear();
    new HtmlCards().render();
  }
  changeBtn() {
    document.querySelector(".header-btn").id = "createCard";
    document.querySelector(".header-btn").innerText = "Створити картку";
  }
  disapear() {
    document.querySelector(".form-box").remove();
  }
}
class Modal {
  apear() {
    let formBox = document.createElement("div");
    formBox.classList.add("form-box");
    formBox.id = "form-box";
    document.body.prepend(formBox);
    formBox.innerHTML = document.querySelector("#create-form-templ").innerHTML;
    let doctorSelect = document.querySelector("#doctorTypeSelect");
    doctorSelect.addEventListener("change", () => {
      let age = document.createElement("input");
      switch (doctorSelect.value) {
        case "cardiologist":
          document.querySelector(".add-options").innerHTML = "";
          let normalPressureOption = document.createElement("input");
          normalPressureOption.id = "patientNormalPressureInput";
          normalPressureOption.classList.add("create-form__input");
          normalPressureOption.placeholder = "тиск пацієнта";

          let massIndex = document.createElement("input");
          massIndex.id = "massIndexIput";
          massIndex.classList.add("create-form__input");
          massIndex.placeholder = "індекс маси тіла";

          age.id = "ageInput";
          age.classList.add("create-form__input");
          age.placeholder = "вік";

          let diseases = document.createElement("input");
          diseases.id = "diseasesInput";
          diseases.classList.add("create-form__input");
          diseases.placeholder = "перенесені захворювання";

          document
            .querySelector(".add-options")
            .append(normalPressureOption, massIndex, age, diseases);

          break;

        case "dentist":
          document.querySelector(".add-options").innerHTML = "";
          let lastDate = document.createElement("input");
          lastDate.id = "lastDateInput";
          lastDate.classList.add("create-form__input");
          lastDate.placeholder = "дата останніх відвідин";
          lastDate.type = "date";
          let lastDateP = document.createElement("p");
          lastDateP.innerText = "дата останнього візиту:";
          lastDateP.classList.add("add-text");
          document.querySelector(".add-options").append(lastDateP, lastDate);

          break;
        case "therapist":
          document.querySelector(".add-options").innerHTML = "";
          age.id = "ageInput";
          age.classList.add("create-form__input");
          age.placeholder = "вік";
          document.querySelector(".add-options").append(age);

          break;
      }
    });
    formBox.addEventListener("click", (e) => {
      if (e.target.id === "form-box") {
        this.disapear();
      } else if (e.target.id === "cardCreateSubm") {
        let patient = {};

        patient.fullName = document.querySelector("#patientNameInput").value;
        try {
          patient.age = document.querySelector("#ageInput").value;
        } catch (error) {
          console.log(error.message);
        }
        try {
          patient.pressure = document.querySelector(
            "#patientNormalPressureInput"
          ).value;
        } catch (error) {
          console.log(error.message);
        }
        try {
          patient.massIndex = document.querySelector("#massIndexIput").value;
        } catch (error) {
          console.log(error.message);
        }
        try {
          patient.lastDate = document.querySelector("#lastDateInput").value;
        } catch (error) {
          console.log(error.message);
        }
        try {
          patient.diseases = document.querySelector("#diseasesInput").value;
        } catch (error) {
          console.log(error.message);
        }
        patient.purpose = document.querySelector("#purposeInput").value;
        patient.description = document.querySelector("#shortDescInput").value;
        patient.urgency = document.querySelector("#urgencySelect").value;
        patient.doctorType = document.querySelector("#doctorTypeSelect").value;

        const request = new Login(userLogin, userPs).request();

        request.then((value) => {
          new Visit(patient, value).post();
        });
        this.disapear();
      }
    });
  }
  disapear() {
    document.querySelector(".form-box").remove();
  }
}

class Visit {
  constructor(patient, token) {
    this.obj = patient;
    this.token = token;
  }
  render() {
    console.log(this.urgency);
  }
  post() {
    return fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(this.obj),
    })
      .then((response) => response.json())
      .then((response) => {
        cardsArr.push(response);
        new Card(response).render();
      });
  }
  put() {
    fetch("https://ajax.test-danit.com/api/v2/cards/" + this.obj.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(this.obj),
    })
      .then((response) => response.json())
      .then((response) => {
        let cardToEdit = document.querySelector(`#card-${this.obj.id}`);
        cardToEdit.querySelector(".card-p-info.name").innerText =
          "ПІБ: " + response.fullName;

        cardToEdit.querySelector(".card-p-info.description").innerText =
          "опис: " + response.description;
        try {
          cardToEdit.querySelector(".card-p-info.purpose").innerText =
            "мета: " + response.purpose;
        } catch (error) {}

        if (response.doctorType === "cardiologist") {
          cardToEdit.querySelector(".card-p-info.doctor").innerText =
            "лікар: кардіолог";
          cardToEdit.querySelector(".card-addinfo").innerHTML = `
          <p class="card-p-info description">опис: ${response.description}</p>
    <p class="card-p-info purpose">мета: ${response.purpose}</p>
    <p class="card-p-info pressure">тиск: ${response.pressure}</p>
    <p class="card-p-info index">індекс маси тіла: ${response.massIndex}</p>
    <p class="card-p-info age">вік: ${response.age}</p>
    <p class="card-p-info diseases">перенесені захворювання: ${response.diseases}</p>
    <p class="card-p-info urgency">терміновість: ${response.urgency}</p>
          `;
        } else if (response.doctorType === "dentist") {
          cardToEdit.querySelector(".card-p-info.doctor").innerText =
            "лікар: дентист";
          cardToEdit.querySelector(".card-addinfo").innerHTML = `
        <p class="card-p-info description">опис: ${response.description}</p>
    <p class="card-p-info">мета: ${response.purpose}</p>
    <p class="card-p-info urgency">терміновість: ${response.urgency}</p>
    <p class="card-p-info date">дата останнього візиту: ${response.lastDate}</p>
        `;
        } else {
          cardToEdit.querySelector(".card-p-info.doctor").innerText =
            "лікар: терапевт";
          cardToEdit.querySelector(".card-addinfo").innerHTML = `
           <p class="card-p-info description">опис: ${response.description}</p>
    <p class="card-p-info purpose">мета: ${response.purpose}</p>
    <p class="card-p-info age">вік: ${response.age}</p>
    <p class="card-p-info urgency">терміновість: ${response.urgency}</p>
          `;
        }
        cardToEdit.querySelector(".card-p-info.urgency").innerText =
          "терміновість: " + response.urgency;

        cardsArr.forEach((element) => {
          if (element.id == this.obj.id) {
            element.doctorType = response.doctorType;
            element.description = response.description;
            element.fullName = response.fullName;
            if (response.doctorType === "cardiologist") {
              element.age = response.age;
              element.purpose = response.purpose;
              element.massIndex = response.massIndex;
              element.diseases = response.diseases;
              element.urgency = response.urgency;
              element.pressure = response.pressure;
            } else if (response.doctorType === "dentist") {
              element.lastDate = response.lastDate;
            } else {
              element.age = response.age;
            }
          }
        });
      });
  }
}

const headerBtn = document.querySelector(".header-btn");
headerBtn.addEventListener("click", () => {
  if (headerBtn.id === "createCard") {
    let createModal = new Modal();
    createModal.apear();
  } else {
    let loginModal = new AuthorizationModal();
    loginModal.apear();
  }
});

class HtmlCards {
  request() {
    return fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((arr) => {
        cardsArr = arr.filter((element) => {
          return !!element.doctorType;
        });
        return arr.filter((element) => {
          return !!element.doctorType;
        });
      });
  }

  render() {
    this.request().then((arr) => {
      if (!arr.length) {
        document.querySelector(".noCardsBox").innerText = "карток не знайдено";
      } else {
        document.querySelector(".noCardsBox").innerText = "";
      }
      arr.forEach((element) => {
        new Card(element).render();
      });
    });
  }
  renderFromArr(arr) {
    if (!arr.length) {
      document.querySelector(".noCardsBox").innerText = "карток не знайдено";
    } else {
      document.querySelector(".noCardsBox").innerText = "";
    }
    document.querySelector("#cardsRoot").innerHTML = "";
    arr.forEach((element) => {
      new Card(element).render();
    });
  }
}

class Card {
  constructor(obj) {
    this.cardObj = obj;
  }
  render() {
    let root = document.querySelector("#cardsRoot");
    let card = document.createElement("div");
    card.classList.add("card");

    let cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = "картка";

    let cardDoctor = document.createElement("p");
    cardDoctor.classList.add("card-p-info", "doctor");

    let cardName = document.createElement("p");
    cardName.classList.add("card-p-info", "name");
    cardName.innerText = "ПІБ: " + this.cardObj.fullName;

    let cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.id = "cardCloseBtn";
    cardDeleteBtn.classList.add("card-btn");
    cardDeleteBtn.innerText = "x";

    let cardEditBtn = document.createElement("button");
    cardEditBtn.id = "cardEditBtn";
    cardEditBtn.classList.add("card-btn");
    cardEditBtn.innerText = "редагувати";

    let cardMoreBtn = document.createElement("button");
    cardMoreBtn.id = "cardMore-infoBtn";
    cardMoreBtn.classList.add("card-btn");
    cardMoreBtn.innerText = "показати більше";
    let cardMoreIter = 1;
    cardMoreBtn.addEventListener("click", (e) => {
      document
        .querySelector(`#${e.target.parentNode.id} .card-addinfo`)
        .classList.toggle("card-addinfo-hidden");

      if (cardMoreIter % 2 == 0) {
        document.querySelector(
          `#${e.target.parentNode.id} #cardMore-infoBtn`
        ).innerText = "показати більше";
      } else {
        document.querySelector(
          `#${e.target.parentNode.id} #cardMore-infoBtn`
        ).innerText = "показати менше";
      }
      cardMoreIter++;
    });
    cardDeleteBtn.addEventListener("click", (e) => {
      this.delete(e.target.parentNode);
    });

    cardEditBtn.addEventListener("click", (e) => {
      this.edit(e.target.parentNode);
    });

    let cardAddInfo = document.createElement("div");
    cardAddInfo.classList.add("card-addinfo", "card-addinfo-hidden");
    switch (this.cardObj.doctorType) {
      case "cardiologist":
        cardDoctor.innerText = `лікар: кардіолог`;
        cardAddInfo.innerHTML = `
        <p class="card-p-info description">опис: ${this.cardObj.description}</p>
    <p class="card-p-info purpose">мета: ${this.cardObj.purpose}</p>
    <p class="card-p-info pressure">тиск: ${this.cardObj.pressure}</p>
    <p class="card-p-info index">індекс маси тіла: ${this.cardObj.massIndex}</p>
    <p class="card-p-info age">вік: ${this.cardObj.age}</p>
    <p class="card-p-info diseases">перенесені захворювання: ${this.cardObj.diseases}</p>
    <p class="card-p-info urgency">терміновість: ${this.cardObj.urgency}</p>
        `;

        break;
      case "therapist":
        cardDoctor.innerText = `лікар: терапевт`;
        cardAddInfo.innerHTML = `
        <p class="card-p-info description">опис: ${this.cardObj.description}</p>
    <p class="card-p-info purpose">мета: ${this.cardObj.purpose}</p>
    <p class="card-p-info age">вік: ${this.cardObj.age}</p>
    <p class="card-p-info urgency">терміновість: ${this.cardObj.urgency}</p>
        `;
        break;
      case "dentist":
        cardDoctor.innerText = `лікар: дентист`;
        cardAddInfo.innerHTML = `
        <p class="card-p-info description">опис: ${this.cardObj.description}</p>
    <p class="card-p-info">мета: ${this.cardObj.purpose}</p>
    <p class="card-p-info urgency">терміновість: ${this.cardObj.urgency}</p>
    <p class="card-p-info date">дата останнього візиту: ${this.cardObj.lastDate}</p>
        `;

        break;

      default:
        break;
    }
    card.id = "card-" + this.cardObj.id;
    card.append(cardTitle);
    card.append(cardName);
    card.append(cardDoctor);
    card.append(cardAddInfo);
    card.append(cardMoreBtn);
    card.append(cardEditBtn);
    card.append(cardDeleteBtn);
    root.prepend(card);

    document.querySelector(".noCardsBox").innerText = "";
  }

  delete(target) {
    fetch("https://ajax.test-danit.com/api/v2/cards/" + target.id.slice(5), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        cardsArr.filter((element) => {
          console.log(element);
          if (element.id == target.id.slice(5)) {
            console.log(1);
            return false;
          } else {
            console.log(2);
            return true;
          }
        });
        console.log(cardsArr);
        target.remove();
      } else {
        alert("smth went wrong");
      }
      console.log(
        cardsArr.findIndex((element) => element.id === target.id.slice(5))
      );
      cardsArr.splice(
        cardsArr.findIndex((element) => element.id === target.id.slice(5)),
        1
      );
      if (!cardsArr.length) {
        document.querySelector(".noCardsBox").innerText = "карток не знайдено";
      } else {
        document.querySelector(".noCardsBox").innerText = "";
      }
    });
  }
  edit(eGlobal) {
    let formBox = document.createElement("div");
    formBox.classList.add("form-box");
    formBox.id = "form-box";
    document.body.prepend(formBox);
    formBox.innerHTML = document.querySelector("#edit-form-templ").innerHTML;
    let doctorSelect = document.querySelector("#doctorTypeSelect");
    doctorSelect.addEventListener("change", () => {
      let age = document.createElement("input");
      switch (doctorSelect.value) {
        case "cardiologist":
          document.querySelector(".add-options").innerHTML = "";
          let normalPressureOption = document.createElement("input");
          normalPressureOption.id = "patientNormalPressureInput";
          normalPressureOption.classList.add("create-form__input");
          normalPressureOption.placeholder = "тиск пацієнта";

          let massIndex = document.createElement("input");
          massIndex.id = "massIndexIput";
          massIndex.classList.add("create-form__input");
          massIndex.placeholder = "індекс маси тіла";

          age.id = "ageInput";
          age.classList.add("create-form__input");
          age.placeholder = "вік";

          let diseases = document.createElement("input");
          diseases.id = "diseasesInput";
          diseases.classList.add("create-form__input");
          diseases.placeholder = "перенесені захворювання";

          document
            .querySelector(".add-options")
            .append(normalPressureOption, massIndex, age, diseases);

          break;

        case "dentist":
          document.querySelector(".add-options").innerHTML = "";
          let lastDate = document.createElement("input");
          lastDate.id = "lastDateInput";
          lastDate.classList.add("create-form__input");
          lastDate.placeholder = "дата останніх відвідин";
          lastDate.type = "date";
          let lastDateP = document.createElement("p");
          lastDateP.innerText = "дата останнього візиту:";
          lastDateP.classList.add("add-text");
          document.querySelector(".add-options").append(lastDateP, lastDate);

          break;
        case "therapist":
          document.querySelector(".add-options").innerHTML = "";
          age.id = "ageInput";
          age.classList.add("create-form__input");
          age.placeholder = "вік";
          document.querySelector(".add-options").append(age);

          break;
      }
    });
    formBox.addEventListener("click", (e) => {
      if (e.target.id === "form-box") {
        document.querySelector(".form-box").remove();
      } else if (e.target.id === "cardCreateSubm") {
        let patient = {};

        patient.fullName = document.querySelector("#patientNameInput").value;
        try {
          patient.age = document.querySelector("#ageInput").value;
        } catch (error) {
          console.log(error.message);
        }
        try {
          patient.pressure = document.querySelector(
            "#patientNormalPressureInput"
          ).value;
        } catch (error) {
          console.log(error.message);
        }
        try {
          patient.massIndex = document.querySelector("#massIndexIput").value;
        } catch (error) {
          console.log(error.message);
        }
        try {
          patient.lastDate = document.querySelector("#lastDateInput").value;
        } catch (error) {
          console.log(error.message);
        }
        try {
          patient.diseases = document.querySelector("#diseasesInput").value;
        } catch (error) {
          console.log(error.message);
        }
        patient.purpose = document.querySelector("#purposeInput").value;
        patient.description = document.querySelector("#shortDescInput").value;
        patient.urgency = document.querySelector("#urgencySelect").value;
        patient.doctorType = document.querySelector("#doctorTypeSelect").value;

        patient.id = eGlobal.id.slice(5);

        const request = new Login(userLogin, userPs).request();

        request.then((value) => {
          new Visit(patient, value).put();
        });

        document.querySelector(".form-box").remove();
      }
    });
  }
}

class Filter {
  apear() {
    document.querySelector(".filter-box").style.display = "block";

    let sortBtn = document.querySelector("#searchBnt");
    sortBtn.addEventListener("click", () => {
      this.sort(cardsArr);
    });
  }
  sort(arrToSort) {
    let urgencyFilter = document.querySelector("#urgencyFilterSelect").value;
    let doctorTypeFilter = document.querySelector(
      "#doctorTypeFilterSelect"
    ).value;
    let wordsFilter = document.querySelector("#textSearchInput").value;
    console.log(arrToSort);

    sortedCardsArr = [];
    console.log(urgencyFilter, doctorTypeFilter, wordsFilter);
    sortedCardsArr = arrToSort.filter((element) => {
      if (element.doctorType === doctorTypeFilter || doctorTypeFilter == "") {
        if (element.urgency === urgencyFilter || urgencyFilter == "") {
          if (
            `${element.fullName} ${element.purpose} ${element.description}`.includes(
              wordsFilter
            ) ||
            wordsFilter == ""
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    console.log(sortedCardsArr);

    new HtmlCards().renderFromArr(sortedCardsArr);
  }
}
