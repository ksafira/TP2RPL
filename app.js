const DB_USER = [
    {
        username: "ksafira",
        password: "rpl123"
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputConfirm = document.getElementById("confirm");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => 
    {
        e.preventDefault();
        const valueInputUsername = inputUsername.value;
        const valueInputPassword = inputPassword.value;  
        const valueInputConfirm = inputConfirm.value;  
        
        let flag = 0;

        DB_USER.map((data) => 
            {
                if(data.username === valueInputUsername && data.password === valueInputPassword && valueInputPassword === valueInputConfirm)
                {
                    flag = 1; 
                }
            }
        ) 

        if(flag === 0)
        {
            console.log("ERROR. Password tidak sesuai! Silahkan coba lagi.");   
        }
        else
        {
            console.log("Selamat! Akun anda berhasil didaftarkan");    
        }

    }
)




