/* <script>
        // login button event handler 
        const loginBtn = document.getElementById('login')
        loginBtn.addEventListener('click', function(){
        const loginArea = document.getElementById('login-area')
        loginArea.style.display = "none"
        const transaction = document.getElementById('transaction-area')
        transaction.style.display = "block"
        })
        
        // deposit button event handler
        const depositBtn = document.getElementById("addDeposit")
        depositBtn.addEventListener("click", function(){
        const depAmount = document.getElementById("depositAmount").value
        const depositNumber = parseFloat(depAmount)

        const currentDeposit = document.getElementById('currentDeposit').innerText
        const currentDepositNumber = parseFloat(currentDeposit)
        const totalDeposit = depositNumber + currentDepositNumber
        document.getElementById('currentDeposit').innerText = totalDeposit

        const currentBalance = document.getElementById('currentBalance').innerText
        const currentBalanceNumber = parseFloat(currentBalance)
        const totalBalance = depositNumber + currentBalanceNumber    
        document.getElementById('currentBalance').innerText = totalBalance

        document.getElementById("depositAmount").value = ""
       
    })
    </script> */