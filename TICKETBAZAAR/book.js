document.addEventListener('DOMContentLoaded',function(){
    const seats = document.querySelectorAll('.seat:not(.sold)');
    const countElement = document.getElementById('count');
    const totalElement = document.getElementById('total');

    let selectedSeats = [];
    let totalPrice = 0;

    function updateSelectedCountAndTotal() {
        countElement.textContent = selectedSeats.length;
        totalElement.textContent = totalPrice;
        return totalPrice;
    }

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
            const seatIndex = selectedSeats.indexOf(seat);
            if (seatIndex === -1) {
                selectedSeats.push(seat);
                totalPrice += 200;
            } 
            
            else {
                selectedSeats.splice(seatIndex, 1);
                totalPrice -= 200;
            }

            updateSelectedCountAndTotal();
        });
    });
})

