document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    var modal = document.getElementById("productModal");
    var modalCard = document.getElementById("modalCard");
    var span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.tile #view').forEach(function(button) {
        button.addEventListener('click', function() {
            var tile = this.closest('.tile');
            var title = tile.querySelector('.description h3').innerText;
            var description = tile.querySelector('.description p').innerText;
            var imgSrc = tile.querySelector('img').src;

            // Create card content
            var cardContent = `
                <div class="card">
                    <h3>${title}</h3>
                    <div class="card-body">
                        <img src="${imgSrc}" alt="${title}">
                        <p>${description}</p>
                    </div>
                    <button class="btn" id="modalBuy">Buy Now</button>
                </div>
            `;

            // Inject card content into modal
            modalCard.innerHTML = cardContent;

            // Add event listener to the "Buy Now" button in the modal
            document.getElementById('modalBuy').addEventListener('click', function() {
                window.location.href = tile.querySelector('.button-container a').href;
            });

            // Display the modal
            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
