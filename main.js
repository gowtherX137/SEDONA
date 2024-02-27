document.addEventListener("DOMContentLoaded", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  const winnerIcons = document.querySelectorAll(".winner-icon");

  gridItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      // Remove active class from all items
      gridItems.forEach(function (item) {
        item.classList.remove("active");
      });
      winnerIcons.forEach(function (icon) {
        icon.classList.remove("active");
      });

      // Add active class to the clicked item
      this.classList.add("active");
      winnerIcons[index].classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(
    ".room-buttons .styled-button button"
  );
  const items = document.querySelectorAll(".rooms .container .item");

  // Add click event listeners to buttons
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Add active class to the clicked button
      this.classList.add("active");

      // Toggle visibility based on the clicked button
      toggleVisibility(this.textContent.toLowerCase()); // Assuming the text content matches the desired type
    });
  });

  // Function to toggle visibility based on button clicked
  function toggleVisibility(type) {
    items.forEach(function (item) {
      const itemType = item.dataset.type; // Get the data-type attribute value
      if (type === "all" || itemType === type) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var dropdownSelected = document.querySelector(".dropdown-selected");
  var dropdownContent = document.querySelector(".dropdown-content");

  // Toggle dropdown
  dropdownSelected.addEventListener("click", function () {
    var isOpen = dropdownContent.style.display === "block";
    dropdownContent.style.display = isOpen ? "none" : "block";
    // Toggle 'open' class
    if (isOpen) {
      dropdownSelected.classList.remove("open");
    } else {
      dropdownSelected.classList.add("open");
    }
  });
  // Handle selection
  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", function () {
      dropdownSelected.innerHTML = this.innerHTML;
      dropdownContent.style.display = "none"; // Hide dropdown content
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.querySelector('input[type="range"]');
  slider.oninput = function () {
    var value = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.style.background =
      "linear-gradient(to right, #4eaf90 0%, #4eaf90 " +
      value +
      "%, #000 " +
      value +
      "%, #000 100%)";
  };
});
