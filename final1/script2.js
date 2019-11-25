let creditCard = {};
creditCard.amount = 10000;
creditCard.pin = "1111";
creditCard.pinTry = 3;
creditCard.status = 'active';
creditCard.getCash = function (pin, sum) {
    if (creditCard.status === "disabled") {
        disabled()
    } else {
        if ($('#pin-code').val() !== creditCard.pin) {
            // console.log($('#pin-code').val() !== creditCard.pin);
            // console.log(creditCard.pin);
            wrongPin();
            if (!creditCard.pinTry) {
                wrongPinAllTry()
            }
        } else {
            if ($('#money-sum').val() <= creditCard.amount) {
                giveMoney($('#money-sum').val());
            } else {
                noMoney()
            }
        }
    }
}
;


    $('#get-cash').on('click', creditCard.getCash);

    function disabled() {
        $('#cash-request-result').text("Ваша карта заблокирована, обратитесь в банк для ее разблокировки")
    }

    function wrongPin() {
        $('#cash-request-result').text("Неправильный пин-код! Попробуйте пожалуйста снова!");
        --creditCard.pinTry;
    }

    function wrongPinAllTry() {
        creditCard.status = 'disabled';
        $('#cash-request-result').text("Неправильный пин-код! Вы исчерпали количество попыток. Ваша карта заблокирована, обратитесь в банк для ее разблокировки");
    }

    function giveMoney(sum) {
        creditCard.pinTry = 3;
        creditCard.amount -= sum;
        $('#cash-request-result').text('Получите ваши - ' + sum + '');
        console.log(creditCard.amount)
    }

    function noMoney() {
        creditCard.pinTry = 3;
        $('#cash-request-result').text('К сожалению, на вашем счету недостаточно средств');
    }