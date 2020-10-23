let bookingList = document.getElementById("booking-list");
bookingList.addEventListener("load", function (){
    Getbookings();
});

function GetBookings(){
    let url = 'https://api.sheety.co/b9b23bacbce0fa05289abc34d8cf52e6/bookingApp/bookings';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      // console.log(json.bookings);
      var bookings = document.getElementById("bookings");
      var bookingIds = [];
      bookings.innerHTML = "";
      for(var i = 0; i < json.bookings.length; i++){
        var gName = json.bookings[i].name;
        var gEmail = json.bookings[i].email;
        var gPax = json.bookings[i].pax;
        var gId = json.bookings[i].id;
        var buttonId = "delete" + gId; // <--
        
        let row = bookings.insertRow(bookings.rows.length);
        row.insertcell(0).innerHTML = gId;
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML - gEmail;
        row.insertCell(3).innerHTML = gPax;
        row.insertCell(4).innerHTML ="";
        row.insertCell(5).innerHTML ="<button id ='" + buttonId + "'>Delete</button><br>";
        
        bookingIds.push(buttonId);

      }

      for (let j = 0; j < bookingIds.length; j++){
          
        let el=document.getElementById(bookingIds[j]);
        
        el.addEventListener("click", function(){
          
          let theId = bookingIds[j].replace("delete","");
          DeleteBooking(theId);
          //DeleteBooking(theId);
        });
      }

