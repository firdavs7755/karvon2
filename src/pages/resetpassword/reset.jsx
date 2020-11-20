import React from 'react';
import st from './reset.module.scss';
import cx from 'classnames';
import users from '../../img/users.png';
import { useState } from 'react';
import { authApi } from '../../service/authService';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Countdown from 'react-countdown';
import Entercode from '../entercode/entercode'


const cookie = new Cookies();
function Reset(){

    const [phone,setPhone] = useState("");
    const [request , setRequest ] = useState({
        error : false,
        process : false,
        success : false
    })
    const[success,setSuccess] = useState(false)
    const [disable,setDisable] = useState();
    const [code , setCode] = useState("");
    // const [kodXato , setKodXato] = useState("");


    const sendCode = e => {
        e.preventDefault();
        setRequest({ ...request , process : true});
        authApi.sendResetCode({ phone : phone })
        .then( res => {
            console.log(res.data);
            setRequest({ error : false, success:true,process : false})
            cookie.set('phone',phone,{ path : '/entercode' });
            // console.log(cookie.get('phone'))
            },
            err => {
                console.log(err);
                setRequest({ error : true , success : false , process : false })
            })
    }
    const sendCodeAndPhone = e => {
        e.preventDefault();
        // setRequest({ ...request , process : true});
        authApi.sendResetCodeAndPhone({phone : phone,code:code })
            .then( res => {
                    console.log(res.data.success);
                    setRequest({ error : false, success : true , process : false})
                    setSuccess(res.data.success)
                    cookie.set('phone',phone,{ path : '/entercode' });
                    // console.log(cookie.get('phone'))
                },
                err => {
                    console.log(err);
                    setRequest({ error : true , success : false , process : false })
                })
    }
    return(
        <div className="my-5">
            <div className="container">
                <form className={cx("card p-3",st.reset)} style={{"display":!success?"block":"none"}} onSubmit={ sendCode}>
                    <div className={"text-center"}>

                        <img src={users} className={cx(st.reset_icon)} alt=""/>
                    </div>

                    {
                        !request.success &&
                        <div>
                            <div className={"p-0 m-0"}>

                                <h2 className={cx(st.reset_title)}>Забыли Ваш пароль ?</h2>
                                <p className={cx(st.reset_description)}>Введите свой номер телефона, чтобы отправить код
                                    для сброса пароля.</p>
                            </div>
                            <div className={cx("input-group", st.reset_input)}>
                                <span className="input-group-prepend">
                                    <i className="fa fa-fw fa-phone"></i>
                                </span>
                                <input onChange={e => setPhone(e.target.value)} disabled={request.success}
                                       placeholder="+998991234567" required type="tel" className="form-control"/>
                            </div>
                        </div>
                    }

                    {
                        request.error && 
                        <div className="alert alert-danger mx-0 mx-sm-4">
                            <i className="fa fa-fw fa-exclamation-triangle"></i>&nbsp;
                            Пользователь введенного номера не зарегистрирован
                        </div>
                    }
                    {
                        request.success &&
                        <div className="alert alert-success mx-0 mx-sm-4">
                            <i className="fa fa-fw fa-check-circle"></i>&nbsp; Код был отправлен на номер {phone} для сброса пароля.

                            <label className={cx(st.padding)}>Введите код, который вы получили в SMS
                                    <Countdown className={"ml-3"} date={Date.now() +2*60*1000}
                                               daysInHours={true}/>
                            </label>
                            <div className={cx("input-group",st.entercode_input)}>
                            <span className="input-group-prepend">
                                <i className="fa fa-fw fa-lock"></i>
                            </span>
                                <form className={cx("card",st.reset)} onSubmit={sendCodeAndPhone}>
                                    <input onChange={ e => setCode(e.target.value)} placeholder="Введите код здесь" required
                                           type="text" className="form-control"/>
                                </form>
                            </div>


                        </div>
                    }
                    <div className={cx("d-flex align-items-center justify-content-between flex-wrap",st.reset_links)}>
                        <Link to='/entercode' className="mx-2"> Вы уже получили пароль? </Link>
                        <button disabled={ request.success } type="submit" className={cx(st.reset_button)}> Отправить код
                            {
                                request.process && <i className="fa fa-fw fa-circle-notch fa-spin"></i>
                            }
                        </button>
                    </div>
                </form>
                <div className={"my-0 pt-0"} style={{"display":success?"block":"none"}}>
                    <Entercode/>
                </div>
            </div>
        </div>
    )
}
export default Reset;