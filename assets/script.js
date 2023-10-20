setInterval(function(){let date = dayjs();
    $('#date').text(date.format('MM/d/YYYY'))
    
    let currentTime = dayjs();
    $('#time').text(currentTime.format('hh: mm: ss: a'))
    }, 1000);
    
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')
    
    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
    })