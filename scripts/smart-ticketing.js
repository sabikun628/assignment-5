const bookingList = document.getElementById("book-seats-list");
const couponApplyBtn = document.getElementById("apply");
function appendSeatToList(seatNumber) {
  const selectedSeatCount = getTextElementValueById("selectedSeatCount");
  const seatLeft = getTextElementValueById("seat-left");

  if (selectedSeatCount + 1 < 2) {
    couponApplyBtn.disabled = false;
    setTextElementValueById("selected-seat", seatNumber);
    hideElementById("no-seat-selected");
    showElementById("book-seats-list");
    setTextElementValueById("selectedSeatCount", selectedSeatCount + 1);
    setTextElementValueById("seat-left", seatLeft - 1);
    setTextElementValueById("total-price", (selectedSeatCount + 1) * 550);
    setTextElementValueById("grand-total", (selectedSeatCount + 1) * 550);

    removeBackgroundColorById(seatNumber, "bg-[#E6E6E8]");
    setBackgroundColorById(seatNumber, "bg-[#1DD100]");
    setTextColorById(seatNumber, "text-white");
  } else if (selectedSeatCount < 4) {
    const element = document.getElementById("seats-book").innerHTML;

    const newDiv = document.createElement("div");

    newDiv.innerHTML = element;

    const selectedSeatText = newDiv.querySelector("#selected-seat");
    selectedSeatText.textContent = seatNumber;

    bookingList.appendChild(newDiv);
    setTextElementValueById("selectedSeatCount", selectedSeatCount + 1);
    setTextElementValueById("seat-left", seatLeft - 1);
    removeBackgroundColorById(seatNumber, "bg-[#E6E6E8]");
    setBackgroundColorById(seatNumber, "bg-[#1DD100]");
    setTextColorById(seatNumber, "text-white");
    setTextElementValueById("total-price", (selectedSeatCount + 1) * 550);
    setTextElementValueById("grand-total", (selectedSeatCount + 1) * 550);
  } else {
    alert("You can't select more than 4 seats!");
  }
}

function applyCouponCode() {
  const inputValue = document.getElementById("couponCode").value;
  const isAlreadyDiscounted = getTextElementValueById("discount-price");
  if (inputValue === "NEW15" || inputValue === "Couple 20") {
    showElementById("discounted-price");
    const totalPrice = getTextElementValueById("total-price");
    console.log(isAlreadyDiscounted);

    if (isAlreadyDiscounted > 0) {
      alert("Already coupon code applied!");
    } else if (inputValue === "NEW15") {
      const discountPrice = (totalPrice * 15) / 100;
      setTextElementValueById("discount-price", discountPrice);
      setTextElementValueById("grand-total", totalPrice - discountPrice);
    } else if (inputValue === "Couple 20") {
      const discountPrice = (totalPrice * 20) / 100;
      setTextElementValueById("discount-price", discountPrice);
      setTextElementValueById("grand-total", totalPrice - discountPrice);
    }
  } else {
    alert("Oops, you submit wrong coupon code!");
  }
}

function handleSubmit() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const grandTotal = getElementTextById("grand-total");

  if (grandTotal > 0 && phone) {
    console.log(name, email, phone, grandTotal);

    showElementById("success-page");
    hideElementById("ticket-section");
    hideElementById("offer-section");
    hideElementById("banner-section");
  } else {
    alert("Please fill the form and select a seat!");
  }
}


