import React from "react";

export default function Body() {
  const Show = () => {
    const getData = async function () {
      var response = await fetch("https://www.boredapi.com/api/activity");
      var data = await response.json();
      return data;
    };
    getData()
      .then(function (data) {
        console.log(data);
        document.querySelector("#output").innerHTML = data.activity;
      })
      .catch(function (err) {
        console.log(err);
      });
    getData();
  };

  return (
    <div>
      <div class="box bg-light">
        <h3 class="text-center fw-bold pt-5">Try This</h3>
        <img
          class="mx-auto d-block mt-5"
          src="icons8-down-arrow-64.png"
          alt=""
        />
        <form class="d-grid mx-5">
          <button
            class="btn btn-outline-success my-5 fs-6 fw-bold"
            onClick={Show}
            type="button"
          >
            What To Do?
          </button>
          <div class="bg-white text-center border mb-5 p-1 img-rounded">
            <label id="output"></label>
          </div>
        </form>
      </div>
    </div>
  );
}
