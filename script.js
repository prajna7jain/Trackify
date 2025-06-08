
        const getStartedBtn = document.getElementById('get-started-btn');
        const getStartedSection = document.getElementById('get-started-section');
        const inputFieldsSection = document.getElementById('input-fields-section');
        const clearBtn = document.getElementById('clear-btn');
        const enterBtn = document.getElementById('enter-btn');

      
        getStartedBtn.addEventListener('click', () => {
            getStartedSection.classList.remove('active-section');
            getStartedSection.classList.add('hidden-section');
            inputFieldsSection.classList.remove('hidden-section');
            inputFieldsSection.classList.add('active-section');
        });
        

        clearBtn.addEventListener('click', () => {
            document.getElementById('userName').value = '';
            document.getElementById('userBalance').value = '';
            inputFieldsSection.classList.remove('active-section');
            inputFieldsSection.classList.add('hidden-section');
            getStartedSection.classList.remove('hidden-section');
            getStartedSection.classList.add('active-section');
        });

        enterBtn.addEventListener('click', () => {
            const userName = document.getElementById('userName').value;
            const userBalance = document.getElementById('userBalance').value;
            const userData = {
                name : userName,
                balance : userBalance
            }
            if (userName.trim() === '' || userBalance.trim() === '') {
                alert('Please enter both name and balance.');
                return; 
            }
            
            localStorage.setItem("User-info",JSON.stringify(userData));
            window.location.href = 'expTrack.html'; 
            
        });