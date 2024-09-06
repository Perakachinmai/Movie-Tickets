document.getElementById('calculate').addEventListener('click', function() {
    const movie = document.getElementById('movie');
    const seats = document.getElementById('seats');
    const total = document.getElementById('total');

    const ticketPrice = +movie.value;
    const numberOfSeats = +seats.value;

    const totalPrice = ticketPrice * numberOfSeats;

    total.textContent = `Total: $${totalPrice}`;
});
