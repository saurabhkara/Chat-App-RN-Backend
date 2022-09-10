const user_module=require('./user.module');

class user_controller extends user_module{
    static create_user=async (req, res)=>{
        try {
            let response=await this.save_user_details(req);
            // console.log('response sending',response)
            let message= 'Success';
            res.send({
                success:true,
                message:message,
                data:{...response,...{phoneNumber:req?.body?.phoneNum}}
            })
        } catch (error) {
            let status_code=error.status_code !=undefined?error.status_code:500;
            let type=error.type!=undefined ?error.type:'bad request';
            let message = err.custom_msg!=undefined?error.custom_msg:"something went wrong";
            req.status(status_code).send({
                success:false,
                error:type,
                message:message
            })
        }
    }




    static get_user=async (req, res)=>{
        try {
            console.log('get user Controller response',req.body);
            let response=await this.retrieve_user(req);
            let message= 'Success';
            res.send({
                success:true,
                message:message,
                data:response
            })
        } catch (error) {
            let status_code=error.status_code !=undefined?error.status_code:500;
            let type=error.type!=undefined ?error.type:'bad request';
            let message = err.custom_msg!=undefined?error.custom_msg:"something went wrong";
            req.status(status_code).send({
                success:false,
                error:type,
                message:message
            })
        }
    }

    static verify_otp=async (req, res)=>{
        try {
            let response=await this.verify_user(req);
            console.log("response ......**")
            if(response.status){
                res.send({
                    success:true,
                    message:response.message,
                    data:response.user
                })
            }else{
                res.send({
                    success:false,
                    message:response.message,
                    error:false,
                    data:{"1":'invalid otp'}
                })
            }
            
        } catch (error) {
            let status_code=error.status_code !=undefined?error.status_code:500;
            let type=error.type!=undefined ?error.type:'bad request';
            let message = error.custom_msg!=undefined?error.custom_msg:"something went wrong";
            req.status(status_code).send({
                success:false,
                error:type,
                message:message
            })
        }
    }

}

module.exports=user_controller;