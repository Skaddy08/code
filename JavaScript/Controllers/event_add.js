import EventsService from "../Services/Events_Service.js";

$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const eventID = urlParams.get('id');

  EventsService.getEventsDetailsbyId(eventID)
    .then((response) => {
      let eventdata = response.data;
      console.log(eventdata);

      $(".Event-name").text(eventdata.event_name);
      $(".Event-artist").text(eventdata.artist_name);
      $(".Event-date").text(eventdata.date);
      $(".Event-time").text(eventdata.time);

      let ticketCounts = {
        "silver": 0,
        "gold": 0,
        "platinum": 0,
        "diamond": 0
      };
console.log(ticketCounts["silver"]);

      function appendTicketInfo(ticketType, ticketPrice) {
        var ticketBlock = $('<div>').addClass('ticket-block');
        var ticketInfo = $('<div>').addClass('ticket-info');
        var heading = $('<h2>').text(ticketType + " Ticket");
        var price = $('<p>').html('<strong>' + ticketPrice + '</strong>');

        ticketInfo.append(heading, price);
        ticketBlock.append(ticketInfo);
        
        // Add the "ADD" button for each ticket type
        var addButton = $('<button>').addClass('add-btn').attr('data-type', ticketType).text('ADD');
        ticketBlock.append(addButton);

        $('#ticket-container').append(ticketBlock);
      }

      // Fetch ticket prices and update div tags
      $.each(eventdata.ticket_price, function(type, price) {
        appendTicketInfo(type, price);
        // Optionally, you can also update individual div tags with prices
        $(`.${type}-price`).text(price);
      });

      $(document).on('click', '.add-btn', function() {
        const ticketType = $(this).data('type');

        if (!$(this).hasClass('active')) {
          $(this).addClass('active');
          $(this).html(`
            <button class="increment" data-type="${ticketType}">+</button>
            <span class="count" data-type="${ticketType}">${ticketCounts[ticketType]}</span>
            <button class="decrement" data-type="${ticketType}">-</button>
          `);
        }
      });

      $(document).on('click', '.increment', function() {
        const ticketType = $(this).data('type');
        ticketCounts[ticketType]++;
        updateCountDisplay(ticketType);
        updateTotalInfo();
      });

      $(document).on('click', '.decrement', function() {
        const ticketType = $(this).data('type');
        if (ticketCounts[ticketType] > 0) {
          ticketCounts[ticketType]--;
          updateCountDisplay(ticketType);
          updateTotalInfo();
        }
      });

      function updateCountDisplay(ticketType) {
        $(`.count[data-type="${ticketType}"]`).text(ticketCounts[ticketType]);
      }
console.log(ticketCounts)
// ... (your existing code)

function updateTotalInfo() {
  const totalCount = Object.values(ticketCounts).reduce((a, b) => a + b, 0);
  const totalPrice = ticketCounts['silver'] * eventdata.ticket_price['silver'] +
                     ticketCounts['gold'] * eventdata.ticket_price['gold'] +
                     ticketCounts['platinum'] * eventdata.ticket_price['platinum'] +
                     ticketCounts['diamond'] * eventdata.ticket_price['diamond'];

  $('#total-count').text(totalCount);
  $('#total-price').text(totalPrice);
}

// ... (rest of your existing code)


      $('#proceed-btn').click(function() {
        const totalCount = Object.values(ticketCounts).reduce((a, b) => a + b, 0);

        if (totalCount === 0) {
          alert('Please select a seat to proceed.');
          return false;
        } else {
          window.location.href = '../HTML/event_recipiet.html';
        }
      });

    })
    .catch((error) => {
      console.log(error);
    });
});
