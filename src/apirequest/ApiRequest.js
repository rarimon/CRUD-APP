import axios    from "axios";



export const LoginReqest=async (formData)=>{
    let url = "https://api.escuelajs.co/api/v1/auth/login";

    try {
        let response = await axios.post(url, formData, {
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.status === 200 || response.status === 201) {
            return response['data']['access_token'];
        }
        else{
           return  null;
        }
    }
    catch(err){
        console.log(err);
    }


    }